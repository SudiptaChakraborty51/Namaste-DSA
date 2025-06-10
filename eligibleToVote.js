const eligibleToVote = (age) => {
    if(age < 0) return "Invalid Input";
    return age > 18 ? "Eligible to vote" : "Not eligible to vote";
}

console.log(eligibleToVote(54));