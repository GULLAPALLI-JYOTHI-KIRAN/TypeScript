"use strict";
/* In Operator in TS */
function SecurityCheck(o) {
    if ("access" in o) {
        return o.permission = "High";
    }
    return o.permission = "specific";
}
// ? operator
// this operator used to prevent runtime crashs
const SN123 = { role: "admin", permission: "High", access: "full" };
const SN124 = { role: "customer", permission: "High", };
console.log(SN123?.access);
// console.log(SN124?.access);
// ?? operator
// this operator used to check left side first and that side should not be null or undefined
//|| operator
// this operator used to check right side if left side is null ,0,undefined
const fsd = 0;
const gsf = 100;
console.log(fsd ?? 100);
console.log(fsd || 100);
