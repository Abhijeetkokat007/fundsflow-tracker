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
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true

    },
    gender: {
        type: String,
        require: true

    }
},
    {
        timestamps: true,
    }
)

const SignUp = model('signup', signupschema)

export default SignUp