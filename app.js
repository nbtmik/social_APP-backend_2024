const express = require('express'); 
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config({path:"config/config.env"});

//Using Middlewares
app.use(express.json({limit:"50mb"})); // extend limit of 50mb item
app.use(express.urlencoded({limit:"50mb",extended:true})); // for can use body parser
app.use(cookieParser());
//app.use(cors({credentials: true,origin:`${process.env.FRONTEND_URL}`}));
app.use(cors({credentials: true,origin:`${process.env.FRONTEND_URL}`,methods:['GET','POST','PUT','DELETE']}));

//Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

//Using Routes
app.use("/api/v1",post);
app.use("/api/v1",user);


module.exports = app;
