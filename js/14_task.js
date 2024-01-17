class Worker3 {
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

    setRate(setRate) {
        if (setRate === '') {
            throw new Error('Поле оплаты не может быть пустым')
        }
        this.#rate = setRate;
    }

    setDays(newDay) {
        if (newDay <= 20) {
            throw new Error('Рабочих дней не может быть меньше 20')
        }
        this.#days = newDay;
    }

    getSalary() {
        return this.#rate * this.#days;
    }
}

let worker3 = new Worker3("Анатолий", "Анатольев", 2000, 28);
worker3.setRate(2700);
worker3.setDays(31);

console.log("Task 14:", worker3)
console.log("Task 14: Изменённая зарплата Анатолия учитывая новый график:", worker3.getSalary())


