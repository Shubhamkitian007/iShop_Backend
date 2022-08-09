const express = require('express');
const mobileapi = require("./Documents/Mobile");

const cors = require("cors");
const app = express();

app.use(cors());

app.use("/",mobileapi);

app.listen(process.env.PORT||4400, () =>{
    console.log("App is Running");
})