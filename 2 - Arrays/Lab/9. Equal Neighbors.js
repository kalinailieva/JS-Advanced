function solve(matrix) {
    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((element, elementIndex) => {
            if (element === row[elementIndex + 1]) {
                pairs++;
            }
            if (matrix[i + 1] && element === matrix[i + 1][elementIndex]) {
                //ако i+1 го няма, ще е undefined и няма да продължи
                pairs++;
            }
        })
    });
    console.log(pairs);
}