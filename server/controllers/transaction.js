import Transaction from "./../models/Transaction.js"

const postApiTransaction = async (req, res) => {
    const {amount, type, category, description } = req.body;

    const transaction = new Transaction({
        amount,
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

export {postApiTransaction, getApiTransactions}