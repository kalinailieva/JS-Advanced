//AGREGATION - свежда много обекти до по малко, по признак
//масив с уникални ID или Names или друго
//ще ползваме reduce, обаче ще ги сведе до масив пак
// let students = [{id: 'a', score:1}, {id = 'b', score: 3},
// {id: 'a', score:4}];

// function aggregate(acc, currentStudent){//acc се явява целия масив
// // let student = acc.find(x => x.id == currentStudent.id)
// //     if (student) {
// //         student.score += currentStudent.score;
// //     }else{
// //         acc.push(currentStudent)
// //     }
// // }
//     return acc;//всеки път връща акумул, за да се изпълни пак

    //*********************
    //CONCATENATE - взема масив от обекти, които са обаче различни
    //и ги събира в едно според критерия на име, а стойностите
    //се презаписват !НИЩО НЕ РАЗБРАХ ТУК
    let obj = [
        {name: 'Peter', age: 22},
        {name: 'Simeon'},
        {age:16},
        {typeCar: 'Lada'}
    ];
    let concatenate = (a,o) =>({...a, ...o});
    let summaryObject = obj.reduce(concatenate, {});
    console.log(summaryObject);//{name: 'Simeon', age: 16, typeCar: 'Lada'}
//ИЛИ
let person = obj.reduce((acc,x) =>{
    return{...acc,...x};//= Object.assign({},acc,x);
},{})//и накрая върни резултата в обект

