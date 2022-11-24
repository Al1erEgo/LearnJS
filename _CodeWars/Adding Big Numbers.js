function add(a, b) {
    console.log(a.length, b.length)
    let first = b;
    let second = a;
    if (a.length > b.length) {
        first = a;
        second = b;
    }
    first = first.split('').map(item => +item).reverse();
    second = second.split('').map(item => +item).reverse();
    console.log(first, second)
    for (i = 0; i < first.length; i++) {
        
        if (first[i] == 10) {
            if (first[i+1]) {
                first[i] = 0;
                first[i+1] += 1;
            } else {
                first[i] = 0;
                first.push(1)
            }
        }
        if (second[i]) {
            if (first[i]+second[i] > 10) {
                if (!first[i+1]) first.push(0);
                first[i] = first[i]+second[i] - 10;
                first[i+1] += 1;
            } else if (first[i]+second[i] == 10) {
                if (!first[i+1]) first.push(0);
                first[i] = 0;
                first[i+1] += 1;
            } else {
                first[i] = first[i] + second[i];
            }
        }
    }
    console.log(first, second)
    return first.reverse().join('');
  }

  console.log (add('63829983432984289347293874', '90938498237058927340892374089'))