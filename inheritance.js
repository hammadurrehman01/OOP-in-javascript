function BackAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    thiss.balance = balance;
}

BackAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

BackAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;
}

console.log();
