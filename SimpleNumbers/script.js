let n = 2;
let e;
let numberValue;
for (e = 10; n <= e; n++) {
    numberValue = 0;
    for (let c = 2; c < n; c++) {
        if (n % c == 0) {
        numberValue = 1;
        }
    }
    if (numberValue == 0) {
        alert(n);
    }
}
