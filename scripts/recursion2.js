// simple countdown recursion algorithm

const countDownRecursive = (n) => {
    // return and exit recursion when condition is met to prevent infinite loop
    if (n <= 0) {
        console.log('Hooray')
        return;
    }

    console.log(n);
    countDownRecursive(n - 1);
}

console.log(countDownRecursive(3));

//
//  countDownRecursive(3)
//      countDownRecursive(2)
//          countDownRecursive(1)
//              countDownRecursive(0)
//              return
//          return
//      return
//  return