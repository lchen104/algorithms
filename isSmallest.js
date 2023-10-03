// Find the smallest number in an array

const getMin = (n) => { 
    let smallest = n[0]; // 1

    for (let i = 0; i < n.length; i++) { // 1
        // console.log('Running')
        if (n[i] < smallest) { // n
            // console.log('Running inside')
            smallest = n[i]; //  // 0 (Best case), 2 (Worst case), 1 (Avg. case)
        }
        
    }
    return smallest; // 1
}


// Best case: [1, 2, 3] => O(n) => Linear Time
// Worst case: [3, 2, 1] => O(n) => Linear Time
// Average: [2, 1, 3] => O(n) => Linear Time

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));