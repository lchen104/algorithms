// Sum up input n
// T= O(n)
// const sumUp = (n) => {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }


// re-factored sumUp function to O(1)
const sumUp = (n) => {
    return (n/2) * (1 + n);
}

console.log(sumUp(5));