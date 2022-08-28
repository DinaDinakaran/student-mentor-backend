const express = require("express")
const student = require("../Schema/studentSchema")
const mentor = require("../Schema/mentorSchema")
const Router = express.Router();


Router.post("/student",(req,res)=>{
 try{
    const studentsche = new student(req.body)
 studentsche.save((err,data)=>{
    if(err){
            res.status(404).send("this is some error")
            console.log(err)
    }
    res.status(201).send(data)
 })
 }catch(err){
    console.log(err)
 }
})
Router.post("/mentor",(req,res)=>{
   try {
      const mentorsch = new mentor(req.body)
      mentorsch.save((err,data)=>{
         if(err){
            console.log(err)
            res.status(404).send("some error is founded on internal serverside")
         }
         res.status(201).send(data)
      })
   } catch (error) {
      
   }

})

Router.put("/student/change",(req,res)=>{
    try {
      const payload =req.body
    student.findOneAndUpdate({ studentName : payload.studentName}, {$set: payload}, {new: true},(err,data)=>{
      if(err || !data){
         res.status(400).send("studentName is invaild plze check and retry")
      }
      return res.status(201).json(data);
    })
    } catch (error) {
      return res.status(400).json({
         err
      })
    }
})

Router.put("/mentor/change/:mentorName",(req,res)=>{
   try {
      var liststudent ;
      const payload = req.params.mentorName
      mentor.findOneAndUpdate({mentorName :payload},{$set: req.body}, {new: true},(err,data)=>{
         if(err || !data){
            res.status(400).send("mentorName  is invaild please check and retry")
            console.log(err)
         }
         student.find((err, data) => {
            if(err){
                res.status(403).send("An error occured while getting users.");
            }
            liststudent =data.filter((stu)=> stu.asignMentor===null)
            res.status(201).send(liststudent)
       })
     


   }) 
   }
   catch (error) {
      res.status(500).send(error)
   }})
   Router.get("/find/:mentorName",(req,res)=>{
      try{
         const payload= req.params.mentorName
         student.find({asignMentor: payload},(err,data)=>{
            if(err || !data){
               res.status(400).json({
                  err : "menterName is invalid "
               })
            }
            res.status(200).send(data)
         })
      }catch(error){
         res.status(500).send(error)
      }
   })





module.exports= Router;
