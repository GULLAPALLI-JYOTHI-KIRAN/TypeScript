"use strict";
// Working with Object types
let user1 = {
    id: "12edf",
    name: "Emma",
    email: "emma@gmail.com",
}; // This is a simple Javascript object automatically Typescript inference based on the property values
// Now try to use that type
let user2 = {
    id: "wr345",
    name: "Granee",
    createDate: new Date()
}; // As you can see here did not mentioned email property in user type object because it's optional be defined in the type panda E not mentioned any other ID or name created date properties you'll get error highlight like Property 'id' is missing in type '{ name: string; createDate: Date; }' but required in type 'User'.ts(2741)
let user3 = {
    id: "wr345",
    email: "granee@gmail.com",
    name: "Granee",
    createDate: new Date()
}; // Here we use that optional email property here it should be only sting type only if it is present;
let user4 = { email: undefined };
let count = { whatever: 12 };
let c1 = {
    likes: 12,
    comments: 10,
    dislike: 0,
};
