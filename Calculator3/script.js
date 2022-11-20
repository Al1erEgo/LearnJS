function Calculator () {

     this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function(inputStr) {
        return this.methods[inputStr.split(' ')[1]](+inputStr.split(' ')[0], + +inputStr.split(' ')[2])
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }

}

let powerCalc = new Calculator;

powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.methods["-"](3, 4));
console.log(powerCalc.calculate("3 + 7"));
console.log(powerCalc.calculate("8 / 4"));
console.log(powerCalc.calculate("2 ** 3"));
