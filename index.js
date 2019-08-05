// Code your solution in this file!
function logDriverNames(driver) {
    driver.forEach(function(element) {
        console.log(element.name);
      });
}
function logDriversByHometown(driver, town) {
    driver.forEach(function(element) {
        if (element.hometown === town) {
            console.log(element.name)
        }
    })
}
function driversByRevenue(driver) {
    let newArr = []
    driver.forEach(function(element) {
        newArr.push(element);
      });
    return newArr.sort(function (a, b) {
        return a.revenue - b.revenue;
      });
}

function driversByName(driver) {
    let newArr = []
    driver.forEach(function(element) {
        newArr.push(element);
      });
    return newArr.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;      });
}

function totalRevenue(driver) {
    return driver.reduce(function (accumulator, driver) {
        return accumulator + driver.revenue;
}, 0)
}

function averageRevenue(driver) {
    return totalRevenue(driver) / driver.length
}