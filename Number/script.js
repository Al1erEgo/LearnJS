let valueNumber;
valueNumber = prompt ('Введите любое число.','');
if (valueNumber == '') {
    alert ('Вы не ввели число!');
} else if (valueNumber == 0) {
    alert ('0');
} else if (valueNumber > 0) {
    alert ('1');
} else {
    alert ('-1');
}