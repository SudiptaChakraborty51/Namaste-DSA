const countDigits = (n) => {
    let count = 0;
    if(n === 0) return 1;
    n = Math.abs(n);
    while(n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(-1234));

// Time Complexity: O(log₁₀(n)) — Each division reduces one digit.
// Space Complexity: O(1) — Only a few variables are used.