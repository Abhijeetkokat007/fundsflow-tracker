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

  const deleteApiTransactionId = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Transaction.deleteOne({ _id: id });
      res.status(200).json({
        success: true,
        message: "Transaction deleted successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

  const putApiTransactionId = async (req, res) => {
    const { id } = req.params;
    const { amount, transactionType, category, description } = req.body;
    await Transaction.updateOne(
      { _id: id },
      {
        $set: {
          amount,
          transactionType,
          category,
          description,
        },
      }
    );
    try {
      const updateTransaction = await Transaction.findOne({ _id: id });
      return res.status(200).json({
        success: true,
        data: updateTransaction,
        message: "Transaction updated successfully",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

export {postApiTransaction, getApiTransactions , getApiUserTransaction, deleteApiTransactionId, putApiTransactionId}