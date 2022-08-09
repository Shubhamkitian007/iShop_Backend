const express = require('express');
const mobileapi = require("./Documents/Mobile");
const ipadapi = require("./Documents/Ipad");

const cors = require("cors");
const app = express();

app.use(cors());

app.use("/",mobileapi);
app.use("/",ipadapi);

app.listen(process.env.PORT||4400, () =>{
    console.log("App is Running");
})