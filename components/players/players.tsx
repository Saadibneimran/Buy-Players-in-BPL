import { use, useState, type Dispatch, type SetStateAction } from "react";
import type Iplayers from "../../src/type/playerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
export default function Players({ playersFetch, coin, setCoin }: { playersFetch: Promise<Iplayers[]>, coin: number, setCoin: Dispatch<SetStateAction<number>> }) {
  const players = use(playersFetch);
  // console.log(players);
  const [buttonType, setButtonType] = useState<"available" | "selected">("available");

  const [selectedPlayers, setSelectedPlayers] = useState<Iplayers[]>([]);

  const handleButtonClick = (type: "available" | "selected") => {
    setButtonType(type);
  };
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
        <div>
          <button className={`btn btn-soft ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`} onClick={() => handleButtonClick("available")}>
            Available
          </button>
          <button className={`btn btn-soft ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`} onClick={() => handleButtonClick("selected")}>
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ?( <AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} /> ):( 
    <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
    coin={coin}
    setCoin={setCoin} />
      )
}
    </div>
  )
}