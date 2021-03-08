function cookingByNumbers(array){
let number = Number(array[0]);
for(let i = 1; i < array.length; i++){
    let operation = array[i];
    switch (operation) {
        case 'chop':
            number = number /2;
            break;
        case 'dice':
            number = Math.sqrt(number);
            break;
        case 'spice':
            number = number +1;
            break;
        case 'bake':
            number = number * 3;
            break;
        case 'fillet':
            number = number - (number*20/100);
            break;
            
    }
    console.log(number);
}
};
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);