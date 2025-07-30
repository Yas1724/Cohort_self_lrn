//map ,filter ,arrow function

/* const sum = (a,b,c)=>a+b+c;
console.log(sum(4,2,1)); */

/* Given an array , give me back a new array in which every value is multiplied by 2 */
/* arr = [1,2,3,4,5]
nwarr = [2,4,6,8,10] */
//one way:
//let arr = [1,2,3,4,5];
/* for(let i=0;i<arr.length;i++){
 arr[i]=arr[i]*2;
}
console.log(arr); */

//other way:
const arr = [1,2,3,4,5]
transform=(i)=>i*2;
console.log(arr.map(transform))


/* create a map function that takes 2 input -an array and a transformation callback/function and trasforms the array into new one*/


//filters: 
/* given an input array, return back all the even values from it  */

/* let arr = [1,2,3,4,5,6];
let nar = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
       // nar[i] = arr[i];
       //or
       nar.push(arr[i]);
    }
}
console.log(nar);  */

filterLogic=(n)=>{
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(arr.filter(filterLogic));
