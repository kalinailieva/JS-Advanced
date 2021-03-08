function calorieObject(array){
let result = [];
for(let i =0; i < array.length-1; i+=2){
let productInfo = ` ${array[i]}: ${array[i+1]}`;
result.push(productInfo);
}
let printResult = result.join(',');
console.log(`{${result} }`);

};
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);