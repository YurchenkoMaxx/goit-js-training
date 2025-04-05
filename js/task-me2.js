// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));
// *! ..................................................................................

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }


// console.log(makeMessage("Royal Grand", makePizza)) // повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)) // повертає рядок "Delivering Ultracheese pizza."

// *! ..................................................................................

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//      totalPrice += item;
//   });
 

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116

// *! ..................................................................................

// function filterArray(numbers, value) {
//   let filtered = [];
//   numbers.forEach(function (item) {
//     if (item > value) {
// filtered.push(item)
//     };
//   });
//   return filtered;
  
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3)) // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) // повертає [24, 41, 76]

// *! ..................................................................................

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }



// console.log(calculateTotalPrice(5, 100)) // повертає 500
// console.log(calculateTotalPrice(8, 60)) // повертає 480
// console.log(calculateTotalPrice(3, 400)) // повертає 1200

// *! ..................................................................................

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116

// *! ..................................................................................

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) // повертає [24, 41, 76]

// *! ..................................................................................

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return numbers;
// }
// *! ..................................................................................
// const changeEven = (numbers, value) => {
//   const newEven = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newEven.push(number + value);
//     } else { newEven.push(number) };
//   });

//   return newEven ;
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10)) // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)) // повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)) // повертає новий масив [144, 13, 81, 192, 136, 154]
// *! ..................................................................................


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// *! ..................................................................................

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);
// *! ..................................................................................

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
// *! ..................................................................................

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
// *! ..................................................................................

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// *! ..................................................................................
//

// *! ..................................................................................
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;

// }, 0);

// console.log(totalAveragePlaytimePerGame);


// *! ..................................................................................

// const calculateTotalBalance = (users) => {
//   const userBalance = users.reduce((acc, user) => {
//     return acc + user.balance;
    
//   }, 0);
// return userBalance;
// };
// console.log(calculateTotalBalance);
