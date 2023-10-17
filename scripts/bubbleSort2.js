// Bubble Sort Algorithm

const sort = (arr) => {
    const newArr = [...arr];
    let temp = 0;
    // outer loop
    for (i = 0; i < newArr.length; i++) {
        
        // inner loop
        for (let j = i + 1; j < newArr.length; j++) {
            console.log('Running')
            // console.log(i + ':' + j);
            if (newArr[i] > newArr[j]) {
                temp = newArr[i]
                newArr[i] = newArr[j];
                newArr[j] = temp;
            } 
            // Un-necessary to set since its already in correct order
            // else {
            //     temp = newArr[j];
            //     newArr[j] = newArr[i];
            //     newArr[j] = temp;
            // }
        }
    }
    return newArr;
}


// Best case: O(n) => Linear Time Complexity (Already sorted)
// Average case: Tends to be O(n^2) => Quadratic Time Complexity
// Worst Case: O(n^2) => Quadratic Time Complexity (Sorted in reverse)

const sortedArray = sort([11, -3, 2, 9, 4, 5]);
console.log(sortedArray);


// rule of thumb
// one loop => Linear Time
// two loops => Quadratic Time
// three loops => Cubic Time