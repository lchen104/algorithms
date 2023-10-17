// Bubble Sort Algorithm

const sort = (arr) => {
    // create a new array to sort
    // const resultArray = arr.slice();
    const resultArray = [...arr];

    for (let outer = 0; outer < resultArray.length; outer++) {
        // helper variable
        let outerEl = resultArray[outer];

        for (let inner = outer + 1; inner < resultArray.length; inner++) {
            // helper variable
            let innerEl = resultArray[inner];

            if (outerEl > innerEl) {
                // swap if outer variable value is greater then inner variable value
                resultArray[outer] = innerEl;
                resultArray[inner] = outerEl;

                // reset helper variable with updated variable values for the next loop
                outerEl = resultArray[outer];
                innerEl = resultArray[inner];
            }
        }
    }
    return resultArray;
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