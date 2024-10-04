class Employee {
    constructor(amount, hours) {
        if (isNaN(amount) && isNaN(hours)) {
            throw new Error('Please enter valid numbers for both amount and hours');
        }
        this.amount = amount;
        this.hours = hours;
    }

    calculateSalary() {
        throw new Error("This method should be implemented by subclasses");
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary() {
        const salary = this.hours * this.amount;
        console.log(`Full-time employee: ${this.hours} hours worked, Salary = $${salary}`);
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary() {
        const salary = this.hours * this.amount;
        console.log(`Part-time employee: ${this.hours} hours worked, Salary = $${salary}`);
    }
}

// Freelancer class
class Freelancer extends Employee {
    calculateSalary() {
        const salary = this.hours * this.amount * 1.5; // Freelancers get paid 1.5x for each hour
        console.log(`Freelancer: ${this.hours} hours worked, Salary = $${salary}`);
    }
}

function processSalary(employee) {
    employee.calculateSalary();
}

const fullTimeEmployee = new FullTimeEmployee(50, 160);
const partTimeEmployee = new PartTimeEmployee(30, 80);
const freelancer = new Freelancer(50, 160);

processSalary(fullTimeEmployee);
processSalary(partTimeEmployee);
processSalary(freelancer);