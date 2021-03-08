function solve(input){
let register = [];

input.forEach(row => {
    let [name, level, items] = row.split(' / ');
    level = Number(level);
    items = items !== undefined ? items.split(', ') : [];
    let hero = {name,level,items};
    register.push(hero);
});
console.log(JSON.stringify(register));
};
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);