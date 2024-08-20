import mongoose from "mongoose";
const UserShema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    
    },
    token:{
        type:String,
        required:false
    },

})

const User =mongoose.model("user",UserShema);
export default User;