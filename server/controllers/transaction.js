
import Transaction from "../models/Transaction";

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
}

export {postApiTransaction}