function solve(array){
let negativeNumbers = [];
let positiveNumbers = [];
for (const number of array) {
    if (number < 0) {
        negativeNumbers.unshift(number);
    }else{
        positiveNumbers.push(number);
    }
}
let result = negativeNumbers.concat(positiveNumbers);
result.forEach(element => {
    console.log(element);
});
};
solve([3, -2, 0, -1]);