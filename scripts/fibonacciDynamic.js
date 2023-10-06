// Fibonacci Algorithm using Dynamic Programming & Memoization
// Memoization is an optimization technique used to speed up computer programs by caching the results of expensive function calls and returning them when the same inputs are encountered again.

let ctr = 0;
const fib = (n, memo) => {
    ctr++; // count how many times this is recursion runs
    let result;
    if (memo[n]) {
        return memo[n];
    }

    if (n === 0 || n === 1) {
        result = 1;
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo);
    }
    memo[n] = result;
    return result;
}

// O(n) => Linear Time Complexity

// console.log(fib(5, {}));
// console.log(fib(6, {}));

const memo = {};
fib(5, memo);
console.log(ctr);
console.log(memo);
ctr = 0;

// Count how many times this runs
fib(5, {});
console.log(ctr);
ctr = 0;

fib(10, {});
console.log(ctr);
ctr = 0;

fib(20, {});
console.log(ctr);
ctr = 0;

fib(50, {});
console.log(ctr);
ctr = 0;