class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance = this.balance + amount
    }

    withdraw(amount) {
        this.#balance = this.balance - amount
    }

    setBalance(amount) {
        if (isNaN(amount)) {
            throw new Error('The amount you entered is not a number')
        }
        this.#balance = amount
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
hammadAccount.setBalance(400)

console.log(hammadAccount);