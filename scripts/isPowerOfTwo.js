// Determine whether an input number is a power of two
// Divide n and future division results by 2, until 1 is reached and check if the remainder is always 0

// const isPowerOfTwo = (n) => {
//     if (n < 1) {
//         return false;
//     }

//     let dividedNum = n;
//     while (dividedNum !== 1) {
//         if (dividedNum % 2 !== 0) {
//             return false;
//         }
//         dividedNum /= 2;
//     }
//     return true;
// }
// Best case: n = 13 => O(1)
// Average case: O(log n)
// Worst case: 1,125,899,906,842,624 => O(log n)


const isPowerOfTwo = (n) => {
    if (n < 1) {
        return false;
    }

    // re-factored above code with bitwise operators: https://www.w3schools.com/js/js_bitwise.asp
    // reference URL: https://stackoverflow.com/questions/4678333/n-n-1-what-does-this-expression-do
    return (n & (n - 1)) === 0; // O(1)
}


console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(5));  // false
console.log(isPowerOfTwo(20)); // false
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(13)); // false

console.log(isPowerOfTwo(1024)); // true