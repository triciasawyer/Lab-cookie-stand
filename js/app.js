'use strict';
console.log('js connected');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log('🚀 ~ file: app.js:5 ~ hours:', hours);

let storeOne = {
  storeName: 'Seattle',
  hourlyTotal: [],
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  avgCustomer: 0,
  cookiesPerHour: [],
  setCookies:function(){
    for (let i = 0; i < hours.length; i++){
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
};


function randomCustomer(minCust, maxCust){
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
//   hourlyTotal: [],
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//}

//let storeThree = {
//   storeName: 'Dubai',
//   hourlyTotal: [],
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//}

//let storeFour = {
//    storeName: 'Paris',
//    hourlyTotal: [],
//    minCust: 20,
//    maxCust: 38,
//    avgCookies: 2.3,
//}

//let storeFive = {
//   storeName: 'Lima',
//   hourlyTotal: [],
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//}

//helper function

//function getHourlyCookieSales(minCust, manCust) {

//}

storeOne.setCookies();
console.log('🚀 ~ file: app.js:74 ~ storeOne:", storeOne');


//storeTwo.
//storeThree.
//storeFour.
//storeFive.
