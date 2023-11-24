import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
    
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
        enum: ['food', 'entertainment', 'rent', 'shoping', 'travel', 'education', 'other'],
        required : true,
    },
    type: {
        type : String,
        enum: ['credit', 'debit'],
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