import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Alltransactions.css'
import Navbar from '../../components/Navbar/Navbar'

function Alltransactions() {
  const [transaction, setTransaction] = useState([]);

  const localStoragedata = JSON.parse(localStorage.getItem("customer") || "{}");
  // console.log(localStoragedata);

  const loadData = async () => {
    const response = await axios.get(`/api/transaction/user/${localStoragedata?._id}`)
    setTransaction(response?.data?.data)
    // console.log(response?.data?.data)
    console.log(localStoragedata?._id)
  }

  useEffect( () => {
    loadData()
  }, [])

  return (
    
    <div>
      <Navbar />
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
    </div>
  )
}

export default Alltransactions
