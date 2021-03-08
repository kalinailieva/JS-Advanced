function roadRadar(array){
let currentSpeed = array[0];
let areaType = array[1];

const MOTORWAY_LIMIT = 130;
const INTERSTATE_LIMIT = 90;
const CITY_LIMIT = 50;
const RESIDENTIAL_LIMIT = 20;

let currentLimit = 0;
switch (areaType) {
    case 'motorway':
        currentLimit = MOTORWAY_LIMIT;
        break;
    case 'interstate':
        currentLimit = INTERSTATE_LIMIT;
        break;
    case 'city':
        currentLimit = CITY_LIMIT;
        break;
    case 'residential':
        currentLimit = RESIDENTIAL_LIMIT;
        break;
};
let result = '';
if (currentSpeed > currentLimit + 40) {
    result = 'reckless driving ';
}else if (currentSpeed > currentLimit + 20 && currentSpeed <= currentLimit + 40 ){
    result = 'excessive speeding ';
}else if (currentSpeed > currentLimit && currentSpeed <= currentLimit + 20) {
    result = 'speeding';
};
console.log(result);
};
roadRadar([200, 'motorway']);