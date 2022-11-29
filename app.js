console.log('working')

//1

const PI = 3.14

// PI = 42;

console.log(PI);

// Use const to make a variable that is not only not able to be redeclared, but also cannot be reassigend as in this case.

/*

Quiz

difference between var and let

variables assigned with var can be reassigned, redeclared, and are function scoped

also - variables assigned with var manipulate the window object by adding a key-value pair consisting of the variable name as the key and the variable content as the value

variables assigned with let can be reassigned but not not redeclared, are block scoped, and do not manipulate the window object in the way a var variable does

difference between var and const is that var is as described above, const is the same as let described above, except it cannot be reassigned

the only difference between variables assigned with let and const is that const varaibles cannot be reassigned - all other parameters are the same as let as described above

hoisting is when variables are initialized before the code is run - only var variables are hoisted and are initially set to undefined before code runs

*/

