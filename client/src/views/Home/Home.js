import React from 'react'
import './Home.css'
import fundimg from './../../Images/fundimg.jpg'
import Navbar from './../../components/Navbar/Navbar.js'

function Home() {

  return (


    <div>
      <Navbar />


      <div className='image-main'>

       <div>
       <h1 className='img-heading'>Tools for </h1>
       <h1 className='m--10'>Tracking Your Spending</h1>
        <p className='m-20px'>Get your a monthly expense tracker</p>
        <p className='m--10'> to help track your spending.</p>

        <button className='btn-register get-start' onClick={()=>{ window.location.href = "/login";}}>Get Start</button>
       </div>

       <div>
       <img src={fundimg} className='img-fundimg' />
       </div>

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

      <div className='home-poster bg-orange'>

        <div className='home-poster-text'>
          <h1>Use a Budget Planner</h1>
          <h3>Track Expenses to Help You Build a Personal Budget</h3>
          <p>It isn’t realistic to think that you’ll track your spending forever. Even tracking your spending for a month is great and you can use what you learned to improve your monthly budget. Life can be unpredictable, so if your circumstances do change, go back to tracking for another few weeks to get your spending in line with your new level of expenses or income.

            Where do you start? If you’re not sure how to start tracking, here are two options to get you started. The key things to remember is keep it simple, go easy on yourself, and ask for help if you need it. Old habits can be hard to break!</p>
        </div>
        <div >
          <img className='poster-img' src='https://nomoredebts.org/wp-content/uploads/2020/08/tracking-personal-budget-monthly_2colm.jpg' alt='img' />
        </div>
      </div>

      <div className='home-poster bg-white'>
        <div >
          <img className='poster-img' src='https://nomoredebts.org/wp-content/uploads/2020/10/tracking-spending-by-categorizing_2colm.jpg' alt='img' />
        </div>
        <div className='home-poster-text'>
          <h1>How to Choose Expense Categories for Tracking</h1>

          <p>Categories are key! Record where you spend your money by categorizing your expenses. The list below highlights the most popular expense categories where people tend to spend their money.

            You can also track your spending by choosing the types of stores you shop at. If you usually shop for groceries, personal care, and paper/household products all at one superstore, having a category with the name of the store might work better for you.

            There are no right or wrong categories, but remember that you’ll need enough to track your spending accurately.</p>
        </div>
      </div>

      <div className='home-poster bg-orange'>

        <div className='home-poster-text'>
          <h1>Use a Budget Planner</h1>
          <h3>An Easy Way to Create a Budget & Work with Expense Categories</h3>
          <p>To make budgeting easier and more fun, we’ve created a budget calculator that guides you as you create your personal or household budget.

            This budget calculator makes suggestions and warns you if it looks like you may be spending too much money in any area of your budget. Once you’re finished, it can review your budget and see if it can find any ways for your to improve your spending plan or save some money.</p>
        </div>
        <div >
          <img className='poster-img' src='https://nomoredebts.org/wp-content/uploads/2020/08/using-budget-sheet_2colm.jpg' alt='img' />
        </div>
      </div>

<div className='devlop-name'>
  Made By @Abhijeetkokat007 <img height="30px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTJYQn37nEl5r7Z1MhX8Jaw6KUvJtkYc0Bw&usqp=CAU'/>
</div>
    </div>
  )
}

export default Home
