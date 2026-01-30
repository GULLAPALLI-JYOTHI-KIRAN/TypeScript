"use strict";
/* Utilities with Functions and class's */
function HelpType(id, IsExpose = false) {
    return {
        id,
        name: "John",
        IsExpose,
    };
}
const args_ = [10, true];
const funcCall = HelpType(...args_);
/* Here we are function as a type and its parameter also a type so That no need to create special types for each individual function return type and for the parameters with the utility helper of function. Here we are since creating a separate types for each individuals if if they want to use this function they need to this paper for parameters to that function as an Arg */
// Class Utility function
class PublicMe {
    name;
    state;
    constructor(name, state) {
        this.name = name;
        this.state = state;
    }
    greet() {
        return `Hello I am ${this.name}`;
    }
}
const consArg = ['Ben', true];
const InstClass = new PublicMe(...consArg);
