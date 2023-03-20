'use strict';
console.log('js connected');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log('🚀 ~ file: app.js:5 ~ hours:', hours);

let storeOne = {
  storeName: 'Seattle',
  minCust: '23',
  maxCust: '65',
  avgCust: '6.3',
  setCustomer: function () {
    for (let i = 0; i < hours.length; i++) {
      this.Customer = randomCustomer(23, 65) + ' Customers per hour.';
    }
  }
};

function randomCustomer(minCust, maxCust) {
  console.log('🚀 ~ file: app.js:18 ~ randomCustomer ~ randomCustomer:', randomCustomer);
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}






//for (let i = 0; i < storeOne.busHours.length; i++){
//    let storeLi = document.createElement('li');
//    storeLi.textContent = storeOne.busHours[i];
//    storeUl.appendchild(storeLi);
//}

//let storeTwo = {
//   storeName: 'Tokyo',
//    minCust: '3',
//    maxCust: '24',
//   avgCust: '1.2',
//}

//let storeThree = {
//    storeName: 'Dubai',
//   minCust: '11',
//   maxCust: '38',
//    avgCust: '3.7',
//}

//let storeFour = {
//    storeName: 'Paris',
//    minCust: '20',
//    maxCust: '38',
//    avgCust: '2.3',
//}

//let storeFive = {
//   storeName: 'Lima',
//   minCust: '2',
//   maxCust: '16',
//   avgCust: '4.6',
//}

//helper function

//function getHourlyCookieSales(minCust, manCust) {

//}

storeOne.Customers;
//storeTwo.Customers
//storeThree.Customers
//storeFour.Customers
//storeFive.Customers
