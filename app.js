const path=require("path")
const express=require('express')
// const b=require("body-parser")
const app=express()
var EJS  = require('ejs');
// const fileUpload = require('express-fileupload');
app.set("view engine",'ejs')
app.set('views', 'templates')
// app.use(b.urlencoded({ extended: false }))
// app.use(b.json())
// app.use(fileUpload());
app.use(express.static(__dirname + '/public'))
const r=express.Router()

app.get("/factor",(req,res,next)=>{
    res.render('views/factoreFaces/1')
})


app.listen(3001)