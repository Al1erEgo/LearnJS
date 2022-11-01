function sumInput(array) {
    while (true) {
        let x = prompt("Введите число",0);
        if (x === "" || x === null || !isFinite(x)) break;
        array.push(+x);
    } 
    let y = 0;
    for (let currentNumber of array) {
        y += currentNumber;
    }
    return y;
}

let numbers = [];
alert(sumInput(numbers));