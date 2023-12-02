import React from 'react'
import './Home.css'
import Navbar from './../../components/Navbar/Navbar.js'

function Home() {
  
  return (
    

    <div>
        <Navbar/>
      

      <div className='image-main'><h1>Tools for Tracking Your Spending</h1> 
      <p className='text-poster'>Get your a monthly expense tracker to help track your spending.</p>
      </div>

     <div className='home-poster'>
      <div >
        <img className='poster-img' src='https://nomoredebts.org/wp-content/uploads/2020/10/tracking-personal-budget_2colm.jpg' alt='img' />
      </div>
      <div className='home-poster-text'>
        <h1>Personal Budgeting</h1>
        <h3>Expense Calculator and Tracker</h3>
        <p>Whether this is your first time tracking your expenses or you’re getting back to it because your situation has changed, we’ve got some helpful tips and tools to get you started. Our expense calculator and budget tracker are designed to make things simple for you.

If you need more immediate financial help or simply prefer to speak with someone face-to-face, our friendly, accredited financial counsellors are available to answer your questions, address your concerns, and help you work out your expenses and budget</p>
      </div>
     </div>
    </div>
  )
}

export default Home
