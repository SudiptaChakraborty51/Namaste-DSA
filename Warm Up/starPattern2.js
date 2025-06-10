let n = 5;
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j <= i; j++) {
        row = row + "* ";
    }
    console.log(row);
}

// Time Complexity: O(n^2) because the total number of stars printed is 1 + 2 + ... + n = n(n+1)/2.
// Space Complexity: O(n) for the temporary string variable storing each row.