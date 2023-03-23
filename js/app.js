'use strict';
console.log('js connected');



let storeTable = document.getElementById('cookieSales-table');

function Locations(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let seattleStore = new Locations('Seattle', 23, 65, 6.3);
let tokyoStore = new Locations('Tokyo', 3, 24, 1.2);
let dubaiStore = new Locations('Dubai', 11, 38, 3.7);
let parisStore = new Locations('Paris', 20, 38, 2.3);
let limaStore = new Locations('Lima', 2, 16, 4.6);

let allStores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
console.log('🚀 ~ file: app.js:242 ~ allStores:', allStores);


// add prototype function
Locations.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(randomCust(this.minCust, this.maxCust) * this.avgCookies);
  }
};



//helper function
function randomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}



// add table

let tableHead = document.createElement('tr');
storeTable.appendChild(tableHead);
let tableLocationHead = document.createElement('th');
tableHead.appendChild(tableLocationHead);

for (let i = 0; i < hours.length; i++) {
  let tableHours = document.createElement('th');
  tableHours.textContent = hours[i];
  tableHead.appendChild(tableHours);
}

let tableTotal = document.createElement('th');
tableTotal.textContent = 'Locations';
tableLocationHead.appendChild(tableTotal);



// add second prototype
Locations.prototype.storeInfo = function () {
  this.cookiesSold();
  let locationRow = document.createElement('tr');
  storeTable.appendChild(locationRow);
  let locationHead = document.createElement('th');
  locationHead.textContent = this.storeName;
  locationRow.appendChild(locationHead);

  for (let i = 0; i < hours.length; i++) {
    this.totalDailyCookies += this.cookiesPerHour[i];
    let locationCell = document.createElement('td');
    locationCell.textContent = this.cookiesPerHour[i];
    locationRow.appendChild(locationCell);
  }
};





Locations.prototype.render = function(){
  let parentElement = document.getElementById('cookieSales');
  console.log('🚀 ~ file: app.js:264 ~ parentElement:', parentElement);


  let tableFooter = document.createElement('tfoot');
  console.log('🚀 ~ file: app.js:286 ~ tableFooter:', tableFooter);
  let footerRow = document.createElement('tfoot');
  tableFooter.appendChild(footerRow);


  let grandTotal = 0;

  let hourlyTotal = 0;
  for (let i = 0; i < hours.length; i++) {

    console.log(allStores);
    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal = hourlyTotal + allStores[j].cookiesPerHour[i];
      console.log('🚀 ~ file: app.js:299 ~ hourlyTotal:', hourlyTotal);
      grandTotal += hourlyTotal;
    }
  }

  let hourlyTotalTd = document.createElement('td');
  hourlyTotalTd.textContent = hourlyTotal;

  let lastRow = document.createElement('td');
  lastRow.textContent = this.totalDailyCookies;
  tableFooter.appendChild(lastRow);

  let grandTotalRow = document.createElement('td');
  grandTotalRow.textContent = grandTotal;
  tableFooter.appendChild(grandTotalRow);

};


seattleStore.storeInfo();
tokyoStore.storeInfo();
dubaiStore.storeInfo();
parisStore.storeInfo();
limaStore.storeInfo();


// for (let i =0; i<allStores.length; i++){
//   allStores[i].render();
// }
