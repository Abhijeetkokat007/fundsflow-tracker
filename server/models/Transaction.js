import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    
    user:{
        type : Schema.Types.ObjectId,
        ref : "SignUp",
        required : true
    },
    amount : {
        type :Number,
        required : true,
    },
    type : {
        type :String,
        required : true,
    },
    category : {
        type : String,
        enum: ['Food', 'Entertainment', 'Rent', 'Shoping', 'Travel', 'Education', 'Other'],
        required : true,
    },
    type: {
        type : String,
        enum: ['Credit', 'Debit'],
        require: true
    },
    description : {
       type :String, 
    },
    
},
{
    timestamps: true,
}

);

const Transaction = model('transaction', transactionSchema);


export default Transaction ;