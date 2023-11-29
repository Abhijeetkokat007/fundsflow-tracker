import SignUp from "../models/SignUp.js";

const postApiSignUp = async (req, res) => {

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
}

export {postApiSignUp} ;