console.log("This is tutorial on Arrays N Arrays are mutable in nature;)");
let obj={
    name:"Priyanshu",
    age:21,
    city:"Tarakeswar",
    hobbies:["Cricket","Football","Reading"]
}
let arr=[1,2,null,"Priaynshu Yadav",true,obj];



// for of loop
for (let i of arr) {
    console.log(i);
  }
  

console.log(arr.length)
console.log(arr);
console.log(arr[5]);
arr.push(3);
arr.push(4);
console.log(arr);
console.log(arr.length)
arr.pop();
arr.pop();
console.log(arr);
console.log(arr.length)

// .shift() removes the first element from an array.
// .unshift() adds one or more elements to the beginning of an array.
arr.shift();
arr.shift();
console.log(arr);
console.log(arr.length)
arr.unshift(2);
arr.unshift(1);
console.log(arr);

// join
console.log(arr.join("+"));
// sorting works different here => use chatgpt to explore
let x=[10,9,8,7,6,5,4,3,2,1];
x.sort((a,b)=>b-a)
console.log(x);