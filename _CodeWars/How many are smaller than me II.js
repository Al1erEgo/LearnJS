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
                console.log(array[i+1])
                if (isNaN(array[i+1])) {
                    accumulator[index] = 0;
                    console.log('a')
                    break;
                }
                if (item == array[i+1]) {
                    counter = counter + accumulator[i+1];
                    accumulator[index] = counter;
                    console.log('b')
                    break;
                } else if (item > array[i+1]) {
                    console.log('c')
                    ++counter;
                }
            }
            accumulator[index] = counter;
            return accumulator;
          } , []);
         }
   
   console.log (smaller3([1, 2, 0]))