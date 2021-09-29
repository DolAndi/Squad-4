const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });

    it("Deve somar um negativo e um positivo", () => {
      expect(calculator.sum(-2, 3)).to.equal(1)
    });

    it("Deve somar 49 com 50 e retornar 99", () => {
      expect(calculator.sum(49, 50)).to.equal(99)
    });
    it("Deve diminuir dois valores inteiros", () => {
      expect(calculator.sub(2, 2)).to.equal(0)
    });
    it("Deve multiplicar dois valores inteiros", () => {
      expect(calculator.mul(10, 2)).to.equal(20)
    });
    it("Deve dividir dois valores inteiros", () => {
      expect(calculator.div(50, 50)).to.equal(1)
    })
  
});
