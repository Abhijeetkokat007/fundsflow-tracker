import Express from "express";
import mongoose from "mongoose";
import dotenv  from 'dotenv';
dotenv.config();
import Transaction from "./models/Transaction.js";
import { postApiTransaction, getApiTransactions, getApiUserTransaction, deleteApiTransactionId, putApiTransactionById } from "./controllers/transaction.js";
import { getApiHelth } from "./controllers/helth.js";
// import SignUp from "./models/SignUp.js";
import { postApiSignUp } from "./controllers/signup.js";
import { postApiLogin } from "./controllers/login.js";
import path from "path";


const app = Express();
app.use(Express.json());
const __dirname = path.resolve();

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

app.post("/api/signup", postApiSignUp)

app.post("/api/login", postApiLogin)

app.get("/api/transaction/user/:id", getApiUserTransaction )

app.delete("/api/transactions/:id", deleteApiTransactionId);

if(process.env.NODE_ENV === "production"){
    app.use(Express.static(path.join(__dirname, '..', 'client', 'build'))); 
   
    app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
   }
   

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`server is runing ${PORT}`)
   connectDB()

})