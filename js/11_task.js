function objectToArray(obj) {
    const output = [];
    for (let key in obj) {
        output.push([key, obj[key]]);
    }
    return output;
}

const input = { a: 1, b: 2 };
const output = objectToArray(input);

console.log("Task 11: вход -", input)
console.log("Task 11: выход -", output)