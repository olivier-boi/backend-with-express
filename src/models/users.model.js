import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        password: String,
    },
    
    phone: {
        type: Number,
    },

}, {
    //creates createdAt and UpdateAt fields aoutomatically
    timestamps: true,
})

const usertable = mongoose.model("userstbl", userschema)
export default usertable