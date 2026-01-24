"use strict";
/* Default parameters and Optional Parameters in TS  */
function OptionalParameters(name) {
    /* In this function we are not checking here whether if it is optional some conditions need to be satisfied without undefined */
    let wish = name?.toUpperCase();
    return `Hello ${wish}`;
}
console.log(OptionalParameters("john")); // We are calling optionalparameter function the passing some argument to the we are able to see the message in the console say Hello John it is in  captains.
console.log(OptionalParameters()); // As we this optionalparameter function as optional parameter so we are not passing the arugment here we will get Hello undefine msg in console.
/*
Hello JOHN
Hello undefined
 */
// Optional param more in function
function OPtionalMoreParameter(status, port, secure) {
    return `Connection :: status ${status} and secure ${secure}`;
}
// console.log(OPtionalMoreParameter(true,true));// Because should pass the arguments in the same order they are defined So if even it's an optional we should pass complete the another argument
console.log(OPtionalMoreParameter(true, 8080, true)); // this works 
function DefaultParameterValue(name = "Default") {
    return `Who am I ${name}`;
}
console.log(DefaultParameterValue()); //output will be who am I Default because We are not passing any argument default we are function  definition or declaration
console.log(DefaultParameterValue("Ram")); //Output will be who am I Ram Because we are modifying the default value in the parameter new value passing through the function.
