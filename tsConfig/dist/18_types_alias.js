"use strict";
/* Types Alias in Ts*/
const PersonalData = {
    id: 102,
    name: "Rahul",
    ph: 1234567890,
};
function checkoutActionStatus(s) {
    switch (s) {
        case "New":
            return "0";
        case "Paid":
            return "1";
        case "pending":
            return "-1";
        case "cancel":
            return "-2";
        default:
            return "Default";
    }
}
const Pobj = {
    id: '1', name: "HP", price: 1799
};
