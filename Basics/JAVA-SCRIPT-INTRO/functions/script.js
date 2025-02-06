function greet(a){
    console.log(`Hello,${a}`);
}
greet("Priyanshu Yadav");
function  sum(a=5,b=5){
    return a+b;
}
console.log(sum(2,2));

// 1:Function Expression (Anonymous Function)
// A function stored in a variable.
let greetings= function(a=null,b=null){
    console.log(`Hello! ${a} ${b}`);
}
greetings("priyanshu","Yadav");
// 2: Arrow Function (ES6)
// A shorter way to write functions.
 const square=(a)=>{
    return a*a;
};
console.log(square(10));
