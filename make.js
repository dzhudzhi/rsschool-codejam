const make = (...args) => {
    const arr = [];
    const func = (...args) => {
        if (typeof(args[0]) === 'function') return arr.slice(1).reduce((a, b, i) => arr[i] = a + b, arr[0]);
        arr.push(...args);
        return func;
    }
    return func(...args);
}

const sum = (a, b) => a + b;

// console.log(make());
console.log(make(14)(1, 2, 3)(sum));