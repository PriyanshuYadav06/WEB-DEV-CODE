let arr=[1,2,3,4,5];
let x=[];
// for(let i=0;i<arr.length;i++){
//     x.push(arr[i]**2);
// }
// console.log(x)

// .map()
x=arr.map(function(value){
    return value**2;
});
console.log(x);
console.log(typeof x);
//.filter()
function iseven(a){
    return a%2===0;
}
let evenNum=arr.filter(iseven);
console.log(evenNum)
//.reduce
let sum=arr.reduce(function(acc,value){
    return acc+value;
});
console.log(sum);