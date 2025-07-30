// creating an Http server
//using ExpressJs

/* const express = require('express');
const app = express();

function sum(n) {
    let ans = 0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}

app.get("/", function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your ans is " + ans);
})
 */






//creating an in memory hospital

//in memory ==> not using any databases , using variable as memory

/* CREATE 4 ROUTES I.e-(4 things hospital can do)
1. get -> user can check how many kidneys they have and their health
2. post -> user can add a new kidney
3. put -> user can replace a kidney
4. delete -> user can remove a kidney
*/


const express = require('express');
const app = express();
const users = [{name:'john',
    kidneys: [{
        healthy: false
    }]
}];

app.get('/',function(req,res){
    const johnKidney = users[0].kidneys;
    const numberOfKidneys = johnKidney.length;

    let numberOfHealthyKidneys = 0;
    for(let i = 0; i<johnKidney.length;i++){
        if(johnKidney[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.use(express.json()); //middleware
app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:'Done!'
    })
})

app.put('/',function(req,res){
    for (let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/',function(req,res){
if(isThereOneUnhealthyKidney){
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                health: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({'done'})
}else{
    res.status(411).json({
        msg:'No bad kidney!'
    });
}
})

function isThereOneUnhealthyKidney(){
    let atleastOneUnhealthy = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthy = true;
        }
    }
    return atleastOneUnhealthy;
}

app.listen(3000);