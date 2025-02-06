// document.querySelector(".container").innerHTML
// document.querySelectorAll(".box")[2].innerHTML
// document.querySelector(".container").innerText
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName
// // document.querySelector(".box").innerHTML="Priyanshu Yadav";
// document.querySelector(".box").hasAttribute("style");
// document.querySelectorAll(".box")[0].getAttribute("style");
// document.querySelectorAll(".box")[0].setAttribute("style","display:inline");
// document.querySelector(".box").removeAttribute("style");
// // document.designMode="on";
let div=document.createElement("div");
div.innerHTML="<h1>Hi</h1><p>How are you?</p>";
div.setAttribute("class","newbox");
// document.querySelector(".container").append(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").replaceWith(div);
let cont=document.querySelector(".container");
// cont.insertAdjacentHTML("afterbegin","HI IM PRIYANSHU YADAV");
// cont.insertAdjacentHTML("afterend","HI IM PRIYANSHU YADAV");
// cont.insertAdjacentHTML("beforebegin","HI IM PRIYANSHU YADAV");
// cont.insertAdjacentHTML("beforeend","HI IM PRIYANSHU YADAV");


// let x=document.getElementById("redbox");
// x.remove();


// document.querySelector(".container").className;
// document.querySelector(".container").classList;
// document.querySelector(".container").classList.remove("harry");
// document.querySelector(".container").classList.add("harry");

// document.querySelector(".container").classList.toggle("tello");

function randomNumber(){
    let val1=Math.floor(0+Math.random()*255);
    let val2=Math.floor(0+Math.random()*255);
    let val3=Math.floor(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
let x=document.querySelectorAll(".box");
for(let i=0;i<x.length;i++){
    x[i].style.backgroundColor=randomNumber();
}