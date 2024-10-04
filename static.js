class User {

    constructor(name, age, income = 0) {
        this.name = name;
        this.age = age;
        this.income = income;
    }

    static compareByAge(a, b) {
        return a.age - b.age
    }

    static compareByIncome(a, b) {
        return a.income - b.income
    }

    static customerName() {
        console.log("Hammad Ur Rehman");
    }

    static customerAge() {
        this.customerName()
        console.log(20);
    }

    static {
        console.log("Initialized!");

    }
}

// const user1 = new User('Ali Ahmed', 30, 10000);
// const user2 = new User('Hammad Ur Rehman', 20, 14000);
// const user3 = new User('Mubeen Khan', 40, 30000);

// const users = [user1, user2, user3];
// users.sort(User.compareByAge)
// users.sort(User.compareByIncome)

console.log(users);
