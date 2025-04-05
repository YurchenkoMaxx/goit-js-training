// let userInput = prompt("введи число");
// console.log(userInput);
// userInput = Number(userInput);


// if (userInput === 10) {
//     alert("Вірно");
// }
// else {
//     alert("Невірно");
// }

// const isAdult = confirm("Чи є вам 18 років?");
// console.log(isAdult);


// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min >= 0 && min <= 15) {
//     alert(`${min} йде в першу чверть`);
// }
// else if (min > 15 && min <= 30) {
//     alert(`${min} йде в другу чверть`);
// }
// else if (min > 30 && min <= 45) {
//     alert(`${min} йде в третю чверть`);
// }
// else {
//     alert(`${min} йде в четверту чверть;`)
// }

// let userInput = prompt("Ведіть число від 1-4");
// console.log(userInput);
// userInput = Number(userInput);

// switch (userInput) {
//     case 1:
//         alert("Зима");
//         break;
//     case 2:
//         alert("Весна");
//         break;
//     case 3:
//         alert("Літо");
//         break;
//     case 4:
//         alert("Осінь");
//         break;

//     default:
//         alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно");
// }

// let count = 0;
// while (count <= 20) {
//     console.log(`count: ${count}`);
//     count += 1;
    
// }

// function getNumbers (min, max) {
// let sum=0
//     for (let i = max; i >= min; i--){
// console.log(i);
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// const result1 = getNumbers(2, 10);
// console.log( `Сума чисел ${result1}`);

// console.log(getNumbers (0, 15));


function min(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return 'Not a number!';
    }
    return a < b ? a : b;

    

    // if (a < b) {
    //     return a;
    // }

    // else {return b;}

}
console.log(min(2 ,15));
