const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String
    },
    asignMentor: {
        type: String
    }
})
module.exports = mongoose.model("student", studentSchema)