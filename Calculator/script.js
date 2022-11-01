let calculator = {
    read () {
        this.x = +prompt ("Введите первую цифру", "");
        this.y = +prompt ("Введите вторую цифру", "");
    },
    sum () {
        return this.x + this.y;
    },
    mul () {
        return this.x * this.y;
    },
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );