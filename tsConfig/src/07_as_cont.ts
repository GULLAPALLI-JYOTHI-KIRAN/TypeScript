/* Read only value with as const keywords */

let ROLE=["admin","user","operator"] as const // Whenever we just used as const keyword before any value it could read only cannot be changed  and you're using an array so that's whatever the values in the array will be constant

// derive union from arrray
type Role=(typeof ROLE)[number]

function isRole(r:Role){
    console.log(r);
    
}

console.log(isRole("admin")); // Passing the Arg  values to isRole function as a parameter will check the role type It should be admin or user or operator only Other than that it will raise an error so this is what constant

// console.log(isRole("assistant"));    //error hightlighting Argument of type '"assistant"' is not assignable to parameter of type '"admin" | "user" | "operator"'.ts(2345)

