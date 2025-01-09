import mongoose from "mongoose";

const infoschema = mongoose.Schema({
    date: {
        type: Date,
        default:Date.now(),
    },
    title: {
        type: String,
    },
    description: {
        description: String,
    },
    
    author: {
        type:String,
    },
    comment: {
        type:String,
    },
})

const infotable = mongoose.model("infotbl", infoschema)
export default infotable