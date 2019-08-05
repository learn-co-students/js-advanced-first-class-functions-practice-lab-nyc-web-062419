// Code your solution in this file!

function logDriverNames(drivers) {
    return drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
    return drivers.filter(driver => driver.hometown === location).forEach(driver => console.log(driver.name))
}

function driversByRevenue(drivers)  {
    const new_drivers = [...drivers];
    return new_drivers.sort(function(driver1, driver2) {return (driver1.revenue - driver2.revenue)})
}

function driversByName(drivers) {
    const new_drivers = [...drivers];
    return new_drivers.sort(function(driver1, driver2) {return (driver1.name.localeCompare(driver2.name))})
}

function totalRevenue(drivers) {
    return drivers.reduce( (total, driver) => total += driver.revenue, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers)/drivers.length
}