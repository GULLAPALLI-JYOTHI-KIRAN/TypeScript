// Types By Inferenec in Ts(Ts knowns Js)
// Typescript is a statically typed language to make lowering the chance of bugs.

/* By default Ts implicitly inference types based on the value assigned to the variable. That means we no need to  explicitly specify the type Whether it is a number string or a anything when we directly assign the value to the variable . So we call it Typescript knowns Javascript language  vey well */


let num=10; // Here you can see we just assigned the value to the variable so the type is declared automatically by Typescript. When you hover the num variable we can see num:number


const FullName="John Deo"; //FullName:String

let score=[10,20,30,40]; //score:number[]

// What we're making is this Typescript We just want to type safety and lowering the chance of bugs


// Sometimes we need to explicitly specify the type This mostly seen in the functions like below
/* export function add(a,b){
    return a+b;
} */


    // This is expensively specifying the type A and B should be number type and function return  number as type only
    export default function add(a:number,b:number):number{
    return a+b;
}
// And while calling the function also we need to pass the exact types only otherwise we will get errors warmings
// console.log(add(10,"20"));


console.log(add(10,20));


// Sometimes we don't know the exact type may vary one or two so we can specify the type using operators also like below

let maybe : number | string;
maybe=Math.random()<0.5?"Test":10;
console.log(maybe);
