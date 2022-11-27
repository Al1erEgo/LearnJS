
// function printList(list) {
//     do {
//         console.log (list.value);
//         list = list.next;
//     } while (list.next != null);
//     console.log (list.value);
// }

// function printList(list) {
//     if (list.next == null) {
//         console.log (list.value)
//     } else {
//         console.log (list.value)
//         printList(list.next)
//
//     }
// }

// function printList(list) {
//
//     let print = [];
//     do {
//         print.push (list.value);
//         list = list.next;
//     } while (list.next != null);
//     print.push (list.value);
//     return print.reverse().toString();
//
// }

function printList(list) {

    if (list.next != null) {
        printList(list.next);
    }
    console.log(list.value)
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

console.log(printList(list));