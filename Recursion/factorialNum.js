// Write a recursive function fact(n) that returns the factorial of a number n.

const factorialNum = (n) => {
    if(n == 0 || n == 1) return 1;
    return n * factorialNum(n - 1);
}

console.log(factorialNum(5));

//time complexity -> O(n)
//space complexity => O(n) (due to call stack in recursion)