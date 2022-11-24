function twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let answer = numbers.indexOf(target - numbers[i]);
            if (answer > -1 && i != answer) {
                return [i, answer];
            }
        }
  }

  console.log(twoSum([2, 2, 3], 4));