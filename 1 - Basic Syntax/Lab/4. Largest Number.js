function largestNumber(...numbers){
    let number = Math.max(...numbers);
    console.log(`The largest number is ${number}.`);
}
largestNumber(-3, -5, -22.5);