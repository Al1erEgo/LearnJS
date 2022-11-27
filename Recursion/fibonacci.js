// function fib(n) {
//
//     if (n == 0) {
//         return 0;
//     } else if ( n == 1) {
//         return 1;
//     } else {
//         return fib (n-1) + fib (n-2)
//     }
//
// }

function fib(n) {
    let fn1 = 0;
    let fn2 = 1;
    for (i = 1; i < n; i++) {
        [fn1, fn2] = [fn2, fn1+fn2];
    }
    return fn2
}



console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757