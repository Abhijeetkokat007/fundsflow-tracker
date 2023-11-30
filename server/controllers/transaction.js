import Transaction from "./../models/Transaction.js"

const postApiTransaction = async (req, res) => {
    const {amount, user,  type, category, description } = req.body;

    const transaction = new Transaction({
        amount,
        user,
        type,
        category,
        description
    })

    try {
        const savedata = await transaction.save();
        res.status(201).json({
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
}

const getApiTransactions = async (req, res) => {
    const alltransaction = await Transaction.find();
   return res.status(200).json({
        success: true,
        data: alltransaction,
        message: "successfull all transation fatched "
    })
}

const getApiUserTransaction = async (req, res) => {
    const { id} = req.params;
   try{
    const order1 = await Transaction.find({user:{ _id: id }}).populate("user")
  
    res.json({
      success:true,
      data:order1,
      message: "user Transaction fatch  successfully"
    });
   }
   catch(e){
    res.json({
        success:false,
        message: e.message
      });
   }
  }

export {postApiTransaction, getApiTransactions , getApiUserTransaction}