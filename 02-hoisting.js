//Var hoisting

//console.log(x); //x is not declared using any keyword like var, let, const
//var x=10

/* Internally the .js file is scanned completely and finds a var keyword with declaration using 'x'
 
var x -- moved to top after scanning
console.log(x); */



//let hoisting


console.log(Y); //y is not declared using any keyword like var, let, const
let Y

/* Internally the .js file is scanned completely and finds a let keyword with declaration using 'y'
it will point toward a Temporal dead zone=>

let y -- moved to top after scanning
console.log(y); */

//Const hoisting

//console.log(z)

/* Notes:
JavaScript Declarations are Hoisted
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

The let and const Keywords
Variables defined with let and const are hoisted to the top of the block, but not initialized.
Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
Using a let variable before it is declared will result in a ReferenceError.*/

