// class Payment {
//     constructor(amount) {
//         this.amount = amount;
//         if (this.constructor === Payment) {
//             throw new Error('Cannot instantiate abstract class Payment directly')
//         }
//     }

//     pay() {
//         throw new Error("Abstract method 'pay()' must be implemented in subclasses")
//     }
// }

// class CreditCardPayment extends Payment {
//     constructor(amount, cardNumber) {
//         super(amount)
//         this.cardNumber = cardNumber
//     }

//     pay() {
//         console.log(`Processing credit card payment of amount $${this.amount} using card: ${this.cardNumber}`);
//     }
// }

// class PaypalPayment extends Payment {
//     constructor(amount, email) {
//         super(amount)
//         this.email = email
//     }

//     pay() {
//         console.log(`Processing paypal payment of amount $${this.amount} using card: ${this.email}`);
//     }
// }


// const creditPayment = new CreditCardPayment(100, '11223-31232-231-231');
// creditPayment.pay();

// const paypalPayment = new PaypalPayment(120, 'hammadurrehman1954@gmail.com');
// paypalPayment.pay();

// // const payment = new Payment(200);
// // payment.pay(); // Error: Cannot instantiate abstract class Payment directly




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Employee {
    constructor(amount, hours) {
        if (isNaN(amount) || isNaN(hours)) {
            throw new Error("Please enter valid numbers for amount and hours");
        }
        this.amount = amount; // Rate per hour or salary multiplier
        this.hours = hours;   // Number of hours worked
    }

    calculateSalary() {
        throw new Error("Abstract method 'calculateSalary()' must be implemented in subclasses");
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary() {
        const salary = this.hours * this.amount;
        console.log(`Full-time: For ${this.hours} hours of work, your monthly salary is $${salary}`);
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary() {
        const salary = this.hours * this.amount;
        console.log(`Part-time: For ${this.hours} hours of work, your monthly salary is $${salary}`);
    }
}

// Example usage
const partTimeEmployee1 = new PartTimeEmployee(200, 19);
partTimeEmployee1.calculateSalary(); 

const fullTimeEmployee1 = new FullTimeEmployee(5000, 25);
fullTimeEmployee1.calculateSalary();
