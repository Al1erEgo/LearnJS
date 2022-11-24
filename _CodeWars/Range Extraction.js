function solution(list){
    let answer =  [];
    let i = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] == (list[i+2]-2)) {
            answer.push(',')
            answer.push(list[i])
            answer.push('-')
            for (j = i+1; j < list.length; j++) {
                if (list[j] != list[j+1]-1) {
                    answer.push(list[j])
                    i = j;
                    break
                }
            }
        } else {
            answer.push(',')
            answer.push(list[i])
        }
        
    }
    answer.shift();
    return answer.join('')
   };

   console.log (solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));