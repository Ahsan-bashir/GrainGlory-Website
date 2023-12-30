require('dotenv').config()

const path = require('path')
const express = require('express')
const methodOverride=require('method-override')
const session=require('express-session')
const concurrently = require('concurrently');
// const connectDB=require('./src/server/config/db')

const app = express()
const port = process.env.PORT || 5000

// connect Database
// connectDB();

// //To pass data through forms
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride('_method'))

// Static Files
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'src')))
//  
app.set('public', path.join(__dirname, 'public'));
app.set('src', path.join(__dirname, 'src'));

// routes
app.use('/',require('./src/server/routes/routes'))


// Handle 404
app.get('*',(req,res)=>{
    res.status(404).send('404')
 })
 
 // PORT
 app.listen(port,()=>{
     console.log(`Server is running on port ${port}`)
 })

