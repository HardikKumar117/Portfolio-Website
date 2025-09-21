// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CalcPage } from './pages/calcPage'

function App() {
const myStyle={color:"violet"}

  return (
    <>
    <h1 style={myStyle} className='mb-10' >Calculator</h1>
    <CalcPage className="d-flex justify-end align-top"/>
    </>
  )
}

export default App
