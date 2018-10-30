const sumOfOther = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  return arr.map(x => sum - x);
};

module.exports = sumOfOther;
