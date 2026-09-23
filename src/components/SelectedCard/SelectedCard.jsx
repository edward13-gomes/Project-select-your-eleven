import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    const handleRemove=()=>{
        removePlayer(player)
    }
    return (
         <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl">
                <div className="flex items-center">
                    <img src={player.player_image} alt="" className="h-[50px] w-[50px] rounded-xl"  />
                    <div className="ml-2">
                        <h1>{player.player_name}</h1>
                        <p className="text-xs">{player.playing_role}</p>
                    </div>
                </div>
                   <div>
                    <img  onClick={handleRemove} src="https://i.ibb.co.com/35cbKqM5/Vector-1.jpg" alt="" />
                   </div>
            </div>
    );
};

export default SelectedCard;