import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
const [transaction, setTransaction] = useState([]);

const loadTransaction = async () => {
  const response = await axios.get('/api/transactions');

  const ALL_EMOGY = ({
    "food" : "😋", 
    "entertainment": "🎥", 
    "rent": "🏠", 
    "shoping" : "🛍️", 
    "travel" : " 🧳", 
    "education" : "📚",
     "other": "😎"
})

  const alldata = response?.data?.data ;
  console.log(alldata)
  setTransaction(alldata);
}

useEffect(() => {
loadTransaction()
},[] )
  return (
    <>
    <div>
      
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

