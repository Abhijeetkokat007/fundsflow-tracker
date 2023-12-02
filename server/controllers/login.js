import SignUp from "./../models/SignUp.js";


const postApiLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "invalid email and password"
        })
    }

    const user = await SignUp.findOne({
        email: email,
        password: password
    })
    if (user) {
        res.json({
            success: true,
            data: user,
            message: "login succesfull"
        })
    }
    else {
        res.json({
            success: false,

            message: "invalid data"
        })
    }
}

export  {postApiLogin} ;