const express = require('express')
const { db } = require('./db')
const { student } = require('./student')
const app = express()
app.use(express.json())

app.get('/count1',async(req,res)=>{
    const data = await student.find({gender:"Female"});
    res.send(data)
})

app.get('/count2',async(req,res)=>{
    const data = await student.find({gender:"Male",maths:{$lt : 85},science:{$lt : 85},english:{$lt : 85}})
    res.send(data)
})

app.get('/count3',async(req,res)=>{
    const data = await student.find({maths:{$gt : 50,$lt : 75},english:{ $gt : 50 ,$lt : 75}})
    res.send(data)
})

app.get('/count4',async(req,res)=>{
    const data = await student.find({class:{$gte:"I",$lte:"V"},maths:{$gt : 50},english:{ $gt : 50},science : {$gt : 50}})
    res.send(data)
})

app.get('/count5',async(req,res)=>{
    const data = await student.find({gender:"Female",class:"X",section:"A",maths:{$lt : 25},science :{$lt : 25},english:{$lt : 25}})
    res.send(data)
})

app.get('/count6',async(req,res)=>{
    const data = await student.find({class:"V"}).sort({maths : -1}).limit(3)
    res.send(data)
})

app.get('/count7',async(req,res)=>{
    const data = await student.find({class:"I"}).sort({maths : 1}).limit(5)
    res.send(data)
})

app.get('/count8',async(req,res)=>{
    const data = await student.find({section:"A",maths :{$lt : 50},science : {$lt : 50}, english : {$lt : 50}})
    res.send(data)
})

app.get('/count9',async(req,res)=>{
    const data = await student.find({section:"C",maths :{$lt : 75},science : {$lt : 75}, english : {$lt : 75}})
    res.send(data)
})

app.get('/count10',async(req,res)=>{
    const data = await student.find().sort({maths : 1}).limit(10).skip(20)
    res.send(data)
})

app.get('/count11',async(req,res)=>{
    const data = await student.find().skip(80).sort({science : -1})
    res.send(data)
})

app.get('/count12',async(req,res)=>{
    const data = await student.find({gender : "Female"}).sort({science : 1 , maths: 1}).limit(5).skip(15)
    res.send(data)
})

app.get('/count13',async(req,res)=>{
    const data = await student.find({gender : "Female"}).sort({science : -1, maths: -1, english : -1}).limit(15).skip(30)
    res.send(data)
})

app.listen(2200,()=>{
    console.log('2200');
    db()
})