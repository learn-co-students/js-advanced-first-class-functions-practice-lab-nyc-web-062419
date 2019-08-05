function logDriverNames(drivers) {
  drivers.forEach(driver => {console.log(driver.name)});
}

function logDriversByHometown(drivers, location){
  drivers.forEach(driver => {
    if (driver.hometown == location) {
      console.log(driver.name);
    }    
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort((a,b) => (a.revenue > b.revenue) ? 1 : -1)
}

function driversByName(drivers){
  return drivers.slice().sort((a,b) => (a.name > b.name) ? 1 : -1)
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

function averageRevenue(drivers) {
  console.log(totalRevenue(drivers))
return  totalRevenue(drivers) / drivers.length
}


// const arrSum = arr => arr.reduce((a,b) => a + b, 0)
// arrSum([20, 10, 5, 10]) -> 45

