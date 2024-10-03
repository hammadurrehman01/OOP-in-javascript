// class BankAccount {
//     customerName;
//     accountNumber;
//     balance;

//     constructor(customerName, balance) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance = this.balance + amount
//     }

//     withdraw(amount) {
//         this.balance = this.balance - amount
//     }
// }


// class DonationAccount extends BankAccount {

//     constructor(customerName, balance) {
//         super(customerName, balance)
//     }

//     sendDonation(amount) {
//         this.balance = this.balance - amount
//         console.log('Donation given Rs: ' + amount);
//     }
// }

// const hammadAccount = new DonationAccount('Hammad Ur Rehman', 40000)
// hammadAccount.sendDonation(5000)

// console.log(hammadAccount);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }

//     login() {
//         console.log(`${this.username} has logged in`);
//     }

//     logout() {
//         console.log(`${this.username} has logged out`);
//     }
// }


// class Customer extends User {
//     constructor(username, email, customerID) {
//         super(username, email)
//         this.customerID = customerID;

//     }

//     purchaseItem(item) {
//         console.log(`${this.username} has purchased ${item}`);

//     }
// }

// class Admin extends User {
//     constructor(username, email, adminLevel) {
//         super(username, email);
//         this.adminLevel = adminLevel;
//     }

//     deleteUser(user) {
//         console.log(`${this.username} (admin level: ${this.adminLevel}) deleted user ${user.username}.`);
//     }
// }

// const customer1 = new Customer('Ali Ahmed', 'ali@example.com', 'C12345');
// const admin1 =  new Admin('AdminHammad', 'admin@example.com', '1');

// customer1.login();
// customer1.purchaseItem('Laptop');
// admin1.deleteUser(customer1);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Practice Task for Inheritance:

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine() {
        console.log(`${this.model}'s engine has started`);
    }

    stopEngine() {
        console.log(`${this.model}'s engine has stopped`);
    }
}

class Car extends Vehicle {
    constructor(make, model, average) {
        super(make, model)
        this.average = average
    }

    startEngine() {
        console.log(`${this.model}'s engine has started`);
    }
}

class Truck extends Vehicle {
    constructor(make, model, capacity) {
        super(make, model)
        this.capacity = capacity;
    }

    LoadCargo() {
        console.log(`${this.model} has made by ${this.make} company and has capacity of load cargo about ${this.capacity}`);
    }
}

const truck1 = new Truck('Nissan', 'Shezor', '75');
truck1.LoadCargo();
const car1 = new Car('KIA', 'Sportage', '13');
car1.petrolAverage();