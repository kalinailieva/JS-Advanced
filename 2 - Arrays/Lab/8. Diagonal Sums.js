function solve(matrix){
let sumFirstDiagonal = 0;
let sumSecondDiagonal = 0;
let elementIndex = 0;

matrix.forEach((row, i) => {
    sumFirstDiagonal +=row[elementIndex];
    sumSecondDiagonal += row[row.length-1 - elementIndex ];
    elementIndex++;
});

console.log(sumFirstDiagonal + ' ' + sumSecondDiagonal);


}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );