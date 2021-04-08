const mongoose =require ('mongoose')
// const { Module } = require('node:module')
const UserShema=new mongoose.Schema({
    Name:string,
    login:String,
    password:String,
})
Module.exports=mongoose.model('user',UserShema)