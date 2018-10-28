const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');
const recursion = require('../recursion');

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

describe('Codejam-3', function() {
  describe('sumOfOther()', function() {
    
    it('should return array of sum of other digits', function() {
      assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
  });

  describe('make()', function() {
    
    it('should return sum of all digits', function() {
      assert.equal(make(14)(1, 2, 3)(sum), 20);
    });

    it('should return multiple of all digits', function() {
      assert.equal(make(1)(1, 2, 3)(mult), 6);
    });
  });

  describe('recursion()', function() {
    
    it('should return array of arrays', function() {
      assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,110,130]]);
    });
  });
});