import React from 'react'
import { useState, useEffect } from 'react'

const FetchingData = () => {
    const [data,setData]=useState([])
    useEffect(() => {
       async function getData(){
        const response = await fetch('https://fakestoreapi.in/api/products')
        const result = await response.json()
        setData(result)
       }
    getData()
    },[data])
  return (
    <div>
       {data.length>0 && data.map((item) =><h1 key={item.id}>{item.title}</h1>)}
      {/* You can add your fetching logic here */}
    </div>
  )
}

export default FetchingData
