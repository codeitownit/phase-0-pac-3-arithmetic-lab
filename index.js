// //add function
// function add(){
//     return (1 + 80);
// }
// //subtract function
// function subtract(){
//     return (60 - 40);
// }
// //multiply()
// function multiply(){
//     return (2 * 3.4);
// }
// //divide()
// function divide(){
//     return (5.0 / 2.5);
// }
// //adds two numbers
// function add(a,b){
//     return (a+b);
// }
// //subtracts a from b
// function subtract(a,b){
//     return (a-b);
// }
// //multiplies a by b
// function multiply(a,b){
//     return (a*b);
// }
// //divides a by b
// function divide(a,b){
//     return (a/b);
// }
// //increments n
// function increment(n=5){
//     return(n+=1);
// }
// //decrements n
// function decrement(n=5){
//     return (n-=1);
// }
// function makeInt(){
//     return (parseInt("2"));
// }
// //returns NaN 
// function makeInt(){
//     return (parseInt("n", 10));
// }

function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }

 
let number = 5;

number = number + 3; 
number = number - 2; 

number = number * 10;

number = number / 5; 


number = 10;

function add5() {
  return (number += 5);
}

function divideBy3() {
    return (number /= 3);
}


console.log(divideBy3());
console.log(add5()); 

number = 10;

console.log(add5()); 
console.log(divideBy3()); 

function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
     return parseFloat(string);
  }
  