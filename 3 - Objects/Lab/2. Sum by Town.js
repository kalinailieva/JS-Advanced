function solve(input) {
let sum = {}; //това се явява обект, с проп имена на градове

for(let i = 0; i < input.length; i +=2){
    let town = input[i];
    let income = Number(input[i+1]);
    if (sum[town] == undefined) {
        sum[town] = income;
    }else{
        sum[town] += income;
    }
}
console.log(JSON.stringify(sum));
console.log(sum.Sofia) //25
console.log(sum['Sofia']); //25
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);