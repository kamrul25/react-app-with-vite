import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Person></Person>
      <Mobile></Mobile>
    </div>
  )
}

function Person(){
  return (
    <div>
      <h2>Kamrul Hasan Jaman</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit soluta consectetur voluptatum perferendis culpa eaque. Totam debitis veniam facere labore?</p>
    </div>
  )
}

function Mobile(){
  const [power, setPower] = useState(100);
  const decreasePower = () => {
    if(power > 0){
      setPower(power - 10)
    }else{
      return;
    }
  };
  
  return (
    <div>
      <h3>Power:{power}%</h3>
      <button onClick={decreasePower}>battery down</button>
    </div>
  )
}
export default App
