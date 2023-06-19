// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  function createFareMultiplier(integer){
    return function (fare){
        return fare * integer;
    }
  } 
const fareDoubler = createFareMultiplier(2);
  function createFareMultiplier(integer){
    return function (fare){
        return fare * integer
    }
  }
  const fareTripler = createFareMultiplier(3);
    function createFareMultiplier(interger){
        return function (fare){
            return fare * interger
        }

    }
  function selectDifferentDrivers(drivers, driverSelector) {
    if (driverSelector === returnFirstTwoDrivers) {
      return driverSelector(drivers).slice(0, 2);
    } else if (driverSelector === returnLastTwoDrivers) {
      return driverSelector(drivers).slice(-2);
    } else {
      return [];
    }
  }

  



  

  
  