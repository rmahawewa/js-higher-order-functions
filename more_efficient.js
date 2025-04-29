const radius = [3, 1, 2, 4];

const area = function (radius) {
    return (Math.PI * radius * radius);
}

const circumference = function (radius) {
    return (2 * Math.PI * radius);
}

const diameter = function (radius) {
    return (2 * radius);
}

const calculate = function (arr, logic) {
    const output = [];
    for(let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
} 

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

Array.prototype.calculate1 = function (logic) {
    const output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));