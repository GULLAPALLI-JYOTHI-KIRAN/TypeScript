"use strict";
/* Function and Function Parameters annations in Ts */
/* We are using function we need something to return from the function then we need to specify the type what you want to return from the function This is a good practice */
function Wish(msg) {
    return `${msg}`;
}
console.log(Wish("GOOD MORNING EVERYONE."));
/* Here here we are specifying the return type it should be string and the parameter also should be string only */
let arer = [10, 20];
let doub = arer.map(n => n * 2); // Internally n:number when hover it. insted we can also specify it like below
//array.map((n:number)=>n*2);
//  let avsa=(a)=>a**2; // we are error hightlight message saying that Parameter 'a' implicitly has an 'any' type.ts(7006) due to we enable strict=true.we need to specify datatype annation like below
let avsa = (a) => a ** 2;
// Parameters to functions
function addMe(a, b) {
    return a + b;
}
console.log(addMe(10, 20));
function additionalPoints(p) {
    return p.credit + p.points;
}
console.log(additionalPoints({ credit: 100, points: 20 }));
