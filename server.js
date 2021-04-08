const { json } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose")
require('dotenv').config()
const userRoute=require('./Models/userRoute')


app.use(json())

mongoose.connect(`mongodb+srv://imen:imen@cluster0.inepy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
,{ useUnifiedTopology: true,useNewUrlParser: true } ,(err)=>{
    if(err)
        console.error(err)
    else
     console.log('Data Base is CONNECTED')
});

app.use('/',userRoute)



app.listen(4000, (err) => {
    if (err) console.error(err);
    else console.log("connected 👀 ...");
  });
