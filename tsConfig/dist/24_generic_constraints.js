"use strict";
/* Generic Constricts in Ts

As Generic can be any kind you passed in a function and return same type you pass from function.

If you remember from an earlier example, you may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have

*/
/* Our requirement is have length property then

In our loggingIdentity example, we wanted to be able to access the .length property of arg, but the compiler could not prove that every type had a .length property, so it warns us that we can’t make this assumption.*/
function loggingIdentity(arg) {
    //    console.log(arg.length);
    //  Error Hightlight  Property 'length' does not exist on type 'Type'.
    return arg;
}
function Ns342(arg) {
    console.log(arg.length);
    return arg;
}
console.log(Ns342("Hello"));
console.log(Ns342([10, "ga"]));
console.log(Ns342({ length: 203, name: "name234" }));
function User1211(obj, key) {
    return obj[key];
}
const USE12 = { id: 12, name: "name1", age: 23 };
const USE121 = { id: 12, name: "name1" };
console.log(User1211(USE12, "id"));
// console.log(User1211(USE121,"age")); //we getting error highlight because we specified the T type and also key must be in T .
console.log(User1211(USE121, "name"));
