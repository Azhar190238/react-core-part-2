import { useState } from "react"

//  state management
export default function Counter(){
    const [count, setCount]=useState(0)
    const handleAdd=()=>{
        const newCount= count+1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount= count-1;
        setCount(newCount);
    }
    return (
        <div className="box">
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd} className="button">Add</button>
            <button onClick={handleReduce} className="button">Reduce</button>
        </div>
    )
}