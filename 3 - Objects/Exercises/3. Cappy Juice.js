function solve(input){
let result = [];
let juicesInOrder = [];

input.forEach(line => {
    let [product, quantity] = line.split(' => ');

    if (!result[product]) {
        result[product] = Number(quantity);
    }else{
        result[product] += Number(quantity);
    }  
    if (result[product] >=1000) {
        let bottles = parseInt(result[product]/1000);
        if (!juicesInOrder[product]) {
            
            juicesInOrder[product] = bottles;
            
        }else{
            juicesInOrder[product] += bottles;
        }
        result[product] -= bottles * 1000;
    } 
});
Object.keys(juicesInOrder).forEach(x=>{
    console.log(`${x} => ${juicesInOrder[x]}`)
})

};
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)