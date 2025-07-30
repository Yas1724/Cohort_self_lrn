//input validation using ZOD

const express = require('express');
const zod = require('zod'); 
const app = express();


const schema = zod.array(zod.number()); //Array of number is my schema will be , this much is enough to describe the input of your structure of your input


app.use(express.json());

app.post('/',(req,res)=>{
    const kidneys = req.body.kidneys;
    //validating the schema structure of input 
    const response = schema.safeParse(kidneys); // this response gets return back to the end user 
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    } else{
    res.send({
        response
    })
  }   
});

app.listen(4000);