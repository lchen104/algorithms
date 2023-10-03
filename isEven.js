// Check n and return true if even and false if odd

const isEven = (n) => {
    // if (n % 2 === 0) {
    //     return true;
    // }
    // return false;

    // re-factored above code
    return n % 2 === 0; // 1
}

// One case: O(1) => Constant Time

console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(7));