// sumTotal algorithm using for loop
// const sumRange = (n) => {
//     let total = 0;
//     for (let i = n; i > 0; i--) {
//         total += i;
//     }
//     return total;
// }

// console.log(sumRange(3));

// sumRangeRecursive Algorithm using Recursion
const sumRangeRecursive = (n, total = 0) => {
    if (n <= 0) {
        return total;
    }

    return sumRangeRecursive(n - 1, total + n);
}

console.log(sumRangeRecursive(3));