import mongoose from "mongoose";

const postschema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    comment: {
        password: String,
    },
    
    author: {
       type:String,
    },

}, {
    //creates createdAt and UpdateAt fields aoutomatically
    timestamps: true,
})

const posttable = mongoose.model("poststbl", postschema)
export default posttable