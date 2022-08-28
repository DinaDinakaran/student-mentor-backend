const express = require("express")
const connect = require("./connection/Connection")
const Router = require("./Routers/Routers")
const app =express()
var cors = require('cors')
require("dotenv").config()

//midleware
app.use(express.json())
app.use("/api",Router)
app.use(cors())

//DB connection
connect();



const port = process.env.PORT || 8080 



//connection 
app.listen(port,()=>{
    console.log(`connection run on port ${port}`)
})