function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;
}


function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("Taken Buiness Loan: ", amount);;
}

CurrentAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

CurrentAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;
}

const hammadAccount = new CurrentAccount("Hammad Ur Rehman", 1000);
console.log(hammadAccount);