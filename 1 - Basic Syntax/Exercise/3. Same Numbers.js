function sameNumbers(number){
let numberArray = String(number).split("");
let firstDigit = numberArray[0];
let filteredNumbers = numberArray.filter(x => x!= firstDigit);
if(filteredNumbers.length==0){
    console.log(true);
}else{
    console.log(false); 
};

let sum = numberArray
    .map(Number)
    .reduce((a,b)=> a+b);
console.log(sum);
}
sameNumbers(2222222);
