за числа
let arr = [2,7,9,77,1,55,4];
//възходящ ред
arr.sort((a,b) => a -b);
//нисходящ ред
arr.sort((a,b) => b - a);

за стрингове
let arr = ['Kiro', 'Pesho', 'Mimi'];
arr.sort((a,b) => a.localCompare(a - b));
arr.sort((a,b) => a.localCompare(b - a));
