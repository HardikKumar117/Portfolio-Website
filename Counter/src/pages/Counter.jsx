import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useContext } from 'react'
import { CounterContext } from '../context/Countercontext'

const Counter = () => {
    const {count, inc, dec} = useContext(CounterContext);
  return (
    <>
    <h1>Counter Page</h1>
    <Input text={count}/>
    <Button text={"+"}fn={inc}/>
    <Button text={"-"} fn={dec}/>

    
    </>
  )
}

export default Counter
