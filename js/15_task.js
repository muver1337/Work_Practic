class MyString {
    constructor(string) {
        this.string = string;
    }
    reverse() {
        return this.string.split('').reverse().join('');
    }

    ucFirst() {
        return this.string.charAt(0).toUpperCase() + this.string.slice(1);
    }

    ucWords() {
        return this.string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}

const worker4 = new MyString('если б море было пивом, я б дельфином стал красивым');

console.log("Task 15: input -", worker4.string)
console.log("Task 15: reverse -", worker4.reverse())
console.log("Task 15: ucFirst -", worker4.ucFirst())
console.log("Task 15: ucWords -", worker4.ucWords())
