import React from 'react'
import {useCounterStore} from '../context/CounterStore'



const Message = () => {
    const {count} =useCounterStore()
  return (
    <h1>{count}</h1>
    
)
}

export default Message
