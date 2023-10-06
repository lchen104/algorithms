// Return the sum of an array
// const sumArray = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }


const sumArray = (numbers) => {
    return numbers.reduce((sum, curNum) => sum + curSum, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));