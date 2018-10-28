const sumOfOther = (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    return arr.map(x => sum - x);
}

console.log(sumOfOther([2, 3, 4, 1]));