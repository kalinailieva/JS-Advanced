function solve(input){
let catalogue = [];

input.forEach(line => {
    let [name,price] = line.split(' : ');
    price = Number(price);
    let firstLetter = name[0];
    let product = {name, price};
    if (!catalogue[firstLetter]) {
        catalogue[firstLetter] = [];
    }
        catalogue[firstLetter].push(product);
});

let sortedCatalog = catalogue.sort();
let keys = Object.keys(sortedCatalog).sort();
for (const letter of keys) {
    console.log(letter);
console.log(catalogue[letter].name)
}


// Object.keys(catalogue)
// .sort().forEach(x=>{
//     console.log(x);
    
// })

};
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);