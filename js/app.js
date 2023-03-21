'use strict';
console.log('js connected');

let parentElement = document.getElementById('cookieProfiles');

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
  '8pm'];
//console.log('🚀 ~ file: app.js:5 ~ hours:', hours);

let storeOne = {
  storeName: 'Seattle',
  hourlyTotal: [],
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  //avgCustomer: 0,
  totalDailyCookies: 0,
  cookiesPerHour: [],
  setCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
  renderStoreData: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'These cookies are the best';
    article.appendChild(storeComment);
    let storeUl = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeLi = document.createElement('li');
      storeOne.totalDailyCookies += parseInt(storeOne.cookiesPerHour[i].split(' ')[1]);
      storeLi.textContent = storeOne.cookiesPerHour[i];
      storeUl.appendChild(storeLi);
    }
    article.appendChild(storeUl);
    const listItem = document.createElement('li');
    listItem.textcontent = 'Total: ' + storeOne.totalDailyCookies + ' cookies';
    console.log(listItem);
    article.appendChild(listItem);
  }
};

function randomCustomer(minCust, maxCust) {
  console.log('🚀 ~ file: app.js:18 ~ randomCustomer ~ randomCustomer:', randomCustomer);
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}





let storeTwo = {
  storeName: 'Tokyo',
  hourlyTotal: [],
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  // avgCustomer: 0,
  totalDailyCookies: 0,
  cookiesPerHour: [],
  setCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
  renderStoreData: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'These cookies are the best';
    article.appendChild(storeComment);
    let storeUl = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeLi = document.createElement('li');
      storeTwo.totalDailyCookies += parseInt(storeTwo.cookiesPerHour[i].split(' ')[1]);
      storeLi.textContent = storeTwo.cookiesPerHour[i];
      storeUl.appendChild(storeLi);
    }
    article.appendChild(storeUl);
    const listItem = document.createElement('li');
    listItem.textcontent = 'Total: ' + storeTwo.totalDailyCookies + ' cookies';
    console.log(listItem);
    article.appendChild(listItem);
  }
};




let storeThree = {
  storeName: 'Dubai',
  hourlyTotal: [],
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  //avgCustomer: 0,
  totalDailyCookies: 0,
  cookiesPerHour: [],
  setCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
  renderStoreData: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'These cookies are the best';
    article.appendChild(storeComment);
    let storeUl = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeLi = document.createElement('li');
      storeThree.totalDailyCookies += parseInt(storeThree.cookiesPerHour[i].split(' ')[1]);
      storeLi.textContent = storeThree.cookiesPerHour[i];
      storeUl.appendChild(storeLi);
    }
    article.appendChild(storeUl);
    const listItem = document.createElement('li');
    listItem.textcontent = 'Total: ' + storeThree.totalDailyCookies + ' cookies';
    console.log(listItem);
    article.appendChild(listItem);
  }
};



let storeFour = {
  storeName: 'Paris',
  hourlyTotal: [],
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  //avgCustomer: 0,
  totalDailyCookies: 0,
  cookiesPerHour: [],
  setCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
  renderStoreData: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'These cookies are the best';
    article.appendChild(storeComment);
    let storeUl = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeLi = document.createElement('li');
      storeFour.totalDailyCookies += parseInt(storeFour.cookiesPerHour[i].split(' ')[1]);
      storeLi.textContent = storeFour.cookiesPerHour[i];
      storeUl.appendChild(storeLi);
    }
    article.appendChild(storeUl);
    const listItem = document.createElement('li');
    listItem.textcontent = 'Total: ' + storeFour.totalDailyCookies + ' cookies';
    console.log(listItem);
    article.appendChild(listItem);
  }
};



let storeFive = {
  storeName: 'Lima',
  hourlyTotal: [],
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  //avgCustomer: 0,
  totalDailyCookies: 0,
  cookiesPerHour: [],
  setCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour[i] = hours[i] + ' ' + Math.floor(this.avgCookies * randomCustomer(this.minCust, this.maxCust));
    }
  },
  renderStoreData: function () {
    let article = document.createElement('article');
    parentElement.appendChild(article);
    let storeComment = document.createElement('p');
    storeComment.textContent = 'These cookies are the best';
    article.appendChild(storeComment);
    let storeUl = document.createElement('ul');
    for (let i = 0; i < hours.length; i++) {
      let storeLi = document.createElement('li');
      storeFive.totalDailyCookies += parseInt(storeFive.cookiesPerHour[i].split(' ')[1]);
      storeLi.textContent = storeFive.cookiesPerHour[i];
      storeUl.appendChild(storeLi);
    }
    article.appendChild(storeUl);
    const listItem = document.createElement('li');
    listItem.textcontent = 'Total: ' + storeFive.totalDailyCookies + ' cookies';
    console.log(listItem);
    article.appendChild(listItem);
  }
};






storeOne.setCookies();
storeOne.renderStoreData();
storeTwo.setCookies();
storeTwo.renderStoreData();
storeThree.setCookies();
storeThree.renderStoreData();
storeFour.setCookies();
storeFour.renderStoreData();
storeFive.setCookies();
storeFive.renderStoreData();
