// Simplest quickSort Algorithm
// https://www.youtube.com/watch?v=S1qHWjP1hb0

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    // destructures arr array and sets pivot to the first element value in arr array
    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];

    // check and move each element less than pivot element to the left array, else move element to the right array
    rest.forEach(el => el < pivot ? left.push(el) : right.push(el));

    // return the 3 arrays combined into one in sorted order from left, pivot to right array
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([9, 5, 7, 4, 3, 5]));