// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.

const sumOfFirstNNumbers = (n) => {
    if(n == 0) return 0;
    return n + sumOfFirstNNumbers(n - 1);
}

console.log(sumOfFirstNNumbers(10));

//time complexity -> O(n)
//space complexity => O(n) (due to call stack in recursion)


// let sum = 0;
// for (let i = n; i > 0; i--) {
//     sum = sum + i;
// }
// console.log(sum)
//time complexity -> O(n)
//space complexity => O(1)