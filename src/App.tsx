import { useState } from 'react'
import logo from './sssnt1.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prioritize your well-being and grow through meaningful activities</p>
      </header>
    </div>
  )
}

export default App
