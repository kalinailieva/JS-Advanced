function solve(array){
    let result = 0;
    let firstElement = Number(array.shift());
    let lastElement = 0;
    if (array.length > 0) {
        lastElement = Number(array.pop()); 
    }else{
        lastElement = firstElement;
    }
    result = firstElement + lastElement;    

console.log(result);
};
solve(['10']);