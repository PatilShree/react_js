import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4"> Hello Tailwind</h1>
      <Card username="Ganesh" btnText="Click me" />
      <Card username="Shubham" btnText="" />
    </>
  )
}

export default App
