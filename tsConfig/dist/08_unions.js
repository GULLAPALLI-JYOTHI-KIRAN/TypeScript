"use strict";
/* Uions in TS

Unions means can be that or this */
// for example
let test = 20; // Here we're describing the type either string or number so we can store either string or number When we declared the variable we assigned 20 but after we just changed to sting type this is union
test = "fails";
// uions with functions
function OutPut(a) {
    /* Here this function parameter can be a number or a sting if you try to think it will be a string type and accessing the sting properties and methods you will get an error */
    // console.log(a.toUpperCase());  // This is the ER because until user pass the data by calling this function we don't know which type value a is show do it like with some conditions
    if (typeof (a) == "string") {
        console.log(a.toUpperCase());
    }
    else {
        // Not a string this block
        console.log(a.toFixed(2));
    }
}
OutPut(20);
OutPut("hello");
function GetObjectbasedOnValue(obj) {
    if (obj.role == "Admin") {
        console.log(obj.role, "Admin role");
    }
    else {
        console.log(obj.role, "User as customer");
    }
}
function GetObjectbasedOnOperator(obj) {
    if ("permission" in obj) {
        console.log(obj.role, "Admin role");
    }
    else {
        console.log(obj.role, "User as customer");
    }
}
// Array Of Union
let s = ["10", 20, "car", 2038]; // We can store either sting or a number in an array.
// Union of Array
let av = [10, 2, 20]; //["2",30,4]// Here we are either string [] type or number[] type values only we are able to store the values not both nor neither
// Here we are storing the sting type that's why we are getting highlight error.
