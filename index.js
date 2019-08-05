// Code your solution in this file!
const logDriverNames = drivers =>
  drivers.forEach(driver => {
    console.log(driver.name);
  });
const logDriversByHometown = (drivers, town) =>
  drivers.forEach(driver => {
    if (driver.hometown === town) console.log(driver.name);
  });

const driversByRevenue = drivers =>
  [...drivers].sort(function(a, b) {
    return a.revenue - b.revenue;
  });
const driversByName = drivers =>
  [...drivers].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
const totalRevenue = drivers => drivers.reduce((a, b) => a + b.revenue, 0);
const averageRevenue = drivers =>
  drivers.reduce((a, b) => a + b.revenue, 0) / drivers.length;
