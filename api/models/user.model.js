import mongoose from "mongoose";

//create rules (called it schema)

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },

}, {timestamps:true}
);

//Now create Model

const User = mongoose.model('User',userSchema);

export default User;