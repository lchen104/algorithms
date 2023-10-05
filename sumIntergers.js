// Return the sum of n from var start to var end
const sumInt = (n, start, end) => {
    // const array = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        // array.push(start + i);
        sum += (start + i);
    }
    // return array;
    return sum;

}

console.log(sumInt(5, 1, 5));
console.log(sumInt(1000, 1, 1000));
console.log(sumInt(8, -3, 4));