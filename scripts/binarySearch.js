// Binary Search Algorithm - Requires a sorted list

const binarySearch = (sortedArr, element) => {
    let startIndex = 0;

    // get the last index of the array
    let endIndex = sortedArr.length - 1;

    while (startIndex <= endIndex) {
        console.log('RUNNING');
        
        // Finding and Setting the middleIndex of the current array by subtracting endIndex from startIndex
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        // console.log('MidIndex: ' + middleIndex);

        // If element searching for is found, return the middleIndex and exit
        if (element === sortedArr[middleIndex]) {
            return middleIndex;
        }

        // If the current middleindex value in the array is less than the element searched for, 
        if (sortedArr[middleIndex] < element) {
            // set startIndex to the middleIndex + 1
            startIndex = middleIndex + 1;
        } else {
            // set endIndex to middleIndex - 1
            endIndex = middleIndex - 1;
        }
    }
}

// O(1) => Constant Time Complexity
// Array MUST be pre-sorted first befoe running binary search

const arr = [1, 5, 9, 13, 99, 100];

console.log(binarySearch(arr, 99));