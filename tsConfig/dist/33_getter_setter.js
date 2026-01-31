"use strict";
/* Getter and Setter in class */
class Temp {
    #c;
    constructor(c) {
        this.#c = c;
    }
    get numState() {
        return this.#c;
    }
    set numState(value) {
        this.#c = value;
    }
}
const tem = new Temp(1000);
tem.numState = 100;
console.log(tem.numState);
