import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Name({name,setCount}) {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>{name}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>


    </>
  )
}

export default Name
