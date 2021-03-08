function squareOfStars(n){
    if(typeof(n) !== 'undefined'){
        for(let i =0; i <n; i++){
            let result = "";
            for(let k =0; k <n; k++){
                result += '* ';
            }
            console.log(result);
        }
    }else{
        for(let i =0; i <5; i++){
            console.log("* * * * *")
        }
    }
    
}
squareOfStars(8);