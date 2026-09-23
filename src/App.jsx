

import { Suspense, useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers=async () =>{
  const res =await fetch("./players.json")
  return res.json();
}
const plyaersPromise=fetchPlayers();

function App() {

  
  const [toggle,setToggle]=useState(true);
  const [availableBalance,setAvailableBalance]=useState(6000000000)
  const [purchasedPlayers,setPurchasedPlayers]=useState([]);

  const removePlayer=(p)=>{
           const fileteredData=purchasedPlayers.filter(ply=> ply.player_name!==p.player_name);
           setPurchasedPlayers(fileteredData);
           setAvailableBalance(availableBalance+parseInt(p.price.split("USD").join("").split(",").join("")))
  }

  return (
    <>
  
  <Navbar availableBalance={availableBalance}></Navbar>

  <div className='border-2 border-red-500 max-w-[1200px] mx-auto flex justify-between items-center'>
  <h1 className='font-bold text-2xl'>{
    
    toggle===true?"Available Players":`Selected Players(${purchasedPlayers.length}/6)`
    }
  </h1>

  <div className='font-bold'>
    <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-[#e7fe29]":""}`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false? "bg-[#e7fe29]":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
  </div>
  </div>

{
  toggle===true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
  <AvailablePlayers setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} plyaersPromise={plyaersPromise}></AvailablePlayers>
</Suspense> : <SelectedPlayers removePlayer={removePlayer}  purchasedPlayers={ purchasedPlayers}></SelectedPlayers>
}




  <ToastContainer />
    </>
  )
}

export default App
