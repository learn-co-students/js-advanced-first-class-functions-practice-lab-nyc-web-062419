// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(d) {
    console.log(d.name);
  });
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(d) {
    if (d.hometown === town) {
      console.log(d.name);
    }
  });
}

let driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.revenue - d2.revenue;
  });
};

let driversByName = function(drivers) {
  return drivers.slice().sort(function(d1, d2) {
    return d1.name.localeCompare(d2.name);
  });
};

let totalRevenue = function(drivers) {
  return drivers.reduce(function(total, d) {
    return d.revenue + total;
  }, 0);
};

function averageRevenue(drivers) {
  let total = totalRevenue(drivers);
  return total / drivers.length;
}
