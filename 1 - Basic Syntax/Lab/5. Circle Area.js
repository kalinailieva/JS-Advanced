function circleArea(someInput){
    var type = typeof(someInput);
    if(type == 'number'){
        let area = Math.PI * someInput*someInput;
        console.log(area.toFixed(2));

    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
circleArea(5==6);