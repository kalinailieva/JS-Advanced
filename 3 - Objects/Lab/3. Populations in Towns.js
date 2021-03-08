function solve(input){
let register = {};
let data = input.map(x=> x.split(' <-> '));
for (const row of data) {
    let city = row[0];
    let number = Number(row[1]);
    if (register[city] == undefined) {
        register[city] = number;
    }else{
        register[city] += number;
    }
}
for (const key in register) {
console.log(`${key} : ${register[key]}`);
}

};
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);