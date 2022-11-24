function smaller(arr) {
    return arr.map( (item, index, array) => {
      let counter = 0;
      for (i = index+1; i < array.length; i++) {
        if (item > array[i]) counter++;
      }
      return counter;
    })
}

    function smaller2(arr) {
        return arr.map( (item, index, array) => {
          return array.slice(index+1).filter(answer => answer < item).length
        })
       }

       function smaller3(arr) {
          return arr.reduceRight( (accumulator, item, index, array) => {
            let counter = 0;
            for (i = index; i < arr.length; i++) {
                if (isNaN(array[i+1])) {
                    accumulator[index] = 0;
                    break;
                }
                if (item == array[i+1]) {
                    counter = counter + accumulator[i+1];
                    accumulator[index] = counter;
                    break;
                } else if (item > array[i+1]) {
                    ++counter;
                }
            }
            accumulator[index] = counter;
            return accumulator;
          } , []);
         }

function smaller4 (arr) {
    let accumulator = {
        sum: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        0: () => this.sum[0],
        1 ()  {this[0] + this.sum[1]},
        // 2 : this[1] + this.sum[2],
        // 3 : this[2] + this.sum[3],
        // 4 : this[3] + this.sum[4],
        // 5 : this[4] + this.sum[5],
        // 6 : this[5] + this.sum[6],
        // 7 : this[6] + this.sum[7],
        // 8 : this[7] + this.sum[8], 
        // 9 : this[8] + this.sum[9],
    }
    return accumulator["0"]()
    console.log(accumulator.sum)






}
console.log (smaller4([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]))
   console.log (smaller4([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]))