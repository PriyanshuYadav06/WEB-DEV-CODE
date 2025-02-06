/* 
Callback Function in JavaScript
A callback function is a function passed as an argument to another function and executed later,
typically after an asynchronous operation completes.
*/


// function calculate(a,b,operation){
//     return operation(a,b);
// }

// function operation(num1,num2){
//     return num1 + num2;
// }
// let addition=calculate(3,4,operation);
// console.log(addition);
// const sub=(x,y)=>{
//     return x-y;
// }
// let subtraction=calculate(8,4,sub);
// console.log(subtraction);
// const mul=(x,y)=>{
//     return x*y;
// }
// let ans=calculate(4,4,mul);
// console.log(ans);

// example 2
//callback hell
function getcheese(callback){
    setTimeout(() => {
        let cheese="🧀";
        console.log("here is a chesse:",cheese);
        callback(cheese);
    }, 2000);
}
function makedough(cheese,callback){
    setTimeout(() => {
        let dough=cheese+"🍩";
        console.log("here is a dough:",dough);
        callback(dough);
    },2000);
}
function bakepizza(dough,callback){
    setTimeout(() => {
        let pizza=dough+"🍕";
        console.log("here is a pizza:",pizza);
        callback(pizza);
    },2000);
}
//callback-hell
getcheese((cheese)=>{
    makedough(cheese,(dough)=>{
        bakepizza(dough,(pizza)=>{
            console.log("pizza is ready");
        })
    })
})











getcheese((cheese)=>{
    console.log("got the cheese");
    
    makedough(cheese,(dough)=>{
        console.log("got the dough");
  
      bakepizza(dough,(pizza)=>{
        console.log("pizza is ready",pizza);
      })
        
    })
})

// pizza->dough->chesse 
