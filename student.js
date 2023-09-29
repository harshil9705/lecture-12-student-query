const mongoose = require('mongoose')

let studentschema = new mongoose.Schema({
    name:String,
    gender:String,
    class:String,
    section:String,
    maths:Number,
    science:Number,
    english:Number
})

let student = mongoose.model('student marks',studentschema)

module.exports = {student}