// const value = "42px";
// const numericalValue = parseInt(value);
// console.log (numericalValue);

// function calculateArea(width, height) {
//     const res = width * height;
//     return res;
// }
 
// console.log(calculateArea(5, 10));
// console.log(calculateArea(3, 7));
// function isAdult(age) {
//     const comp = age >= 18;
//     return comp;
// }
// console.log(isAdult(20));
// console.log(isAdult(15));
// function formatMessage(name, age) {
// return `Hello, my name is ${name} and I am ${age} years old.`

// }

// console.log(formatMessage("Alice", 25));
// console.log(formatMessage("Bob", 30));
// const word = "Helo";
// const firstLetter = word[0];
// const lastLetter = word[word.length - 1];
// console.log(firstLetter);
// console.log(lastLetter);
// function checkAccess(subType) {
//     return subType === vip || subType === pro;

// }

// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

// function createArrayOfNumbers(min, max) {
//   const arrayOfNumbers = [];
//   for(let i = min; i <= max; i++) {
//     arrayOfNumbers.push(i);
//       }
//   return arrayOfNumbers;
// }


// console.log(createArrayOfNumbers(1, 3)) //повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)) //повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)) //повертає [29, 30, 31, 32, 33, 34]

// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
// //   const lastElement = array[lastElementIndex];

//   return [lastElementIndex, array[lastElementIndex]];

// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]))
// console.log(getLastElementMeta(["apple", "peach", "pear"]))
// console.log(getLastElementMeta(["apple", "peach"]))
// console.log(getLastElementMeta(["apple"]))



// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (let i = 0; i < order.length; i += 1) {
//         sum += order[i];
//     }
//     return sum;

// }
// console.log(calculateTotalPrice([12, 85, 37, 4])) //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) //повертає 1116

// function getEvenNumbers(start, end) {
//     const parni = [];
//     for (let i = start; i <= end; i += 1) {
        
//         if (i % 2 === 0) {
//             parni.push(i);
//         }

//     }
//         return parni;
// }
// console.log(getEvenNumbers(2, 5)) //повертає [2, 4]
// console.log(getEvenNumbers(3, 11)) //повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)) //повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)) //повертає [8]
// console.log(getEvenNumbers(7, 7)) //повертає []

// ................................................................................................
// function checkStorage(storage, item) {
//     const lowerItem = item.toLowerCase();
//     if (storage.includes(lowerItem)) {
//     return `${lowerItem} is available to order!`
//     }
//     else {
//         return "Sorry! We are out of stock!"
//     }
// }


// console.log(checkStorage(["apple", "plum", "pear"], "plum")) //повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")) //повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear")) //повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")) //повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")) //повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")) //повертає "Sorry! We are out of stock!"

// *! ..................................................................................

// function getCommonElements(array1, array2) {
//     const newArray = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             newArray.push(array1[i]);
//         }
//     }
// return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])) // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає []
// console.log(getCommonElements()) // з випадковими двома масивами повертає правильний масив
// // *! ..................................................................................
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//     // break;
// //   console.log(planet);
// // }

// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (const item of order) {
//         sum += item;
//     }
//             return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116
// console.log(calculateTotalPrice([])) // повертає 0


// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);

// function createReversedArray() {
// const reversedArray = Array.from(arguments);
//     return reversedArray.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)) //повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)) //повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)) //повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray()) //повертає []
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
    
//   }
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.phone;
// const ownerEmail = apartment.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// country: "Jamaica",
// city: "Kingston"
// };
// console.log(apartment);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);


// *! ..................................................................................


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//     keys.push(key);
//         values.push(apartment[key]);
        
// };
// console.log(values);
// *! ..................................................................................

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
  
// };
// console.log(values);
// console.log(keys);

// *! ..................................................................................


// function countProps(object) {
// //   let propCount = 0;

// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }
//     const propCount = Object.keys(object);
//   return propCount.length;
// };



// console.log(countProps({ name: "Mango", age: 2 })) //повертає 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })) //повертає 3
// *! ..................................................................................

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const valuesTotal = Object.values(salaries);
//     for (const value of valuesTotal) {
//         totalSalary += value;
//     }
//     return totalSalary;
// };

// console.log(countTotalSalary({})) //повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })) // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

// *! ..................................................................................

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);

// }
//   console.log(hexColors);
  

//   const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }
// *! ..................................................................................

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

  
//   for (const productObject of products){
//       if (productObject.name === productName) {
//           return productObject.price;
//       }
//     }
//     return null;

// }
// console.log(getProductPrice("Radar")) //повертає 1300.
// console.log(getProductPrice("Grip")) //повертає 1200.
// console.log(getProductPrice("Scanner")) //повертає 2700.
/// *! ..................................................................................
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//     const findvalue = [];
//     for (const item of products) {
//         if (item[propName] !== undefined) {
//             findvalue.push(item[propName]);
//         }

//     }
//             return findvalue;
// }
// console.log(getAllPropValues("name")) // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")) // повертає [4, 3, 7, 9]
// console.log(getAllPropValues("price")) // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")) // повертає []

// *! ..................................................................................

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }

//     }
//         return `Product ${productName} not found!`
// }
// console.log(calculateTotalPrice("Blaster")) // повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")) // повертає 5200
// console.log(calculateTotalPrice("Droid")) // повертає 2800
// console.log(calculateTotalPrice("Grip")) // повертає 10800
// console.log(calculateTotalPrice("Scanner")) // повертає 8100


// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     }
// }
// console.log(atTheOldToad.getPotions()) // повертає рядок "List of all available potions"

// console.log(atTheOldToad.addPotion("Invisibility")) // повертає рядок "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")) // повертає рядок "Adding Power potion"

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(potionName) {
//         this.potions.push(potionName);
//   },
// };


// console.log(atTheOldToad.getPotions()) // повертає поточне значення властивості potions
// console.log(atTheOldToad.addPotion("Invisibility")) //, у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.addPotion("Power potion")) //, у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility", "Power potion"]
// console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//     getTotalPrice() {
//         let totalPrice = 0;
//         for (const potion of this.potions) {
//             totalPrice += potion.price;
//         }
//             return totalPrice;
//     },

// };

// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))
// console.log(atTheOldToad.getTotalPrice())

// const styles = [
//     "jazz" , "blues"
// ]
// styles.push ('rock-n-roll');
// console.log(styles);
// const bluesIndex = styles.indexOf("blues");
// console.log(bluesIndex);
// styles[bluesIndex] = "classic";
// console.log(styles);
//    function logItems(array) {
//     for (let i=0; i<array.length; i++) {
// console.log(`${i+1}-${array[i]}`);

//     }
//    }
// logItems(styles);


   // Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".



// function checkLogin(array) {

//     const userName = prompt("Введіть ім'я");
//     for (const login of array) {
//         if (login === userName) {
//             alert(`Welcome, ${userName}!`);
//             return;
//         }
//     }
//     alert("User not found");
// }
// const logins = ["Peter", "John", "Igor", "Sasha"];
// console.log(checkLogin(logins))


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     let avarrage = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === "number") {
//             avarrage += arg;
//             count += 1;
//         }

//     }
//             return avarrage / count;
// }
// console.log(caclculateAverage(5, 6, 7, 8, 9, 10,"jkhjkk"));

// *! ..................................................................................

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of


// *! ..................................................................................
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };
  
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// // const value = Object.values(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
    
// }



// console.log(user.name);
// console.log(user["name"]);




// console.log(keys);
// console.log(value);

// *! ..................................................................................

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  

// let sum = 0;
// const salary = Object.values(salaries);
// for (let i = 0; i < salary.length; i++) {
//     sum += salary[i];
// }
// console.log(sum);

// *! ..................................................................................

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// function calcTotalPrice(fruits, fruitName) {
//     let sum = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             sum += fruit.price * fruit.quantity;
//         }
//     }
//         return `${fruitName}: ${sum}`
//     }


// console.log(calcTotalPrice(fruits, "Яблуко"));
// console.log(calcTotalPrice(fruits, "Банан"));
// console.log(calcTotalPrice(fruits, "Виноград"));
// console.log(calcTotalPrice(fruits, "Апельсин"));
// *! ..................................................................................

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//                             return newName;
//             }
//         }
//     },

// };



// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))//, у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth")) // у властивості potions буде масив [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]
// *! ..................................................................................

// function add(...args) {
//   let sum = 0;
//   for(const num of args) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(add(15, 27)) // повертає 42
// console.log(add(12, 4, 11, 48)) // повертає 75
// console.log(add(32, 6, 13, 19, 8)) // повертає 78

// *! ..................................................................................
// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму


// function addOverNum(value, ...args) {
//     let totalSum = 0;
//     for (const num of args) {
//         if (num > value) {
//             totalSum += num;
//         }
//     }
//     return totalSum;
// }

// console.log(addOverNum(50, 15, 27)) // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)) // повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)) // повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)) //) повертає 218

// *! ..................................................................................
// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().



function getExtremeScores(scores) {
        const best = Math.max(...scores);
        const worst = Math.min(...scores);

    return { best, worst };
    }






console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])) //повертає об'єкт { best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])) // повертає об'єкт { best: 81, worst: 4 }