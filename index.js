// Code your solution in this file!

const logDriverNames = function(drivers) {
    drivers.forEach(function(driver) 
    {
        console.log(driver.name)
    })
}

const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers) {
    return drivers.slice().sort(function(driverA, driverB) {
        return driverA.revenue - driverB.revenue
    })
}

const driversByName = function(drivers) {
    return drivers.slice().sort(function(driverA, driverB) {
        return driverA.name.localeCompare(driverB.name)
    })
}

const totalRevenue = function(drivers) {
        return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
}, 0)
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length
}




// TotalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

// var numbers = [6, 2, 3];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc, 5);

// function myFunc(total, num) {
//   return  total + num;