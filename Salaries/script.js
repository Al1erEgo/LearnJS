let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
//
let sum = function () {
    for (let key in salaries) {
        return salaries.John + salaries.Ann + salaries.Pete;
    }
    return 0;
}
alert (sum());