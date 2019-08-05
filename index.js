// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function (driver) {console.log(driver.name)})
}

function logDriversByHometown (drivers, location) {
    drivers.filter(function(driver){return driver.hometown === location}).forEach(function(driver){console.log(driver.name)})
}

function driversByRevenue(drivers) {
    const newDrivers = drivers.slice()
    return newDrivers.sort(function(a,b){return a.revenue - b.revenue})
}

function driversByName(drivers){
    const newDrivers = drivers.slice()
    return newDrivers.sort(function(a,b) {return a.name.localeCompare(b.name);});
}

function totalRevenue (drivers){
    return drivers.reduce(function(a,b) {return a + b.revenue}, 0)
}

function averageRevenue (drivers){
    return drivers.reduce(function(a,b) {return a + b.revenue}, 0)/drivers.length
}