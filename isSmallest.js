// Find the smallest number in an array

const array = [2, 5, 3, 4, 1] // 1
let smallest = array[0]; // 1

for (let i = 0; i < array.length; i++) { // 1
    console.log('Running') // 5
    if (array[i] < smallest) {
        console.log('Running inside') // 5
        smallest = array[i];
    }
    
}
console.log(smallest); // 1

// T = 1 + 1 + 1 + n + n + 1