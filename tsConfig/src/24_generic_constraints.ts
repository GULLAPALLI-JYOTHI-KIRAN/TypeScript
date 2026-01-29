/* Generic Constricts in Ts

As Generic can be any kind you passed in a function and return same type you pass from function.

If you remember from an earlier example, you may sometimes want to write a generic function that works on a set of types where you have some knowledge about what capabilities that set of types will have

*/
/* Our requirement is have length property then

In our loggingIdentity example, we wanted to be able to access the .length property of arg, but the compiler could not prove that every type had a .length property, so it warns us that we can’t make this assumption.*/

function loggingIdentity<T>(arg:T):T{
//    console.log(arg.length);
//  Error Hightlight  Property 'length' does not exist on type 'Type'.

   return arg
}

/* Instead of working with any and all types, we’d like to constrain this function to work with any and all types that also  have the .length property. As long as the type has this member, we’ll allow it, but it’s required to have at least this member. To do so, we must list our requirement as a constraint on what Type can be. */

interface NS34{
    length:number
}

function Ns342<T extends NS34>(arg:T):T{
    console.log(arg.length);
    
    return arg
}
console.log(Ns342("Hello"));
console.log(Ns342([10,"ga"]));
console.log(Ns342({length:203,name:"name234"}));
// console.log(Ns342(20)); //Here we get error because number type doesn't have length property
//We are constraint type of generic to all type but must have to particular constraint.


// Using Type Parameters in Generic Constraints

/* You can declare a type parameter that is constrained by another type parameter. For example, here we’d like to get a property from an object given its name. We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, so we’ll place a constraint between the two types: */

type Use12={id:number,name:string,age?:number}
type Use121={id:number,name:string,}

function User1211<T,key extends keyof T>(obj:T,key:key){
    return obj[key];
}

const USE12:Use12={id:12,name:"name1",age:23}
const USE121:Use121={id:12,name:"name1"}

console.log(User1211(USE12,"id"));
// console.log(User1211(USE121,"age")); //we getting error highlight because we specified the T type and also key must be in T .
console.log(User1211(USE121,"name"));

