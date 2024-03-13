import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick1(){
    alert('first clicked');
  }
  const handleClick2=()=>{
    alert('Second clicked');
  }
  const addToFive=(num)=>{
    alert(num+5);
  }


  return (
    <div>

      <h3> React Core part 2</h3>
      
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
       <button onClick={handleClick1} className='button'>Submit Me</button>

       <button onClick={handleClick2} className='button'>Submit Me</button>

       <button onClick={()=> alert('third clicked')} className='button'>Submit Me</button>

       <button onClick={()=>addToFive(4)} className='button'>Submit Me</button>

       </div>
  )
}

export default App
