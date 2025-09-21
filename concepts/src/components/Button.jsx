import React from 'react'
import {useCounterStore} from '../context/CounterStore'

const Button = ({text}) => {
    const {inc,dec}=useCounterStore()
  return (
    <button onClick ={text==="+"?inc:dec}>{text}</button>
  )
}

export default Button
