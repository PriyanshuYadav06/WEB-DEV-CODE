let boxes=document.body.getElementsByClassName("box");
boxes[2].style.backgroundColor="green";
document.getElementById("redbox");
document.getElementById("redbox").style.backgroundColor="red";
document.querySelector(".box").style.backgroundColor="blue";
console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").style.backgroundColor="blue"; (nahi ho payega qki ye nodelist return karta hain for loop laga kar set karna hoga )

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="blue";
})
for(let i=0;i<document.querySelectorAll(".box").length;i++){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelectorAll(".box")[i].style.backgroundColor=randomColor;
}
console.log(document.getElementsByTagName("div"));