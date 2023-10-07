// Linear Search Algorithm - Works with ordered or unordered lists
// Search for element in erray and return the index of found element

const linearSearch = (array, element) => {
    for (let i = 0; i < array.length; i++) {
       if (array[i] === element) {
        return i;
       }
    }
    return 'Nothing found'
}


// O(n) => Linear Time Complexity

const arr = [10, 4, 7, 3, 5, 9];

// Can use javascript built-in functions find() or findIndex()
console.log(arr.find((el) => el === 5));
console.log(arr.findIndex((el) => el === 5));

// console.log(linearSearch(arr, 9));
// console.log(linearSearch(arr, 11));