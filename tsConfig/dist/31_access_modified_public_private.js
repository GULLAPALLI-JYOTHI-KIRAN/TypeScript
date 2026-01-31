"use strict";
/* Public and Private keyword in class */
// default all are public
class Bank {
    balance;
    amount;
    #opt = 123456;
    constructor(balance, amount) {
        this.balance = balance;
        this.amount = amount;
    }
    getBalance() {
        return this.balance + this.amount;
    }
    deposite(amount) {
        this.amount += amount;
    }
}
const customer = new Bank(10000000, 0);
customer.deposite(50000000000);
console.log(customer.getBalance());
console.log(customer);
