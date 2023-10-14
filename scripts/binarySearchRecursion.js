// binary search in recursion

const findElement = (sortedArr, element, offset) => {
    // O(1)
    console.log(sortedArr, element)

    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    // console.log(startIndex + ':' + middleIndex + ':' + endIndex);

    // return element not found
    if (startIndex > endIndex) {
        return 'Not Found';
    }

    if (sortedArr[middleIndex] === element) {
        return middleIndex + offset;
    }

    if (sortedArr[middleIndex] < element) {
        // search left side of array
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
    } else {
        // search right of array
        endIndex = middleIndex;
    }
    // O(1)
    return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset);
}

// Master Theorem

// Runtime of recursion: O(n log b a)
// Overall algorithm runtime (time complexity) - three cases:
// 1) Recursion does more work => O(n log b a)
// 2) Same work inside and outside of recursion => O(n log b a log n)
// 3) Non-recursive part does more work => O(fn(n))
// where: 
// a equals the number of subproblems (number of recursion splits)
// b equals the relative subproblem size (input reduction per split)
// f(n) equals the runtime outside of the recursion


// a = 1
// b = 2
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1) // just the recursive step
// Overall algorithm time complexity:
// O(n^logb a * log n) => O(1 * log n) => O(log n)

const arr = [1, 5, 9, 13, 99, 100];
console.log(findElement(arr, 99, 0));