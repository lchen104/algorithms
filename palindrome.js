// Palindrum Algorithm
// Check if n word is a palindrum

const palindrome = (n) => {
    let word = n;
    let result = '';
    for (let i = n.length - 1; i >= 0 ; i--) {
        // console.log(n[i]);
        result += n[i];
    }

    if (word === result) {
        return word + ' is a Palindrome'
    }
    return word + ' is NOT a Palindrome'
    
}

// O(n) => Linear TIme Complexity

console.log(palindrome('meat'));