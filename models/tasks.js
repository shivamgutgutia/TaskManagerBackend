const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a valid name"],
        trim:true,
        maxLength:[15,"Length cannot be greater than 15"]
    },
    completed:{
        type:Boolean,
        default:false
    }

})

module.exports = mongoose.model("Task",taskSchema)