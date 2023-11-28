import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
const [transaction, setTransaction] = useState([]);

const loadTransaction = async () => {
  const response = await axios.get('/api/transactions');

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
     
    </>
  )
}

export default App

