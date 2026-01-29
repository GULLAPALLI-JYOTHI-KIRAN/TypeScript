"use strict";
/* Utils Shallow with Objects in Ts */
const ys12 = {
    id: "12"
};
const reqUser = { id: "123", name: "Ben John", email: "ben@gmail.com,", address: {
        city: "USA", pincode: 172
    } };
const readOnlyUser = { id: "123", name: "Ben John", email: "ben@gmail.com,", address: {
        city: "USA", pincode: 172
    } };
const pickUser = {
    id: "wew23", email: "Ben@gmail.com"
};
const omitUser = {
    name: "John"
};
const recordUser = { "Admin": { id: "123", name: "Ben John", email: "ben@gmail.com,", address: {
            city: "USA", pincode: 172
        } }, "user": { id: "123", name: "Ben John", email: "ben@gmail.com,", address: {
            city: "USA", pincode: 172
        } } };
