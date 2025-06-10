const isPalindromeNum = (n) => {
    let rev = 0;
    let nCopy = n;
    if(n < 0) return false;
    while(n > 0) {
        let rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }
    return rev === nCopy;
}

console.log(isPalindromeNum(1334331));

// Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
// Space Complexity: O(1) — Only a few variables are used.