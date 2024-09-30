class BankAccount {
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount
    }

    withdraw(amount) {
        this.balance = this.balance - amount
    }
}


class DonationAccount extends BankAccount {

    constructor(customerName, balance) {
        super(customerName, balance)
    }

    sendDonation(amount) {
        this.balance = this.balance - amount
        console.log('Donation given Rs: ' + amount);
    }
}

const hammadAccount = new DonationAccount('Hammad Ur Rehman', 40000)
hammadAccount.sendDonation(5000)

console.log(hammadAccount);