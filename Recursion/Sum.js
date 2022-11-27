
function sumTo (n) {
    let sum = 0;
    for (i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

function sumTo2 (n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo2 (n - 1);
    }
}

function sumTo3 (n) {
    return (1 + n) / 2 * n;
}

console.log (sumTo3(10));