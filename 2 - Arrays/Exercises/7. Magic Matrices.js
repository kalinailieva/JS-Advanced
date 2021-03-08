function solve(matrix){
    let isMagic = true;
for(let i = 0; i < matrix.length; i++){
    let sumRow = matrix[i].reduce((acc,curr)=> acc + curr);
    let sumCol = 0;
    
    for (const row of matrix) {
        sumCol += row[i];       
    }
    if (sumRow !== sumCol) {
        isMagic = false;
        break;
    }
}
console.log(isMagic);

};
solve([[4, 5, 22],
    [6, 4, 4],
    [5, 5, 6]]
   );
