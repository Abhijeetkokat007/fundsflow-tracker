import React from 'react'
import { useState, useEffect } from 'react';
import './SignUp.css';
import Navbar from '../../components/Navbar/Navbar';
import signupimg from './../../Images/Signup.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male")

  const loadsignup = async () => {

    if(!name){
      alert('Name is required')
    }
    if(!password){
        alert('Password is required')
      }
      if(!email){
        alert('Email is required')
      }
     
      if(!mobile){
        alert('Mobile Number is required')
      }
      

    const data = {
      name,
      email,
      mobile,
      gender,
      password
    }

    const response = await axios.post("/api/signup", data)

    alert(response?.data?.message)
    if(response?.data?.success){
        window.location.href = "/login";
    }
    // else{
    //     alert(response?.data?.message)
    //     setName('')
    //     setEmail('')
    //     setNumber('')
    //     setPassword('')
    // }
  }

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("customer") || "{}");
    console.log(storageUser);

    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <div className='signup-container-main'>
        <div>
          <img className='signup-img' src={signupimg} />
           </div>

        <div className='signup-container'>
        {/* <h2 className='text-center'>SignUp</h2> */}
         
        <input type='text'
         className='input-box'
          placeholder='Enter your Name' 
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
          />

        <input type='email'
         className='input-box' 
         placeholder='Enter your Email' 
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         />

        <input type='text'
         className='input-box'
          placeholder='Enter your Mo. Number'
          value={mobile}
          onChange={(e)=>{
           setMobile(e.target.value)
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

        <div className='ml-2'>

          <input  type='radio'
           name='radio'
           checked={gender === 'Male'}
          value={gender}
          onClick={() => {
            setGender('Male');
          }}
           />Male


        <input type='radio'
         name='radio'
         checked={gender === 'Female'}
          value={gender}
          onClick={() => {
            setGender('Female');
          }}
         />Female
        </div>
       <p> <Link to={"/Login"} className='link-form'>Already an Account? </Link></p>

        <button onClick={loadsignup} className='btn-register'>REGISTER</button>
      </div>

      </div>
    </div>
  )
}

export default SignUp
