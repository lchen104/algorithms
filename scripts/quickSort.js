// Quicksort ALgorithm

const quickSort = (arr) => {
    // copy the array using spread operator
    const newArray = [...arr];
    console.log('FUNCTION STARTING');
    console.log(arr);

    // exit recursive function
    if (newArray.length <= 1) {
        console.log('ONLY ONE ITEM - RETURNING');
        console.log(newArray);
        return newArray;
    }

    const smallerElementsArray = [];
    const biggerElementsArray = [];

    // Remove and Store the first value in newArray to pivotElement
    const pivotElement = newArray.shift();

    // set centerElement to pivotElement
    const centerElementsArray = [pivotElement];

    while(newArray.length) {
        // Get the new first element off of newArray which also shrinks the newArray length
        const currentElement = newArray.shift();
        if (currentElement === pivotElement) {
            centerElementsArray.push(currentElement);
        } else if(currentElement < pivotElement) {
            smallerElementsArray.push(currentElement);
        } else {
            biggerElementsArray.push(currentElement);
        }
    }
    console.log('AFTER WHILE');
    console.log(smallerElementsArray);
    console.log(centerElementsArray);
    console.log(biggerElementsArray);

    const smallerElementsSortedArray = quickSort(smallerElementsArray);
    const biggerElementsSortedArray = quickSort(biggerElementsArray);
    return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray);
    
}


// Best case: O(n * log n) => Items sorted randomly (not in right or wrong order)
// Average case: O(n * log n) => Items sorted randomly (not in right or wrong order)
// Worst case: O(n^2) => Items are already sorted (order does not matter)

// Recursive step runtime: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// Runtime outside of recursion: O(n)
// Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)

const sortedArray = quickSort([4, 2, 9, 17, 12, 8]);
console.log(sortedArray);