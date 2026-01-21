// Working with Object types


type User={
    id:string; // this property must be complusory when created an object and type of that property must be string only.
    name:string; // this property must be complusory when created an object and type of that property must be string only.
    email?:string; // This property must not be a compulsory but when creating an object if we present that property name it must be in sting type only
    readonly createDate: Date; // This is compulsory when creating an object and the date is its type and we're making read only That means we cannot updated the value after creation of object
}

let user1={
    id:"12edf",
    name:"Emma",
    email:"emma@gmail.com",
}// This is a simple Javascript object automatically Typescript inference based on the property values

// Now try to use that type

let user2:User={
    id:"wr345",
    name:"Granee",
    createDate:new Date()
}// As you can see here did not mentioned email property in user type object because it's optional be defined in the type panda E not mentioned any other ID or name created date properties you'll get error highlight like Property 'id' is missing in type '{ name: string; createDate: Date; }' but required in type 'User'.ts(2741)



let user3:User={
    id:"wr345",
    email:"granee@gmail.com",
    name:"Granee",
    createDate:new Date()
}// Here we use that optional email property here it should be only sting type only if it is present;

// This is all due we are enabled "exactOptionalPropertyTypes": true, in tsconfig.ts file


type User1={
    email:string | undefined // This is not an optional It should be type of either sting or undefined
}

let user4:User1={email:undefined};




// Other types
type Count={[k:string]:number} // Here we are defining the object with Key and value separate types key will be string and value will be number

let count:Count={whatever:12}

type Count1=Record<"likes"|"comments"|"dislike",number> // Here we're defining the object properties all together with one type using the record

let c1:Count1={
    likes:12,
    comments:10,
    dislike:0,
}

