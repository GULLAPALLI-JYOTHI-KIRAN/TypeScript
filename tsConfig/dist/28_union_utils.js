"use strict";
/* Utilis in Union Ts */
function MyEvent(e) {
    console.log(e);
}
MyEvent("KeyDown");
function ActionEvent(e) {
    console.log(e);
}
ActionEvent("Create");
function MaycheckNumber(num) {
    console.log(num);
}
MaycheckNumber(100);
// MaycheckNumber("10")// We are making not so it will take only only number from the Maybenumber type
