function solve(x,y, operator){
    let result = eval(`${x} ${operator} ${y}`);
    console.log(result);

}
solve(5,10, '+');