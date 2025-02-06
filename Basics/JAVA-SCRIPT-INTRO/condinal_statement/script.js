let age=100;
if(age>=18){
    console.log("you are a adult:)");
}else if(age>10 && age<=18){
    console.log("you are a teenager");
}else{
    console.log("you are a kid");
}
//** Exponentiation (5 ** 2 → 25)
let x=10;
console.log(x**2);
// == Loose equality (checks value, ignores type: 5 == '5' → true)

// === Strict equality (checks value and type: 5 === '5' → false)

// != Loose inequality (5 != '5' → false)

// !== Strict inequality (5 !== '5' → true)

let a=5;
let b="5";
console.log(a!==b);

//ternary operator
let c=(a>=5)?true:false;
console.log(c);