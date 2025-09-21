import React from 'react'
import { useRef } from 'react'

const title=useRef(title);
const name=useRef(name); 
const phone =useRef(phone);
const email= useRef(email);
const pass=useRef(password);


const handleSubmit = (e) => {
  e.preventdefault();
 
  data={
    title:title.current.value,
    name:name.current.value,
    phone:phone.current.value,
    email:email.current.value,
    password:password.current.value

  }
  console.log(data);
}

const Form = () => {
  return (
    <div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto' }}>
          <label htmlFor="#">Title</label>
          <input type="text" ref={title} />

           <label htmlFor="#">Name</label>
          <input type="text"ref={name} />

           <label htmlFor="#">Phone</label>
          <input type="number" ref={phone} />z

           <label htmlFor="#">Email</label>
          <input type="email" ref={email}/>
          
           <label htmlFor="#">Password</label>
          <input type="password" ref={pass} />

          <button type="submit">Submit</button>

        </div>
      </form>
      
    </div>
  )
}

export default Form
