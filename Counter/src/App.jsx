import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 0;

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("Add value" + counter)
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    console.log("Decrease value" + counter)

    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1> Started counter project </h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      <br />
      <button onClick={decreaseValue}> Decrease value {counter}</button>
      <p>Current value {counter}</p>
    </>
  )
}

export default App
