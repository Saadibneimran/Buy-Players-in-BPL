import PlayerCard from './PlayerCard';
import type Iplayers from '../../src/type/playerType';
import type { Dispatch, SetStateAction } from 'react';

const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: { players: Iplayers[], coin: number, setCoin: Dispatch<SetStateAction<number>>, selectedPlayers: Iplayers[], setSelectedPlayers: Dispatch<SetStateAction<Iplayers[]>> }) => {

    return (
      
         <div className="grid grid-cols-3 mt-6 gap-7">
            {
                players.map((player: Iplayers, ind:number) => {
                    return <PlayerCard key={ind} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />;
                })
            }
        </div>
    );
};

export default AvailablePlayers;    