export class BackAccount {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }
}

const hammadAccount = new BackAccount("Hammad Ur Rehman", 1000)
hammadAccount.deposit(6000)
const rafatAccount = new BackAccount("Hammad Ur Rehman", 1000)
console.log(hammadAccount)
console.log(rafatAccount)