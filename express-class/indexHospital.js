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
var users = [{name:'john',
    kidneys: [{
        healthy: false
    }]
}];

app.get('/',function(req,res){
    const johnKidney = user[0].kidneys;
    console.log(johnKidney);
})

app.listen(3001);