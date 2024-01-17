class Worker2 {
    #name
    #surname
    #rate
    #days
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getSalary() {
        return this.#rate * this.#days;
    }
}

let worker2 = new Worker2("Анатолий", "Анатольев", 2000, 28);

console.log("Task 13:", worker2)
console.log("Task 13: Зарплата -", worker2.getSalary())
