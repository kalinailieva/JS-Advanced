function timeToWalk(steps, stepsLength, speed){
let distanceInMeters = steps * stepsLength;
let speedForMeterInSec = speed/3.60;
let rest = Math.floor(distanceInMeters/500);
let time = distanceInMeters/speedForMeterInSec + rest * 60;

let timeInHours = Math.floor(time/3600);
let timeInMin = Math.floor(time/60);
let timeInSec = Math.ceil(time % 60);

console.log(`${timeInHours <10 ? 0 : ''}${timeInHours}:${timeInMin <10 ? 0 : ''}${timeInMin}:${timeInSec <10 ? 0 : ''}${timeInSec}`)
};
timeToWalk(4000, 0.60, 5);