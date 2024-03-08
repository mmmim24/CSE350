const bcrypt = require("bcryptjs")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session');
const jwt = require('jsonwebtoken')
let store = {}
const StudentModel = require("./models/student")

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


app.post('/dashboard',(req,res)=>{
    if(store){
        res.json({
            valid:store.valid,
            name:store.name,
            user:store.email,
            role:store.role,
            id:store.id
        })
    }
    else 
        return res.json({
            valid:false
        });
})

app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    StudentModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(password===user.password){
                store.valid = true;
                store.email = user.email;
                store.role = user.role;
                store.id = user.id;
                store.name = user.name;
                // store.save();
                console.log("hoise")
                // console.log(store)
                return res.json(store);
            }
            else{
                console.log("vul password")
                res.json("The password is incorrect")
            }
        }
        else{
            console.log("user nai")
            res.json("email is not registered");
        }
    })
})

app.post('/logout',(req,res)=>{
    req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
        }
        else{
            store={};
            res.json('Logged out')
            console.log('logged out')
        }
    });
})

app.post('/register', (req,res)=>{
    const {role,id,name,email,password} = req.body;
    StudentModel.findOne({email:email})
    .then(user => {
        if(user) {
            console.log("duplicate");
            res.json("Email already exists");
        }
        else{
            const newStudent = new StudentModel({
                role,
                id,
                name,
                email,
                password
            })
            newStudent.save()
            .then(()=>{
                console.log("registered")
                res.json("Success")
            })
            .catch(err=>console.log(err))
        }
    })
})

app.listen(3333, ()=>{
    console.log("server is running...");
})