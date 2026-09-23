


import { use } from 'react';
import PlayerCard from '../../PlayerCard/PlayerCard';

const AvailablePlayers = ({ plyaersPromise , setAvailableBalance,availableBalance,setPurchasedPlayers,purchasedPlayers}) => {
    const playersData = use(plyaersPromise);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playersData.map(player=> <PlayerCard setPurchasedPlayers={setPurchasedPlayers} purchasedPlayers={purchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }





           
        </div>
    );
};

export default AvailablePlayers;