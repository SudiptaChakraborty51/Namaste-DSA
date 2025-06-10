let n = 5;
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j <= i; j++) {
        row = row + (i+1) + " ";
    }
    console.log(row);
}

// Time Complexity: O(n²)
// Space Complexity: O(n) — for the temporary row string