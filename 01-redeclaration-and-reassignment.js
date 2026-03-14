//Characteristics /Behaviour of var, let, const at the time of redeclaration


//var redeclaration
var a
var a
console.log(a); //undefined

//var reassignment

var x =100
x = 101
console.log(x); //101 is the final value

//let redeclaration is not allowed
let b
//let y not allowed
console.log(b); //undefined

//let reassignment is allowed

let y =100
y = 101
console.log(y); //101 is the final value


//const reassignment

const c =100
//c = 101
console.log(c); //101 is the final value

//const redeclaration
let z
//let y not allowed
console.log(z); //undefined

//const reassignment

const d =100
//d = 101
console.log(d); //101 is the final value

