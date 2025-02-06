// alert("hello");
console.log("Code is runnign....");
console.log("code is also running.....")
console.log("code is looking like a wow.....");
// var a=prompt("enter a number:");
// data types:var(globaly scoped),let(local scoped),const;




//Primitive Types: string, number, boolean, null, undefined, symbol, bigint.
let age = 22; // Integer
let pi = 3.14; // Floating-point number


//Boolean
let isStudent = true;
let hasJob = false;

//undefined
let x;
console.log(x); // undefined

// reprsent the intensional null value
let emptyValue = null;


//Used to create unique values.
let id = Symbol("uniqueID");

//BigInt (ES11)
//Used for very large numbers that cannot be represented by Number.
let bigNumber = 123456789012345678901234567890n;



let name = "Priyanshu"; //string      
console.log(name);
let greeting = `Hello, ${name}!`; // Template literal
let y=`this is line 1
this is line 2
this is line 3`; //multi lineing


//object

let priyanshu={
    age:22,
    name:"priyanshu",
    college:"HIT",
    Year:"3rd",
    sem:6,
    isStudent:true
}
console.log(priyanshu.isStudent);
console.log(priyanshu);
//Objects are stored by reference, meaning if you copy an object, both variables will point to the same data:
let obj2=priyanshu;
console.log(obj2);
priyanshu.name="Priyanshu Yadav";
console.log(obj2.name);