"use strict";
/* InterFaces in TS */
const user333 = {
    id: "1", name: "User333",
    createdBy: new Date(), email: "xyz@gmail.com",
};
const admin333 = {
    id: "1",
    name: "User333",
    createdBy: new Date(),
    email: "xyz@gmail.com",
    premission: ['admin'],
};
const AdminWithStatusandMetal = {
    id: "1",
    name: "User333",
    createdBy: new Date(),
    email: "xyz@gmail.com",
    premission: ['admin'],
    type: "Al",
    role: {
        active: true
    }
};
