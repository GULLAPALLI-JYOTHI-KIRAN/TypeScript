"use strict";
/* Index Signatures in TS */
const obj1 = {};
obj1["Share"] = 100;
obj1['comment'] = 1000;
obj1['Likes'] = 100000000;
console.log(obj1);
/* Here we are two keys and their values should be number. While creating the object, both they value must be number type only */
const obj2 = {
    "share": 100,
    "like": 10
};
// You can use when you want a dynamic keys  and values
const DynamicObj = new Map();
DynamicObj.set("master", 1001);
DynamicObj.set("rate", 12);
const obj12 = {
    "flag": 1,
    fight: undefined
};
console.log(obj12);
