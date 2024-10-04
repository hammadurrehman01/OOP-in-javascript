// // Procedural approach

// function createCar(make, name, year) {
//     return { make, name, year }
// }

// function displayCarInfo(car) {
//     console.log(`Car Details: ${car.make} ${car.name} ${car.year}`);
// }

// const car1 = createCar("Toyota", "Corolla", 2020);
// const car2 = createCar("KIA", "Sportage", 2022);
// displayCarInfo(car1)
// displayCarInfo(car2)




//////////////////////////////////////////////////////////////////////////////////////


// OOP approach

class Car {
    constructor(make, name, year) {
        this.make = make;
        this.name = name;
        this.year = year;
    }

    displayCarInfo() {
        console.log(`Car Details: ${this.make} ${this.name} ${this.year}`);
    }
}

const car1 = new Car('Toyota', 'Corolla', '2020');
car1.displayCarInfo()