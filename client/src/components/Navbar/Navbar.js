import React from 'react';
import {Link} from  'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='dis-flex nav-container p-2'>
            <div className='app-title'><span className='red-title'>FUNDSFLOW</span> <span className='light-title'>Tracker</span> </div>

            <div className='dis-flex '>
                <Link to="/" className='ml-2 font-20 nav-link'> Home </Link>
                {/* <Link  to=" "> </Link> */}
                <Link to="/transaction" className='ml-2 font-20 nav-link'> My Transaction </Link>
                <Link to="/login" className='ml-2 font-20 nav-link'> Login </Link>
                <Link to="/signup" className='ml-2 font-20 nav-link'> SignUp </Link>
                {/* <Link to="/orders" className='nav-btn'>My Orders</Link> */}


            </div>

            <div>Login Activity</div>
        </div>
    )
}

export default Navbar
