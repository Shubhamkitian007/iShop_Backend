const express = require('express');
const mobileapi = require("./Documents/Mobile");
const ipadapi = require("./Documents/Ipad");
const laptopapi = require("./Documents/Laptop")
const accessoriesapi = require("./Documents/Accessories")
const macbookapi = require("./Documents/MakcBook")

const cors = require("cors");
const app = express();

app.use(cors());

app.use("/",mobileapi);
app.use("/",ipadapi);
app.use("/",laptopapi);
app.use("/",macbookapi);
app.use("/",accessoriesapi);

app.listen(process.env.PORT||4400, () =>{
    console.log("App is Running");
})