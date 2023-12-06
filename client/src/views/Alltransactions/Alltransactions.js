import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Alltransactions.css'
import Navbar from '../../components/Navbar/Navbar'
import showToast from 'crunchy-toast';

function Alltransactions() {

  const [user, setUser] = useState("");
  const [description, setDescriptionr] = useState("");
  const [category, setCategory] = useState("Other");
  const [type, setType] = useState("Debit");
  const [amount, setAmount] = useState();

  const [transaction, setTransaction] = useState([]);

 

 
  

  const loadposttransaction = async () => {
   
    if (!amount) {
      showToast('Amount is required', 'alert', 6000);

    }
    if (!description) {
      showToast('Description is required', 'alert', 6000);

    }



    const data = {
      user,
      description,
      category,
      type,
      amount
    }

    const response = await axios.post("/api/transaction", data)


    if (response?.data?.success) {
      window.location.href = "/transaction";
      showToast(response?.data?.message, 'success', 3000)

    }
    else {
      // alert(response?.data?.message)
      setAmount('')
      setDescriptionr('')

    }



  }
  const localStoragedata = JSON.parse(localStorage.getItem("customer") || "{}");
  // console.log(localStoragedata);

  const loadData = async () => {
    const response = await axios.get(`/api/transaction/user/${localStoragedata?._id}`)
    setTransaction(response?.data?.data)
    // console.log(response?.data?.data)
    console.log(localStoragedata?._id)
    console.log(response.data.data)
    setUser(localStoragedata?._id)
  }




  const deleteTransition = async (_id) => {


    const response = await axios.delete(`/api/transactions/${_id}`);
    console.log("id=", _id)
    if (response?.data?.message) {
      loadData();

    }
  };

  useEffect(() => {
    loadData()

    const storageUser = JSON.parse(localStorage.getItem("customer") || "{}");
    console.log(storageUser);

    if (!storageUser?.email) {
      showToast('please Account login !', 'alert', 6000);
      alert("Please Account login !");
      window.location.href = "/login";
    }
  }, [])


  return (

    <div>
      <Navbar />

      <div className='alltransaction-container'>
        <div className='trans-container-main'>
          <h1>Add Transaction ➕</h1>
          <p className='col-bla'>User ID: {user}</p>


          <input type='text'
            className='input-box'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />

          <input type='text'
            className='input-box'
            placeholder='Enter Description'
            value={description}
            onChange={(e) => {
              setDescriptionr(e.target.value)
            }}
          />

          <select className='input-box'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
          >
            <option>Select Category</option>
            <option>Education</option>
            <option>Travel</option>
            <option>Shoping</option>
            <option>Rent</option>
            <option>Entertainment</option>
            <option>Food</option>
            <option>Other</option>
          </select>
          {/* {type} */}
          <input type='radio'
            name='radio'
            checked={type === 'Credit'}
            value={type}
            onClick={() => {
              setType('Credit');
            }}
          />Credit

          <input type='radio'
            name='radio'
            checked={type === 'Debit'}
            value={type}
            onClick={() => {
              setType('Debit');
            }}
          />Debit


          <p> <button onClick={loadposttransaction} className='btn-register'> Add Transaction </button></p>



        </div>

        <div className='all-card-container'>
          {
            transaction?.map((transaction, i) => {
              const { _id, amount, category, type, description, createdAt, updatedAt } = transaction;
              const date = new Date(createdAt).toLocaleDateString();
              const time = new Date(createdAt).toLocaleTimeString();
              const ALL_EMOGY = ({
                Food : "😋", 
                Entertainment: "🎥", 
                Rent: "🏠", 
                Shoping : "🛍️", 
                Travel : " 🧳", 
                Education : "📚",
                Other: "😎"
            })
              return (
                <div className='transaction-cards' key={i}>
                

                  <p className='category-transaction'> {ALL_EMOGY[category]} {category}  </p>
                  <span className={` amount-transaction ${type === "Credit" ? "creadit-transaction" : "debit-transaction"}`} >{type === "Credit" ? "+" : "-"} {amount}  </span>
                  <span>{type === "Credit" ? "Credited" : "Debited"}</span>
                  
                
                    <span>  on {date } at {time} </span>
                
                  



                  <hr/>

                  <p>{description}</p>

                  <span className='delete-text' onClick={() => {
                    deleteTransition(_id);
                  }}> Delete </span>

                  <span className='edit-text' onClick={() => {
                    
                  }}> Edit </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Alltransactions
