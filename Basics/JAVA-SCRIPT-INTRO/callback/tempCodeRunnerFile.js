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
