let btn =document.querySelector("#btn1");

btn.onclick =()=>{
console.log("button is clicked");
let a = 25;
a++;
console.log(a);
}
let Div = document.querySelector("#Div");

// Div.onmouseover =()=>{
//     console.log("Your are inside the second Div");
// }
let btn02 = document.querySelector(".btn02");

btn02.onclick =()=>{
    console.log("button is clicked");
}
// let Div = document.querySelector("#Div");

Div.onmouseover = () => {
    console.log("Your are inside the second Div");
};