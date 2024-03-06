const mongoose =  require('mongoose')

const StudentSchema =  new mongoose.Schema({
    role: String,
    id: String,
    name: String,
    email: String,
    password: String,
})

const StudentModel = mongoose.model("Students",StudentSchema);
module.exports = StudentModel;