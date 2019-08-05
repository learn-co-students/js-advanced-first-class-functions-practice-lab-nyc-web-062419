// Code your solution in this file!
function logDriverNames(arr) {
  arr.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(arr, hometown) {
  logDriverNames(arr.filter(driver => driver.hometown === hometown));
}

const driversByRevenue = function(arr) {
  return arr.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function(arr) {
  return arr.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function(arr) {
  return arr.reduce(function(acc, currentValue) {
    return acc + currentValue.revenue;
  }, 0);
};

const averageRevenue = function(arr) {
  return totalRevenue(arr) / arr.length;
};
