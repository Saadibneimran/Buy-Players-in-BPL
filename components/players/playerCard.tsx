import { FaUser, FaStar, FaLocationDot } from 'react-icons/fa6';
import type Iplayers from '../../src/type/playerType';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: { player: Iplayers, coin: number, setCoin: Dispatch<SetStateAction<number>>, selectedPlayers: Iplayers[], setSelectedPlayers: Dispatch<SetStateAction<Iplayers[]>> }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectPlayer = () => {

        if (coin >= player.price) {
            const newCoin = coin - player.price;

            setCoin(newCoin);
            toast.success(` ${player.playerName} is purchased successfully!`);
            setIsSelected(true);
             setSelectedPlayers([...selectedPlayers, player]);
        } else {
            toast.error("Fokir hoi gesos, baki taka nai");
        }

           

    };
    return (
        <div className="group overflow-hidden rounded-3xl border border-base-300/60 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image Section */}
            <div className="relative h-72 overflow-hidden">

                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full  transition duration-500 group-hover:scale-110"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Player Type */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                        {player.playerType}
                    </span>
                </div>

                {/* Player name over image */}
                <div className="absolute bottom-5 left-5 text-white">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/70">
                        Professional Player
                    </p>

                    <h2 className="text-2xl font-bold">
                        {player.playerName}
                    </h2>

                    <div className="mt-1 flex items-center gap-1 text-sm text-white/80">
                        <FaLocationDot size={12} />
                        {player.origin}
                    </div>
                </div>

            </div>

            {/* Content */}
            <div className="p-5">

                {/* Player Info */}
                <div className="grid grid-cols-2 gap-3">

                    {/* Bowling */}
                    <div className="rounded-2xl bg-base-200/70 p-4 transition-colors group-hover:bg-primary/5">
                        <p className="text-xs font-medium text-base-content/50">
                            Bowling Style
                        </p>

                        <p className="mt-2 text-sm font-bold">
                            {player.bowlingStyle}
                        </p>
                    </div>

                    {/* Batting */}
                    <div className="rounded-2xl bg-base-200/70 p-4 transition-colors group-hover:bg-primary/5">
                        <p className="text-xs font-medium text-base-content/50">
                            Batting Style
                        </p>

                        <p className="mt-2 text-sm font-bold">
                            {player.battingStyle}
                        </p>
                    </div>

                </div>

                {/* Rating + Price */}
                <div className="mt-5 flex items-end justify-between">

                    {/* Rating */}
                    <div>
                        <p className="text-xs font-medium text-base-content/50">
                            Player Rating
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <FaStar className="text-warning" size={16} />
                                <span className="font-bold">
                                    4.8
                                </span>
                            </div>

                            <span className="text-xs text-base-content/50">
                                Excellent
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        <p className="text-xs font-medium text-base-content/50">
                            Starting from
                        </p>

                        <p className="mt-1 text-2xl font-black text-primary">
                            ${player.price}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <button onClick={()=>handleSelectPlayer()} className={`btn btn-primary mt-5 w-full rounded-2xl border-0 text-base font-bold shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`} disabled={isSelected}>
                    <FaUser size={15} />
                    {isSelected===true ? "Selected" : "Choose Player"}
                </button>

            </div>
        </div>
    );
};

export default PlayerCard;