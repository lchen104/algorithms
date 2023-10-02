// A Prime number is ONLY divisible by itself or by 1
// Both 5 and 9 are divisible by itself or by 1, BUT 9 is also divisible by 3 therefore, 9 is NOT a prime number
// While dividing, n must return a whole INTERGER and no REMAINDER (ie. 1, 2, 3) NOT (ie. 1.2, 1.4, 1.6)

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        console.log(i + ':' + n)
        if (n % i === 0) {
            console.log(n + ' divided by ' + i + ' = 0') 
            return false;
        }
        
    }
    return true;
}

// console.log(isPrime(3));
// console.log(isPrime(4));
console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));
// console.log(isPrime(8));
console.log(isPrime(9));