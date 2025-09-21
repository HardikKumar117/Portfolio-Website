import React from 'react'
import Message from '../components/Message'
import Button from '../components/Button'
import { useEffect } from 'react'
import { useCounterStore } from '../context/CounterStore'


 


const CounterPage = () => {

// const [data, fetchData] = useCounterStore()
// useEffect(() => {
//     fetchData()
// },[data])
  return (
    <div>
     <Message/>
     <Button text="+"/>
     <Button text="-"/>
    </div>
  )
}

export default CounterPage
