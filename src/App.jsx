import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import rolldice from './utils'

function App() {
  const [result, setResult] = useState(0)

  const resultChanger = () => {
    setResult((currentResult)=>{
      
      return currentResult
    })
    return setResult(rolldice())
  }

  return (
    <>
    <h1 className="header">Dice roller 2.0</h1>
    <div className="dice-area">
    <p className="result">{result}</p>
    <input type="number"></input>
    <button className="button" onClick={resultChanger}>Roll the dice!</button>
    </div>
    </>
  )
}

export default App
