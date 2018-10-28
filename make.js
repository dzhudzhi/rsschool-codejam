const make = (...args) => {
    const arr = [];
    const func = (...args) => {
        if (typeof(args[0]) === 'function') return arr.slice(1).reduce((a, b, i) => arr[i] = args[0](a ,b), arr[0]);
        arr.push(...args);
        return func;
    }
    return func(...args);
}

module.exports = make;