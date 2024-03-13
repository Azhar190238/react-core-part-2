import { useState } from "react"

export default function Player(){
    const [player,updatePlayer]=useState(11);
    const handlePlayerAdd=() =>{
        const updated= player+1;
        updatePlayer(updated);
    }
    const handlePlayerRemove=() =>{
        const updated= player-1;
        updatePlayer(updated);
    }
    return (
        <div className="box">
            <h3>Player:{player}</h3>
            <button onClick={handlePlayerAdd} className="button">Add Player</button>
            <button onClick={handlePlayerRemove} className="button">Remove Player</button>
        </div>
    )
}