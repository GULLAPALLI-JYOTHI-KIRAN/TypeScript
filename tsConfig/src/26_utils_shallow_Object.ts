/* Utils Shallow with Objects in Ts */

// Partially->This top level properties is Optional

type Address1324={
    city:string,
    pincode:number,
}

type User1028={
    id:string,
    name:string,
    email?:string,
    address:Address1324
}

type USAdd123=Partial<User1028> //here we are making the top level type of User1028 properties and any methods are optional when creating  finally Object

const ys12:USAdd123={
    id:"12"
}


// Required-->Making all top level properities and methods are required even they are optional


type ReqUserAddress=Required<User1028>; // all properties and methods are required to create finally object


const reqUser:ReqUserAddress={id:"123",name:"Ben John",email:"ben@gmail.com,",address:{
    city:"USA",pincode:172
}}

// Readonly->Making all top level properities and methods are readonly they not modified after creating them


type ReadOnlyUser=Readonly<User1028> //ALl fields are readonly and mandatory

const readOnlyUser:ReadOnlyUser={id:"123",name:"Ben John",email:"ben@gmail.com,",address:{
    city:"USA",pincode:172
}}


// Pick-->used to pick specific property in object

type PickUser=Pick<User1028,"email"|"id"> //we specifying email or id will be avaiable while creating object

const pickUser:PickUser={
    id:"wew23",email:"Ben@gmail.com"
}

// oMit-->Used to omit specific property in object (remove)

type OmitUser=Omit<User1028,"email"|"address"|"id"> // Here we are completely removing those properties So when we create objects with this type we will not have these three properties.

const omitUser:OmitUser={
    name:"John"
}

// Record--> Used to set the finite  numbers keys with their values

type makeMe="Admin"|"user"

type RecordMe=Record<makeMe,User1028>// Here we are specifying keys and their values should be this type of User1028 type

const recordUser:RecordMe={"Admin":{id:"123",name:"Ben John",email:"ben@gmail.com,",address:{
    city:"USA",pincode:172
}},"user":{id:"123",name:"Ben John",email:"ben@gmail.com,",address:{
    city:"USA",pincode:172
}}}