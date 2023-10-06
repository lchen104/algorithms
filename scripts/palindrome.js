// Palindrome Algorithm
// Check if n word is a palindrum (spelled the same when reversed)

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

// O(n) => Linear Time Complexity

console.log(palindrome('meatball'));