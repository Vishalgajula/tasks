document.querySelector('.string').value = "";
// string functions
const stringLength = () => {
  string = document.querySelector('.string').value;

  output = document.querySelector(".output");
  output.innerHTML = string.length;

}
const uppercase = () => {
  string = document.querySelector('.string').value;

  output = document.querySelector(".output");
  output.innerHTML = string.toUpperCase();
}
const lowercase = () => {
  string = document.querySelector('.string').value;

  output = document.querySelector(".output");
  output.innerHTML = string.toLowerCase();

}

const reverse = () => {
  string = document.querySelector('.string').value;

  output = document.querySelector(".output");
  output.innerHTML = string.split('').reverse().join('');

}

// operators

document.querySelector('.num1').value = ''
document.querySelector('.num2').value = ''

function sum() {
  let num1 = Number(document.querySelector('.num1').value); //input 1
  let num2 = Number(document.querySelector('.num2').value); // input 2
  result = num1 + num2; // adding two numbers
  document.querySelector('.result').innerHTML = result; //updating the html
}
function sub() {
  let num1 = Number(document.querySelector('.num1').value); //input 1
  let num2 = Number(document.querySelector('.num2').value); // input 2
  result = num1 - num2;
  document.querySelector('.result').innerHTML = result; //updating the html
}
function mul() {
  let num1 = Number(document.querySelector('.num1').value); //input 1
  let num2 = Number(document.querySelector('.num2').value); // input 2
  result = num1 * num2;
  document.querySelector('.result').innerHTML = result; //updating the html
}
function div() {
  let num1 = Number(document.querySelector('.num1').value); //input 1
  let num2 = Number(document.querySelector('.num2').value); // input 2
  result = num1 / num2;
  document.querySelector('.result').innerHTML = result; //updating the html
}
function mod() {
  let num1 = Number(document.querySelector('.num1').value); //input 1
  let num2 = Number(document.querySelector('.num2').value); // input 2
  result = num1 % num2;
  document.querySelector('.result').innerHTML = result; //updating the html
}