import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    const userFromlocalStorage = JSON.parse(localStorage.getItem('customer') || '{}');
    setUserdata(userFromlocalStorage);
  }, [])
  return (
    <div className='dis-flex nav-container p-2'>
      <div onClick={() => { window.location.href = "/"; }} className='app-title'><span className='red-title'>FUNDSFLOW</span> <span className='light-title'>Tracker</span> </div>

      <div className='dis-flex '>
        <Link to="/" className='ml-2 font-20 nav-link'> Home </Link>

        {


        }
         <Link to="/transaction" className='ml-2 font-20 nav-link'> My Transaction </Link>

        <Link to="/login" className='ml-2 font-20 nav-link'> Login </Link>
        <Link to="/signup" className='ml-2 font-20 nav-link'> SignUp </Link>






      </div>

      <div className='mt-10 user-text' >
        <img className='profile-img' height='40px' src='https://www.nicepng.com/png/full/202-2024687_profile-icon-png.png' /> Hello {userdata.name?  userdata.name :" User"  }

        {
          userdata?.name ? (<button className='btn-logout'
            onClick={() => {
              localStorage.removeItem("customer");
              window.location.href = "/login"
            }}
          >logOut</button>) : null
        }
      </div>
    </div>
  )
}

export default Navbar

