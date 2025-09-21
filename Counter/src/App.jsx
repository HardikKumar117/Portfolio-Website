import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './pages/Counter'
import { CounterContext } from './context/Countercontext'

function App() {
  const [count, setCount] = useState(0)
  function inc(){
    setCount(count + 1);
  }
  function dec(){
    setCount(count - 1);
  }

  return (
    <>
    <CounterContext.Provider value={{count, inc, dec}}>
      <Counter/>
      </CounterContext.Provider>
    </>
  )
}

export default App
