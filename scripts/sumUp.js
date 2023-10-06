// Return the sum of n nunber of elements
// Sum up input n
// T => Linear Time Complexity => O(n)
// const sumUp = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }


// re-factored sumUp function
// T => Constant Time Complexity => O(1)
const sumUp = (n) => {
    // returns sum of all the numbers up to n
    return (n / 2) * (1 + n); // Mathemathic formula to sumUp
}

console.log(sumUp(5));