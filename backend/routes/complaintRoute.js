const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const ComplaintModel = require('../models/Complaint');

router.post('/add',async (req,res)=>{
    const {fullName,contact,known,info,incident} = req.body;
    const complaint = new ComplaintModel({
        date:new Date(),
        ID : uuidv4(),
        status: "In Progress",
        fullName:fullName,
        contact:contact,
        known:known,
        info:info,
        incident:incident
    });
    // console.log(complaint)
    try{
        const savedComplaint = await complaint.save();
        res.json(savedComplaint);
    }
    catch(err){
        res.json({message:err});
    }
})

router.post('/view',async (req,res)=>{
    ComplaintModel.findOne({ID:req.body.ID})
    .then(complaint => {
        if(complaint) {
            console.log("exists")
            res.json(complaint)
        }
        else{
            console.log("no complaint")
            res.json("no record")
        }
    })
})

module.exports = router;
