// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo']

function returnFirstTwoDrivers(){
   return (drivers.slice(0,2))
}

function returnLastTwoDrivers(){
    return (drivers.slice(2,length[-1]))
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// const createFareMultiplier= num => {
//     const fareMultiplier = fare => num  * fare;
//     return fareMultiplier;
// }

// return function createFare()

function createFareMultiplier(num){
    return function fareMultiplier(fare){
        return fare * num;
    }
}
function fareDoubler(fare){
    return (fare * 2)
}

function fareTripler(fare){
    return (fare *3)
}
    
// function createFareMultiplier (num) {
//     return function fareMultipler(fare) {
//          return fare * num;
//      } 
//  }


function selectDifferentDrivers(drivers,fn ){
    return fn(drivers)
}

    