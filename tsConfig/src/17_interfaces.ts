/* InterFaces in TS */

// Interfaces nothing but giving the shape of Object.


interface User333{
    id:string,
    name:string,
    email?:string,
    readonly createdBy:Date,
}


const user333:User333={
    id:"1",name:"User333",
    createdBy:new Date(),email:"xyz@gmail.com",
}

// Extends exisiting Interface : it supports inherit's

// single inheritance
interface Admin333 extends User333
{
    premission:string[]
}
const admin333:Admin333={
    id:"1",
    name:"User333",
    createdBy:new Date(),
    email:"xyz@gmail.com",
    premission:['admin'],
}

// Multiple inheritance

interface Metal{
    type:string
}


interface AdimwithRoleStatus{

    role:{
        active:boolean
    }
}

interface AdimwithRoleStatusMul extends Admin333, Metal,AdimwithRoleStatus{}


const AdminWithStatusandMetal :AdimwithRoleStatusMul={
     id:"1",
    name:"User333",
    createdBy:new Date(),
    email:"xyz@gmail.com",
    premission:['admin'],
    type:"Al",
    role:{
        active:true
    }
}