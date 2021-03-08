function solve(input){
let data = input
.map(x => x.split('|')
.filter(x=> x!='')
.map(x=>x.trim()));

let properties = data.shift();
let result = [];

data.forEach(row => {
    let town = { //това е името на целия обект, който държи данни
        [properties[0]]: row[0],
        [properties[1]]: Number(Number(row[1]).toFixed(2)),
        //.toFixed връща стринг
        //Number прави стринга в число, като отрязва ненужните нули отзад
        [properties[2]]: Number(Number(row[2]).toFixed(2)),
    
    }
    result.push(town);//вкарай обекта в масива
});
console.log(JSON.stringify(result));
//масив от обекти не може да се разпечата, но ако поискаме конкретен обект
//от масива, ще се намери начин да се разпечата някак си
//JSON прави обекта видим, превръща го в стринг
};
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);