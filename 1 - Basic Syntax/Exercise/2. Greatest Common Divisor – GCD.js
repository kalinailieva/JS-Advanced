function GCD(num1, num2) {
    let minNumber = Math.min(num1, num2);
    let maxDelimer = 0;
    for (let i = minNumber; i >= 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            maxDelimer = i;
            break;
        }
    }
    console.log(maxDelimer);
}
GCD(2154, 458);
