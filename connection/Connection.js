const mongoose = require("mongoose")


 const connect = ()=>{
    mongoose.connect(`${process.env.URL}`,{},(err)=>{
       if(err){
        console.log(err)
       }
       console.log("Db is connected")
    })
 }
  module.exports= connect;