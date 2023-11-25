// console.log(Math.random()*10);
// setInterval(function(){
//     console.log(Math.round(Math.random()*16));
// },1000)

const rc = function () {
    const hex = "0123456789ABCDEF";
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c = c + hex[Math.round(Math.random() * 16)];
    }
    return c;
};
let bgTiming;
const startChangingColors=function(){
    if(!bgTiming){
  bgTiming=setInterval(bgcolor,500);}

  function bgcolor(){
    document.body.style.backgroundColor=rc();
 }
};
document.querySelector("#start").addEventListener("click", startChangingColors)

const stopChangingColors=function(){
    clearInterval(bgTiming)
    bgTiming=null;
}
document.querySelector("#stop").addEventListener("click", stopChangingColors)