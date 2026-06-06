class Calculator {
  #result = 0;

  number(value) {
    this.#result = this.#validateNumber(value);
    return this;
  }

  getResult() {
    return this.#result;
  }

  add(value) {
    this.#result += this.#validateNumber(value);
    return this;
  }

  subtract(value) {
    this.#result -= this.#validateNumber(value);
    return this;
  }

  substruct(value) {
    return this.subtract(value);
  }

  divide(value) {
    const divisor = this.#validateNumber(value);
    if (divisor === 0) {
      throw new Error('Division by zero is impossible');
    }
    this.#result /= divisor;
    return this;
  }

  multiply(value) {
    this.#result *= this.#validateNumber(value);
    return this;
  }

  #validateNumber(value) {
    if (!Number.isFinite(value)) {
      throw new TypeError('Value must be a finite number');
    }
    return value;
  }
}

function runLab05Task10() {
  const result = new Calculator()
    .number(10)
    .add(5)
    .subtract(3)
    .multiply(4)
    .divide(2)
    .getResult();

  console.log('Calculator result:', result);
  showLab05Result('lab05-result-10', result);
}
