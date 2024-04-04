const express = require('express');
const app=express()
const path=require('path')
const hbs=require('hbs')
// const port=prgress.env.PORT || 5000
const port =5000
const static_Path=path.join(__dirname,'../public')
const tempPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.set ('views',tempPath)
// app.use(express.static(static_Path))
app.get('/',(req,res)=>{   
    res.render('index') 
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('error',{
        errormsg:'Oops! Page is not found'
    }) 
})
app.listen(port,()=>{
    console.log('listening');
})