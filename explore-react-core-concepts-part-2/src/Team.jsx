import { useState } from "react"

export default function Team()
{
    const [players, setPlayers] = useState(11);
    const handleAdd = () => {
        setPlayers(players + 1);
        console.log("Iam from Team component");
        
    }
    const handleRemove = () => {
        setPlayers(players - 1);
    }
    return(
        <div style={{border: '2px solid yellow', padding: '10px', margin: '10px' }}>
            <h2>Players: {players}</h2>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}