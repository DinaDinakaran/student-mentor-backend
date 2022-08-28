const mongoose = require("mongoose")

const mentorSchema = new mongoose.Schema({
    mentorName:String,
    asignstudent:[],
})
module.exports = mongoose.model("mentor",mentorSchema)