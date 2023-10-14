// Binary Search

const binarySearch = (array, element) => {

    // set startIndex to zero for the first index
    let startIndex = 0;

    // set endIndex to the lengh of the array minus 1 (index starts at zero so we subtract 1 from length to point at last index of the array)
    let endIndex = array.length - 1;

    // repeat loop until found
    while (startIndex <= endIndex) {
        console.log('RUNNING...');
        // find and set the middleIndex of the array
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        // console.log(startIndex + ':' + middleIndex + ':' + endIndex);

        // if the current value in array[middleIndex] is equal to element value we are searching for, return the value in the array[middleIndex] and exit
        if (array[middleIndex] === element) {
            // console.log('arrayIndex value ' + array[middleIndex] + ' =  element value ' + element);
            return middleIndex;
        } else if (array[middleIndex] < element) {
            // console.log('arrayIndex value ' + array[middleIndex] + ' <  element value ' + element);
            // search the right half of the array
            startIndex = middleIndex + 1;
        } else {
            // search the left half of the array
            // console.log('arrayIndex value ' + array[middleIndex] + ' >=  element value ' + element);
            endIndex = middleIndex - 1;
        }
    }
}

// O(log n) => Constant Time Complexity
// Array MUST be pre-sorted first before running binary search

const arr = [1, 5, 8, 12, 18, 45];
console.log(binarySearch(arr, 18));