function solve(array) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    let result = [];
    array.forEach((element, i) => {
        if (element >= biggestNumber) {
            result.push(element);
            biggestNumber = element;
        }
    });
    result.forEach(element => {
        console.log(element);
    })
    
};
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
);