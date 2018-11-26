const powerset = (array) => { // O(2^n)
    const results = [[]];
    for (const value of array) {
        const copy = [...results];
        for (const prefix of copy) {
            results.push(prefix.concat(value));
        }
    }
    return results;
};

console.log(
    powerset(['Aa', 'Bb', 'Cc','Dd','Ee']))