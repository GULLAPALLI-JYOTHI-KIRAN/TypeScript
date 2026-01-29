"use strict";
/* Generic in Ts */
/* Generic are type parameter as <T> */
/* It will automatically infered by TS based on argument you passed into function */
/* Generic---> They will be "blank",but will be filled later */
// simple generic
function NWish(n) {
    return n;
}
/* Here T will be generic beacause we assigned n type is T and function return T that means what ever you passed arugment in calling the function that will be assigned to T */
console.log(NWish(1));
console.log(NWish("102"));
console.log(NWish(undefined));
console.log(NWish([10, 30, 40]));
console.log(NWish({}));
function Nw(va) {
    return va[1];
}
console.log(Nw([20, 30, 50, 60]));
// without generic (x:unkown)=>unkown
// without generic (x:t)=>T assign exactly
function ObH(value) {
    return { value };
}
console.log(ObH({ id: 23, name: "Ben" }));
