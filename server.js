const express=require('express');

const path=require('path');

const app = express();

const port= 9876;
const students=require('./students');

app.listen(port,(err)=>
err?console.log(err):console.log(`the app is lestening to ${port}`));

app.get('/',(req,res)=>{
    res.send("this is home page")
})

app.get('/about',(req,res)=>{
    res.send("<h1>this is home page")
})



app.get('/index',(req,res)=>{
    res.sendfile('./index.html')
})

app.get('*',(req,res)=>{
    res.send("404 fakhri error")
    console.log(req.method)
})

app.post('/students',(req,res)=>{
    res.json(students)
})
