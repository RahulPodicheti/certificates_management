const express = require('express');
const router = express.Router();
const User =require('./Users')
const bcrypt = require("bcryptjs")
router.post("/createuser",async(req,res)=>{

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
       await User.create({
            rollno:req.body.rollno,
            name:req.body.name,
            email:req.body.email,
            password:secPassword
        })
        res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})


router.post("/loginuser",async(req,res)=>{
    let email = req.body.email;
    try {
     let userData = await User.findOne({email});
     if(!userData){
        return res.status(400).json({erors:"credentials doesn't match"})
     }

     if(req.body.password !== userData.password){
        return res.status(400).json({erors:"credentials doesn't match"})
     }
     return res.status(200).json({success:true})

    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})


module.exports=router;