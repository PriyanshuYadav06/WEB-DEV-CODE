console.log("i am a tutorial on loops:)");
// 1:For loop
for(let i=0;i<=10;i++){
    console.log(i);
}
// 2:while loop
let j=0;
while(j<=10){
    if(j==5) break;
    console.log(j);
    j++;
}
// 3:do while loop
let k=0;
do{
    if(k==0){
        k++;
        continue;
    }
    console.log(k);
    k++;
}while(k<=10);
//  4. for...in Loop
// Loops over object properties.
let person ={
    name:"Priyanshu Yadav",
    age:22,
    gender:"Male",
    College:"HIT"
}
for(let key in person){
    console.log(key+":"+person[key]);
}
console.log(person.name);

// 5. for...of Loop
// Loops over iterable objects like arrays, strings, Maps, Sets.
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
