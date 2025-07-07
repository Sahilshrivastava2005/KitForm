const express= require('express');
require("dotenv").config();
const bcrypt=require('bcrypt');
const app=express();
const jwt=require('jsonwebtoken')
const connectToDb=require("./config/mongoose-connection");
const cookieParser = require('cookie-parser');
const authRoutes=require("./routes/authRoutes");
const aiAskRoutes=require("./routes/aiAskRoutes");
const passport = require('passport');
const expressSession=require('express-session');
const { runGemini } = require('./config/gemini');
connectToDb();
require("./config/passport")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(expressSession({
    secret:process.env.EXPRESS_SECRET,

    resave:false,
    saveUninitialized:false
}));


app.use(passport.initialize())
app.use(passport.session())
app.use("/api/ai",aiAskRoutes)
app.use("/api/auth",authRoutes);
app.listen(3000);