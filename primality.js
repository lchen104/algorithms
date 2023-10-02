// A Prime number is ONLY divisible by itself or by 1
// Both 5 and 9 are divisible by itself or by 1, BUT 9 is also divisible by 3 therefore, 9 is NOT a prime number
// While dividing, n must return a whole INTERGER and no REMAINDER (ie. 1, 2, 3) NOT (ie. 1.2, 1.4, 1.6)

const isPrime = (n) => {
    for (let i = 2; i < Math.sqrt(n); i++) { // 1
        // console.log(i + ':' + n)
        console.log('Runnning')
        if (n % i === 0) { // n
            // console.log(n + ' divided by ' + i + ' = 0')
            return false; // 1
        }
        
    }
    return true; // 1
}

// Best case: n = 1 OR n = 2 => O(1)
// Average case: O(n) / (Imporved: O(sqrt(n)))
// Worst case: n = 27,277 => O(n) / (Imporved: O(sqrt(n)))


// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(9));
console.log(isPrime(27277)); // A prime number