'use strict';

let footerTotals = document.getElementById('footerTotals');
let tableBody = document.getElementById('tableData');
let tableHeadRowElement = document.getElementById('tableHead');
let storeTable = document.getElementById('cookieSales-table');
let form = document.getElementById('store-form');
let allStores = [];
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Locations(storeName, minCust, maxCust, avgCookies) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalDailyCookies = 0;
  this.cookiesPerHour = [];
  allStores.push(this);
}

Locations.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(
      randomCust(this.minCust, this.maxCust) * this.avgCookies
    );
  }
};

function randomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function createTableHeader(){
  let tableHeadRow = document.createElement('tr');
  let tableLocationHead = document.createElement('th');
  tableLocationHead.textContent = 'Locations';
  tableHeadRow.appendChild(tableLocationHead);
  storeTable.appendChild(tableHeadRow);
  for (let i = 0; i < hours.length; i++) {
    let tableHours = document.createElement('th');
    tableHours.textContent = hours[i];
    tableHeadRow.appendChild(tableHours);
  }
  let headingTotalTop = document.createElement('th');
  headingTotalTop.textContent = ('Total');
  tableHeadRow.appendChild(headingTotalTop);
  tableHeadRowElement.appendChild(tableHeadRow);
}
createTableHeader();

Locations.prototype.storeInfo = function () {
  this.cookiesSold();
  let locationRow = document.createElement('tr');
  let locationHead = document.createElement('th');
  locationHead.textContent = this.storeName;
  locationRow.appendChild(locationHead);
  this.totalDailyCookies = 0;
  console.log('total daily cookies: ',this.totalDailyCookies);
  for (let i = 0; i < hours.length; i++) {

    this.totalDailyCookies += this.cookiesPerHour[i];

    let locationCell = document.createElement('td');
    locationCell.textContent = this.cookiesPerHour[i];
    locationRow.appendChild(locationCell);
  }
  let headingTotal = document.createElement('td');
  headingTotal.textContent = this.totalDailyCookies;
  locationRow.appendChild(headingTotal);
  tableBody.appendChild(locationRow);
};


//rendering TABLE FOOTER
Locations.prototype.render = function () {
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
    // console.log('totals from each store by hour',hourlyTotalTd);
    footerRow.appendChild(hourlyTotalTd);
  }
  console.log('gggggggg',grandTotal);
  let grandTotalRow = document.createElement('td');
  grandTotalRow.textContent = grandTotal;
  footerRow.appendChild(grandTotalRow);
  footerTotals.appendChild(footerRow);

};



function renderAllStores(){
  //keeps the table from render another table
  tableBody.innerHTML = '';
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].storeInfo();
  }
  //keeps the table footer from rendering twice
  footerTotals.innerHTML = '';
  Locations.prototype.render();
}

//Location();
new Locations('Seattle', 23, 65, 6.3);
new Locations('Tokyo', 3, 24, 1.2);
new Locations('Dubai', 11, 38, 3.7);
new Locations('Paris', 20, 38, 2.3);
new Locations('Lima', 2, 16, 4.6);






renderAllStores();






// function for form
function submitForm(event){
  event.preventDefault();
  event.stopPropagation();

  // name
  let storeNameInput = document.getElementById('storeName').value;
  console.log(storeNameInput);

  let minCustInput = document.getElementById('minCust');
  let minCustValue = parseInt(minCustInput['value']);
  let maxCustInput = document.getElementById('maxCust');
  let maxCustValue = parseInt(maxCustInput['value']);
  let avgCookiesInput = document.getElementById('avgCookies');
  let avgCookiesValue = parseInt(avgCookiesInput.value);


  new Locations(storeNameInput, minCustValue, maxCustValue, avgCookiesValue);

  renderAllStores();
  form.reset();
}


form.addEventListener('submit', submitForm);



