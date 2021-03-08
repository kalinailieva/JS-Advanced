function solve(input){
    let inputFromJson = JSON.parse(input)
    let newObject = inputFromJson.reduce((a,x)=>Object.assign({},a,x,{});
console.log(newObject);
};
