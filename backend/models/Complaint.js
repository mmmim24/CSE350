const mongoose =  require('mongoose')

const complaint =  new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    ID:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ["In Progress", "Processing", "Resolved"],
        default: "In Progress",
        required:true
    },
    fullName :String,
    contact:String,
    known:String,
    info:String,
    incident:String
})

module.exports = mongoose.model("complaints",complaint);
