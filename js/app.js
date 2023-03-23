'use strict';
console.log('js connected');

let storeTable = document.getElementById('cookieSales-table');

let hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

//Factory // Constructor Function
function Locations(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
}

//Location();
let seattleStore = new Locations('Seattle', 23, 65, 6.3);
let tokyoStore = new Locations('Tokyo', 3, 24, 1.2);
let dubaiStore = new Locations('Dubai', 11, 38, 3.7);
let parisStore = new Locations('Paris', 20, 38, 2.3);
let limaStore = new Locations('Lima', 2, 16, 4.6);

let allStores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

// add prototype function
Locations.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(
      randomCust(this.minCust, this.maxCust) * this.avgCookies
    );
  }
};

//helper function
function randomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

// add table
//create the table
let tableHead = document.createElement('tr');
let tableLocationHead = document.createElement('th');
tableLocationHead.textContent = 'Locations';
tableHead.appendChild(tableLocationHead);
storeTable.appendChild(tableHead);
for (let i = 0; i < hours.length; i++) {
  let tableHours = document.createElement('th');
  tableHours.textContent = hours[i];
  tableHead.appendChild(tableHours);
}

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
  //add the store totals for each store.
  let headingTotal = document.createElement('td');
  headingTotal.textContent = this.totalDailyCookies;
  locationRow.appendChild(headingTotal);
};

let headingTotalTop = document.createElement('th');
headingTotalTop.textContent = ('Total');
tableHead.appendChild(headingTotalTop);


Locations.prototype.render = function () {
  let parentElement = document.getElementById('footerTotals');

  let footerRow = document.createElement('tr');
  let totalTitle = document.createElement('th');
  totalTitle.textContent = 'Total';
  footerRow.appendChild(totalTitle);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal = hourlyTotal + allStores[j].cookiesPerHour[i];
    }
    grandTotal += hourlyTotal;
    let hourlyTotalTd = document.createElement('td');
    hourlyTotalTd.textContent = hourlyTotal;
    footerRow.appendChild(hourlyTotalTd);
  }
  let grandTotalRow = document.createElement('td');
  grandTotalRow.textContent = grandTotal;
  footerRow.appendChild(grandTotalRow);
  parentElement.appendChild(footerRow);
};


for (let i = 0; i < allStores.length; i++) {
  allStores[i].storeInfo();
}

Locations.prototype.render();



// function for form

function submitForm(event){
  event.preventDefault();
  console.log('The form was submitted!');
  event.stopPropagation();

  // name
  let storeName = event.target.name.value;
  let minCustInput = document.getElementById('minCust');
  let minCustValue = minCustInput['value'];
  let maxCust = document.getElementById('maxCust');
  let maxCustValue = maxCust.value;
  let avgCookiesInput = document.getElementById('avgCookies');
  let avgCookiesValue = avgCookiesInput.value;


  let newStore = new Store(storeName, minCustValue, maxCustValue, avgCookiesValue);
  newStore.getLocations();
  newStore
}



FormData.addEventListener('submit', submitForm);
