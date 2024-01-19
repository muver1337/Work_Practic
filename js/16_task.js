class calculation {
    #calculationLine

    constructor() {
        this.#calculationLine = "";
    }

    setterCalculationLine(number){
        this.#calculationLine = number;
    }

    setLastSymbolCalculationLine(symbol){
        this.#calculationLine += symbol;
    }


    gettercalCulationLine(){
        return this.#calculationLine;
    }

    lastSymbol(){
        return this.#calculationLine.charAt(this.#calculationLine.length - 1);
    }

    deleteLastSymbol(){
            this.#calculationLine = this.#calculationLine.slice(0,-1);
    }
}

const calculator = new calculation();
calculator.setterCalculationLine('100');
console.log("Task 16: Заданная переменная calculationLine -", calculator.gettercalCulationLine());
calculator.setLastSymbolCalculationLine('50');
console.log("Task 16: Переменная calculationLine после добавления значения -", calculator.gettercalCulationLine());
console.log("Task 16: Последний символ строки -",calculator.lastSymbol());
calculator.deleteLastSymbol();
console.log("Task 16: Переменная calculationLine после удаления символа -", calculator.gettercalCulationLine());