import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.js';

function App() {
const [transaction, setTransaction] = useState([]);

const loadTransaction = async () => {
  try{
    const response = await axios.get('/api/transactions');
    const alldata = response?.data?.data ;
    console.log(alldata)
    setTransaction(alldata);
  } catch(e){
    console.log(e.message)
  }

  const ALL_EMOGY = ({
    food : "😋", 
    entertainment: "🎥", 
    rent: "🏠", 
    shoping : "🛍️", 
    travel : " 🧳", 
    education : "📚",
     other: "😎"
})

 
}

useEffect(() => {
loadTransaction()
},[] )
  return (
    <>
    <div>
<Navbar/>
      
      </div>
      {
        transaction?.map((transaction, i) => {
          const{amount, category, type, description, createdAt, updatedAt} = transaction;
  
          return(
           <div className='transaction-card' key={i}>
            <p className='category-transaction'>  {category} </p>
             <span className={` amount-transaction ${ type === "credit" ? "creadit-transaction" : "debit-transaction"}`} >{ type === "credit" ? "+" : "-"} {amount}  </span>
             <span>{ type === "credit" ? "Credited" : "Debited"}</span>
             <p>  </p>
             <hr/>
             
            <p> {description}</p>
           </div>
          )
        })
      }
     
    </>
  )
}

export default App

