

//Datatype:
/*Primitive and Non-Primitive

Primitive:
1. Numbers --> in other language (int,float,double)
2. BigInt --> if the number is above a certain limit it is taken as bignit datatype
3. Boolean--> True or False
4. String--> "", '', `` (backtick--In keyboard above tab button)
5. Undefined --> 
6. null --> Empty*/

//Numbers data type
var PhoneNumber  = 78788
console.log(PhoneNumber);
console.log(typeof PhoneNumber); //number the datatype is retrieved

var rateOfInterest = 7.5
console.log(rateOfInterest);
console.log(typeof rateOfInterest);

//typeof operator helps to retrieve the datatype of the value that is stored in a variable

/*var is the keyword to convey JS that ohone number is user defined variable used to store the value*/


/* BigInt data type
- (2^53 - 1) 
*/

var accountNumber = 7667676767676776767677676767767767676767676n
console.log(accountNumber);
console.log(typeof accountNumber);


//boolean data type

var accountNumberValid = true
console.log(accountNumberValid);
console.log(typeof accountNumberValid);

//String data type--> "",'',`` (back tick)

var accountName = "Santhoshkumar"
console.log(accountName);
console.log(typeof accountName);

var fatherName = 'Sujith'
console.log(fatherName);
console.log(typeof fatherName);

var motherName = `Anusya`
console.log(motherName);
console.log(typeof motherName);


//Underfined data type --> 

var xyz //declaration -> memory space created
//var xyz = 123 //assignment
//Together declaration and assignment together we call it initialization 
console.log(xyz);
console.log(typeof xyz);

//Null data type ->Memory space is created and we are explicitely conveying to JS that abc is empty

let abc= null  //here null means we are explicitely conveying to JS that abc is empty
console.log(abc);
console.log(typeof abc); //historical bug created during the development stage of JS

