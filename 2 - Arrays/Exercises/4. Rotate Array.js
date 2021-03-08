function solve(array) {

    let rotation = Number(array.pop())% array.length;
    for (let i = 0; i < rotation; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }
    console.log(array.join(' '));
};
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']

);