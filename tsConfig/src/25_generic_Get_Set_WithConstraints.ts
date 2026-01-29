/* Get and Set Value with Generic Constraints */


type Fsa={
    id:number,
    name:string,
    email?:string
}
//Get Value from Generic Constraints
function GetProps<T,K extends keyof T>(obj:T,k:K):T[K]{
    return obj[k]
}
/* This function return T of K that means what ever T is but K in T and K is any type of T*/

let getPro:Fsa={id:193,name:"John"};

console.log(GetProps(getPro,"name"));
console.log(GetProps(getPro,"id"));
console.log(GetProps(getPro,"email"));
/* K is string so function return string only. */

// Set Value from a Generic Constraint

function SetProps<T,K extends keyof T>(obj:T,key:K,value:T[K]):T{ 
    // here we set value type will be T of K that means what ever you pass into  T, and T must have K and T[k] of it's type 
    obj[key]=value
    return obj
}

console.log(SetProps(getPro,"name","Ben")); //Here we are changing the existing property value
