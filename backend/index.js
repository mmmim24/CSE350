const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session');

const userRoute = require('./routes/userRoute');
const complaintRoute = require('./routes/complaintRoute');

const app = express()

app.use(express.json())

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(session({
    secret : 'qwerty',
    resave: true,
    saveUninitialized: false,
    cookie:{
        secure: false,
        maxAge: 3000*24*60*60
    }
}))

//database connection
mongoose.connect("mongodb://127.0.0.1:27017/shpc")

app.use('/user', userRoute);

app.use('/complaint', complaintRoute);

app.listen(3333, ()=>{
    console.log("server is running...");
})