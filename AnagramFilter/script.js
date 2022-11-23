function aclean (arr) {

    let resultArr = [];
    resultArr.push(arr[0]);
  
   for (item of arr) {
    for (resultArrItem of resultArr) {
        let itemSet = new Set(item.toLowerCase());
        let resultArrItemArr = resultArrItem.toLowerCase().split("");
        resultArrItemArr.map(value => itemSet.add(value));
        if (itemSet.size == (new Set(item)).size) break;
        if (resultArrItem == resultArr[resultArr.length-1]) {
            resultArr.push(item);
        };
    };
   };
   
   return resultArr;
};

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log (aclean(arr));