//Input validation -> //global catch

const express = require('express');
const app = express();
app.use(express.json());

app.post('/',(req,res)=>{
    //kidneys = [1,2];
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('you have ' + kidneyLength + ' kidneys ');
});

//global catch
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry, something is up with server"
    })
})

app.listen(200);
