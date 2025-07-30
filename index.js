const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler",function(req,res){
    res.json({name:'aysh',age:19,city:'jharia '})
})

app.get('/', function(req, res){
  res.send('<b>Hello World!<b>');
  
})

app.post('/conversation',function(req,res){
    res.send('<b> Hi there,/n How can i help you<b>') 
})
app.listen(port)
