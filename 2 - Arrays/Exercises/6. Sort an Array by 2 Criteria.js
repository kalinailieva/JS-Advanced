function solve(input){
    //копираме масива с ... и не работим върху него
return [...input].sort((a,b) =>{
    return a.length-b.length || a.localeCompare(b);
}).join('\n');
};
console.log(solve(['alpha', 
'beta', 
'gamma']

));