// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

const isPowerOfTwo = (n) => {
    if(n == 1) return true;
    else if(n < 1 || n % 2 != 0) return false;
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(1024));

// Time Complexity: O(log n)
// Space Complexity: O(log n) (due to recursion stack)