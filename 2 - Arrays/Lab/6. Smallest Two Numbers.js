function solve(array){
let firstMinNumber = Number.MAX_SAFE_INTEGER;
let secondMinNumber = Number.MAX_SAFE_INTEGER;

for(let i = 0; i <= array.length; i++){
if (array[i] < firstMinNumber) {
    firstMinNumber = array[i];
}
}
let firstIndex = array.indexOf(firstMinNumber);
array.splice(firstIndex,1);
if (array.length > 0 ){
    for(let i = 0; i <= array.length; i++){
        if (array[i] < secondMinNumber) {
            secondMinNumber = array[i];
        }
        }
    console.log(firstMinNumber + ' ' + secondMinNumber);
}else{
    console.log(firstMinNumber);
}

};
solve([30, 15, 50, 5]);