// https://www.javascripttutorial.net/javascript-bom/javascript-window/
/*
var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

const inner_width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log(
  window.innerWidth,
  document.documentElement.clientWidth,
  document.body.clientWidth
);
console.log("Pārlūka loga iekšējās daļas platums - " + inner_width);

const inner_height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
console.log(
  window.innerHeight,
  document.documentElement.clientHeight,
  document.body.clientHeight
);
console.log("Pārlūka loga iekšējās daļas augstums - " + inner_height);

const outer_width = window.outerWidth;
console.log("Pārlūka loga ārejās daļas platums - " + outer_width);

const outer_height = window.outerHeight;
console.log("Pārlūka loga ārējās daļas augstums - " + outer_height);
*/



//let url = 'http://127.0.0.1:5500/Nodarbiba-10_25-11-2024/';
//let jsWindow = window.open(url,'Class_10');
//window.focus();

/*
let jsWindow = window.open(
  //"https://rtu.lv",
  "http://127.0.0.1:5500/Nodarbiba-10_25-11-2024/index.html",
  //"RTU",
  "Nodarbiba10",
  "height=600,width=900"
);

//https://www.javascripttutorial.net/javascript-bom/

setTimeout(() => {
  jsWindow.resizeTo(800, 900);
}, 3000);

setTimeout(() => {
  jsWindow.moveBy(480, 250);
}, 4000);

setTimeout(() => {
  jsWindow.close();
}, 6000);
*/

/*
setTimeout(() => {
    alert('3 seconds has been passed!')
}, 1000);
*/

//alert("10 seconds has been passed!");

/*
let result = window.confirm("OK vai Cancel");
let message = result ? 'You clicked the OK button' :
    'You clicked the Cancel button';
alert(message);
*/
/*
let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);
*/

/*
var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 1000, 'setTimeout Demo!');
    console.log("New timeoutID - "+timeoutID);
}

function cancelAlert() {
    console.log("TimeoutID to be cleared - "+timeoutID);
    clearTimeout(timeoutID);
}
*/
var timeoutID;

// https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/
let intervalID;

document.getElementById("stop").disabled = true;

function start() {
  intervalID = setInterval(toggleColor, 1000);
  console.log("New intervalID - " + intervalID);
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
}

function stop() {
  clearInterval(intervalID);
  console.log("intervalID to be cleared - " + intervalID);
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
}

function toggleColor() {
  let e = document.getElementById("flashtext");
  e.style.color = e.style.color == "red" ? "blue" : "red";
}