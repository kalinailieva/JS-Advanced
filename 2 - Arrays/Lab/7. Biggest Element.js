function solve(matrix){
    let biggestElement = Number.MIN_SAFE_INTEGER;
for (const row of matrix) {
    for (const col of row) {
        if (col > biggestElement) {
            biggestElement = col;
        }
    }
}
console.log(biggestElement);
};
solve([[20, 50, 10],
    [8, 33, 145]]
   );