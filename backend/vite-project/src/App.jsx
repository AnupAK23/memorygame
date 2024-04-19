import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)
  const [upper,setUpper] = useState(true)
  const name="Anup"


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <Name name="anup"/> */}
      <div className='case'>
      {upper? <Name name={name.toUpperCase()} setCount={setCount}/>:<Name name={name.toLowerCase()} setCount={setCount}/>}
      <button onClick={()=>setUpper(false)}>lowercase</button>
      <button onClick={()=>setUpper(true)}>uppercase</button>
      <h1>{count}</h1>
      </div>
      <div className="card">
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
