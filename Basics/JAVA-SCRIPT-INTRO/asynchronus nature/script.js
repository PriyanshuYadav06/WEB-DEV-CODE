console.log("Hello");
console.log("Priyansshu ;)");


setInterval(() => {
    console.log("I am inside the setInterval function!");
},2000);
setInterval(() => {
    console.log("I am inside the setInterval function 2!");
},2000);
console.log("Yadav");




let callback=(arg) => {
  console.log(arg);
}

const loadscript=(src,callback) => {
   let sc=document.createElement('script');
   sc.src=src;
   sc.onload=callback("Harry");
   document.head.append(sc);
  
}
loadscript("https://unpkg.com/react@18/umd/react.production.min.js",callback);
