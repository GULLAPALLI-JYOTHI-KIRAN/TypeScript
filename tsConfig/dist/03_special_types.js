/* Special Types in Ts */
// Problem
let str = "Emma Waston";
// something You wan to change  value to other type
str = undefined; // You're getting the error highlighting to str because we enable strict=true for now if strict=false then You will not see the error highlighting. Please enable strict=true everytime.
// If you're not sure about the data type it will change in future but the guees  then do like blow
// unions
let st = 20; // In this case we will not get any error if we assign string or undefined or the number
// For functions if it doesn't return nothing you can use below type as void
function log(msg) {
    console.log("Hello world");
}
// If you think the function doesn't return anything in the future at any point of time then use the type as never
function fail(msg) {
    throw new Error(msg);
}
// type any Never used any type so leave as it matches.
// for example
let res = 102;
// res.notThere.toFixed();// This works during compilation but not at the runtime
