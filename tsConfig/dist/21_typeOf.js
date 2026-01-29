"use strict";
/* Using typeOf in Ts */
// with primitive datatypes
function checkMe(v) {
    if (typeof v == "number") {
        return "Number";
    }
    if (typeof v == "bigint") {
        return "BigInt";
    }
    if (typeof v == "boolean") {
        return "Boolean";
    }
    if (typeof v == "string") {
        return "String";
    }
    if (typeof v == 'symbol') {
        return 'symbol';
    }
    if (typeof v == "undefined") {
        return "undefined";
    }
    if (v instanceof Date) {
        return "Date";
    }
    if (v instanceof Array) {
        return "Array";
    }
    if (typeof v == "function") {
        return "function";
    }
    if (v instanceof Error) {
        return "Error";
    }
    if (v == null) {
        return null;
    }
    return "Object";
}
console.log(checkMe(100));
console.log(checkMe(null));
console.log(checkMe(1635373374n));
console.log(checkMe(true));
console.log(checkMe("Hello"));
console.log(checkMe(Symbol("ert")));
console.log(checkMe({ id: "23wes", name: "John" }));
console.log(checkMe(undefined));
console.log(checkMe("25-07-2002"));
console.log(checkMe([12, 34, 56]));
console.log(checkMe(() => { }));
console.log(checkMe(new Error("something went wrong.")));
