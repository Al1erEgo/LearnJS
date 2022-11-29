function inBetween (a ,b) {
    return (item) => (item >= a && item <= b) ? true : false;
}

function inArray (array) {
    return (outerItem) => array.find( item => (outerItem == item) ? true : false)
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2