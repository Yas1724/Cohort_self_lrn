//middlewares

const express = require('express');
const app = express();

app.get('/health-checkup',(req,res)=>{
    const {username,password} = req.header;
    const kidneyId = req.query.kidneyId;

    if(!(username==='yash'&&password==='yas123')){
        res.status(403).json({msg:"authentication issue"});
        return;
    }
    if(!(kidneyId===1&&kidneyId===2)){
        res.status(411).json({mag:"wrong input"});
        return;
    }
    res.json({msg:"kidneys are fine"})
})

app.listen(3000);