//alert("JavaScript works!");

//SDI 1041
//Tereka Copeland
//Lab 5: Using Functions

//Variables
var a;
var b;
var operation;
var sum;
var result
var addNumber
var subtractNumber
var multiplyNumber
var divideNumber
parseInt(a);
parseInt(b);

a = prompt("Enter first number:");
operation = prompt("ADD, SUBTRACT, MULTIPLY, DIVIDE? (+ = add, - = subtract, / = divide, * = multiply)");
b = prompt("Enter second number:");
 
 
 // Adding
var addNumber = function(numOne, numTwo) {
   
   var result = numOne + numTwo;
     return result;
   
 };

 a = parseInt(a);
 b = parseInt(b);
 
 if(operation === "+") {
   
  sum = addNumber(a, b);
   console.log(a + " + " + b + " = " + sum);
   
 };
 
