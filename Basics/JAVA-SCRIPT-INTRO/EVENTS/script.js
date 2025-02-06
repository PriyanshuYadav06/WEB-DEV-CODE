console.log("Hello;)")
let button=document.getElementById("btn");
button.addEventListener("dblclick",()=>{
//    document.querySelector(".btn").style.color="green";
        button.style.color = "red";
        alert("Yes IM clicked!!");
       let x= document.querySelector(".box");
       x.innerHTML="hello";
});

document.addEventListener("keydown",(e)=>{
        console.log(e);
})