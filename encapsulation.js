// class BankAccount {
//     customerName;
//     accountNumber;
//     #balance = 0;

//     constructor(customerName, balance) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         this.#balance = this.balance + amount
//     }

//     withdraw(amount) {
//         this.#balance = this.balance - amount
//     }

//     setBalance(amount) {
//         if (isNaN(amount)) {
//             throw new Error('The amount you entered is not a number')
//         }
//         this.#balance = amount
//     }

//     get Balance() {
//         return this.#balance;
//     }

// }


// class DonationAccount extends BankAccount {

//     constructor(customerName, balance) {
//         super(customerName, balance)
//     }

//     #calculatingInterest(amount) {
//         console.log("Calculating Interest :", amount);
//     }

//     sendDonation(amount) {
//         this.#calculatingInterest(2000)
//         this.balance = this.balance - amount
//         console.log('Donation given Rs: ' + amount);
//     }
// }

// const hammadAccount = new DonationAccount('Hammad Ur Rehman', 40000)
// // hammadAccount.setBalance(400)
// hammadAccount.sendDonation(4000)
// // hammadAccount.calculatingInterest(4000)

// console.log(hammadAccount);
// console.log(hammadAccount.Balance); 




///////////////////////////////////////////////////////////////////////////////////////////////////

// Encapsulation with ES6 classes (modern way):

// class Car {
//     #mileage = 0;

//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     getMileage() {
//         return this.#mileage
//     }

//     drive(km) {
//         if (km > 0) {
//             this.#mileage = this.#mileage + km;
//             console.log(`${this.model} drove ${km} km. Total mileage: ${this.#mileage} km`);
//         }
//     }
// }

// const car1 = new Car('Honda', 'Civic');
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.getMileage());

// car1.drive(50)
// car1.drive(500)

// console.log(car1)
// console.log(car1.getMileage())