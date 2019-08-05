// Code your solution in this file!
function logDriverNames(drivers){
  return drivers.forEach(function(driver){
    console.log(driver.name);
  }); 
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if(driver.hometown === location)
     console.log(driver.name);
 });
}

function driversByRevenue(drivers){
 const newDrivers = [... drivers];

  return newDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

function driversByName(drivers){
  const newDrivers = [... drivers];

  return newDrivers.sort(function(driverA, driverB){
    return driverA.name.localeCompare(driverB.name);
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function(total, driver){
    return total + driver.revenue;
  }, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length; 
}