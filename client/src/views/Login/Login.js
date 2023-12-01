import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css'
import Navbar from '../../components/Navbar/Navbar'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const logindata = async () => {

    const user = {email,
      password
    }

    try{
      const response = await axios.post("/api/login", user)

      alert(response?.data?.message)
  
      if (response?.data?.success) {
        localStorage.setItem('user', JSON.stringify(response?.data?.data));
        window.location.href = "/";
      }
    }
    catch(e) {
console.log(e.message)
    }
   
  }

  useEffect(()=>{
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}" );

    if(storedUser?.email){
      alert("you are already logged in!");
      window.location.href = "/"
    }
  },[])
  return (
    <div>
      <Navbar/>
      <div className='signup-container-main'>
        <div>
          {/* <img className='signup-img' src={signupimg} /> */}
           </div>

        <div className='signup-container'>
        <h2 className='text-center'>SignUp</h2>
     

        <input type='text'
         className='input-box' 
         placeholder='Enter your Email' 
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         />

        <input type='text'
         className='input-box' 
         placeholder='Enter your Password'
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}
         />

      

        <button onClick={logindata} className='btn-register'>Login</button>
      </div>

      </div>
    </div>
  )
  
  }

export default Login
