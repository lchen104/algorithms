// Bubble Sort Algorithm

const sort = (arr) => {
    const newArr = [...arr];
    let temp = 0;
    // outer loop
    for (i = 0; i < newArr.length; i++) {
        
        // inner loop
        for (let j = i + 1; j < newArr.length; j++) {
            console.log('Running')
            // console.log(i + ':' + j);
            if (newArr[i] > newArr[j]) {
                temp = newArr[i]
                newArr[i] = newArr[j];
                newArr[j] = temp;
            } 
        }
    }
    return newArr;
}

const arr = [11, -3, 2, 9, 4, 5, 17, 8];
console.log(sort(arr));