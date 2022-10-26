let x;
let n;
function getX () {
    do {
        x = +prompt ('Введите число больше 0','');
    } while ( !isFinite(x) || x <= 1 );
    return x;
}
function getN () {
    do {
        n = prompt ('Введите целое число больше 0','');
    } while ( !isFinite(n) || n <= 1 || ((n % 1) > 0) );
    return n;
}
function pow() {
    getX ();
    getN ();
    let result = x ** n;
    alert (result);
}
pow ();