import Express from "express";
import mongoose from "mongoose";
import dotenv  from 'dotenv';
dotenv.config();
import Transaction from "./models/Transaction.js";
import {postApiTransaction} from './controllers/transaction.js'

const app = Express();
app.use(Express.json());

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)

        if (connection) {
            console.log('MongoDB connected')
        }
    } catch (e) {
        console.log(e.message)
        console.log('MongoDB not connected')
    }
}

app.post("/api/transaction", async (req, res) => {
    const {amount, type, category, description } = req.body;

    const transaction = new Transaction({
        amount,
        type,
        category,
        description
    })

    try {
        const savedata = await transaction.save();
        res.json({
            success: true,
            data: savedata,
            message: "Trasaction saved"
        })
    } catch (e) {
       return res.json({
            success: false,
            message: e.message
        })
    }
} )

app.get("/api/transactions", async (req, res) => {
    const alltransaction = await Transaction.find();
   return res.json({
        success: true,
        data: alltransaction,
        message: "successfull all transation fatched "
    })
})

app.get("/api/health", async(res , req)=>{
    res.json({
        status : ok
    })
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`server is runing ${PORT}`)
    connectDB();

})