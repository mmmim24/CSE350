const bcrypt = require("bcryptjs")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const session = require('express-session');
const jwt = require('jsonwebtoken')
const StudentModel = require("./models/student")

const app = express()
app.use(express.json())
app.use(cors())
app.use(session({
    secret : 'qwerty',
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure: false,
        maxAge: 3000*24*60*60
    }
}))
//database connection
mongoose.connect("mongodb://127.0.0.1:27017/shpc")
//database connection
app.post('/',(req,res)=>{
    // console.log(req.session);
    if(req.session.email){
        return res.json({
            valid:true,
            user:req.session.email,
            role:req.session.role,
            id:req.session.id
        })
    }
    else return res.json({valid:false});
})
app.post('/login', (req,res)=>{
    const {email,password} = req.body;
    StudentModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(password===user.password){
                req.session.email = user.email;
                req.session.role = user.role;
                req.session.id = user.id;
                req.session.name = user.name;
                req.session.save();
                console.log("hoise")
                return res.json("Success")
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
        res.redirect('/login');
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