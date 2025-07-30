//input validation using zod

/* Suppose the end user has to give the email and  password 
    email : valid email check
    password : must be atleast 8 letters 
*/

const zod = require('zod');

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email:'Yas@gmail.com',
    password:'yas12341'
})