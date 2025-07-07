const userModel=require("../models/user-model");
const bcrypt=require('bcrypt');
const generateToken=require('../utils/generateToken');
module.exports.registerUser=async function(req,res){
    const {email,password}=req.body;
    try{
    let user=await userModel.findOne({email});
    if(user){
        return res.status(400).send("Your account already exist");
    }
    let salt= await bcrypt.genSalt();
    let hash=await bcrypt.hash(password,salt);
    user= await userModel.create({
        email,
        password:hash
    })
   let token= generateToken({email});
   res.cookie("token",token,{
    httpOnly:true,
    secure:true,
    maxAge:30*24*60*60*1000
   })
   res.status(201).send(user);
}catch(err){
    console.log(err);
}
};
module.exports.loginUser=async function(req,res){
    const {email,password}=req.body;
    try{
    let user=await userModel.findOne({email});
    if(!user){
        return res.status(500).send("user not exist");
    }
     let result= await bcrypt.compare(password,user.password);
     if(result){
         let token= generateToken({email});
   res.cookie("token",token,{
    httpOnly:true,
    secure:true,
    maxAge:30*24*60*60*1000
   })
   res.status(201).send("logged in succesfully");
}else{
    return res.status(500).send("user not exist");
}
}catch(err){
    res.status(500).send(err)
}
};
module.exports.logoutUser=function(req,res){
    res.cookie("token","",{
    httpOnly:true,
    secure:true,
   })
   res.status(201).send("logout succesfully");
};
module.exports.getUserProfile=function(req,res){
    res.send("User loggin")
};
module.exports.googleOauth=function(req,res){
    
}