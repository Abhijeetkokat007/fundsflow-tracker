import { Schema, model } from "mongoose";

const signupschema = new Schema({
    name: {
        type: String,
        default: 'user'
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    mobile: {
        type: String,
        require: true,
        unique: true,
    },
    // address: {
    //     type: String,
        
    // },
    password: {
        type: String,
        require: true

    },
    gender: {
        type: String,
        enum:['Male', 'Female'],
        require: true

    }
},
    {
        timestamps: true,
    }
)

const SignUp = model('SignUp', signupschema)

export default SignUp