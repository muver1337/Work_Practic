class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker("Михаил", "Михаилов", 1600, 31);

console.log("Task 12:", worker)
console.log("Task 12: Зарплата -", worker.getSalary())