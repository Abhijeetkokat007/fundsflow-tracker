import Express from "express";
import mongoose from "mongoose";
import dotenv  from 'dotenv';
dotenv.config();
import Transaction from "./models/Transaction.js";
import { postApiTransaction, getApiTransactions } from "./controllers/transaction.js";
import { getApiHelth } from "./controllers/helth.js";
import SignUp from "./models/SignUp.js";

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

 app.post("/api/transaction",  postApiTransaction )

app.get("/api/transactions", getApiTransactions)

app.get("/api/health", getApiHelth );

app.post("/api/signup", async (req, res) => {

    const{name, email, mobile, address, gender, password} = req.body

    const signup = new SignUp ({
        name,
        email,
        mobile,
        address,
        gender, 
        password
    })

   try{
    const saveData = await signup.save();

    res.status(201).json({
        success: true,
        data: saveData,
        message: "user created successfull"
    })
   }
   catch{
    return res.json({
        success: false,
        message: e.message
    })
   }
})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

    console.log(`server is runing ${PORT}`)
    connectDB();

})