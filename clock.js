/*
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
*/

/*
const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize",handleResize);
*/

/*
const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}

window.addEventListener("resize",handleResize);
*/

/*
const title = document.querySelector("#title");

function handleClick(event){
    title.style.color = "blue";
}

title.addEventListener("click",handleClick);
*/

/*
if(10===5){
    console.log("hi");
} else {
    console.log("ho");
}
*/
/*
if(20>5 && "nicolas" ==="nicolas"){
    console.log("yes");
}else{
    console.log("no");
}
*/

//prompt("Ask something");

/*
const age = prompt("How old are you?");

if (age >= 18 && age<=21){
    console.log("you can drink but you should not");
}else if(age>21){
    console.log("go ahead");
}else{
    console.log("you cant")
}
*/

/*
//challenge day3
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h1");


const superEventHandler = {
    mouseenter: function (event) {
        title.innerHTML = "The mouse is here!";
        title.style.color = colors[0];
    },
    mouseleave: function(event){
        title.innerHTML = "The mouse is gone!";
        title.style.color = colors[1];
    },
    handleResize: function(event){
        title.innerHTML = "You just resized!"
        title.style.color = colors[2];
    },
    rightClick: function(event){
        title.innerHTML = "That was a right click!"
        title.style.color = colors[3];
    }
  };

title.addEventListener("mouseenter",superEventHandler.mouseenter);
title.addEventListener("mouseleave",superEventHandler.mouseleave);
window.addEventListener("resize",superEventHandler.handleResize);
window.addEventListener("contextmenu",superEventHandler.rightClick);
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}
init();

*/

/*
function handleOffline(){
    console.log("now is offline");
}

function handleOnline(){
    console.log("now is online");
}

navigator.addEventListener("offline", handleOffline);
navigator.addEventListener("online", handleOnline);
*/

/*
//javascript에서 css가 하는 style을 처리하는 것이 아니라 로직을 처리하도록
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
*/

/*
//javascript에서 css가 하는 style을 처리하는 것이 아니라 로직을 처리하도록
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}
init();
*/

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` :seconds
    }`;
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();