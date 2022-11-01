function Calculator() {
    this.read = function() {
        this.x = +prompt ("Введите первую цифру", "");
        this.y = +prompt ("Введите вторую цифру", "");
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };
  }
  let calculator = new Calculator();
  calculator.read();

  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );