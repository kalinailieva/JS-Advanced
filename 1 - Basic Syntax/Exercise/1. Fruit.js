function fruitCalculate(fruit, weight, price){
    let weightInKilo = weight/1000;
    let moneyNeeded = weightInKilo*price;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}
fruitCalculate('orange', 2500, 1.80);