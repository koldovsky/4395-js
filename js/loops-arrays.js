// Цикл з передумовою

// let counter = 42;
// while (counter <= 5) {
//     console.log(counter);
//     counter++;
// }

// Цикл з постумовою
// let counter = 42;
// do {
//     console.log(counter);
//     counter++;
// } while (counter <= 5);

// Цикл з лічильником
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// Задача: вивести парні числа, починаючи зі 100 і завершуючи 42
// for (let i = 100; i >= 42; i--) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Масиви

const cars = ['Mini Cooper', 'Toyota Rav4', 'Jeep Renegade'];
cars.push('Jeep Avenger', 'Tesla 3');
// console.log(cars.length);
// console.log(cars[3]);

// for (let i = 0; i < cars.length; i++) {
//     console.log(i, cars[i]);
// }

// for (const car of cars) {
//     console.log(car);
// }

// Поглиблена частина

// Цикли - break, continue - за можливості уникаємо
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     if (i === 3) break;
// }
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// cars.sort();
// cars.reverse();
// cars.forEach((el) => console.log(el));

const nums = [42, 4, 1234, 1, 199];
// nums.sort( (a, b) => b - a );
// console.log(nums);

// 3 важливі функції
// map - створює новий масив, викликавши функцію над кожним елементом
const doubleNums = nums.map(num => num * 2);
console.log(doubleNums);
// filter - фільтрує по функції
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);
// reduce - отримує одне значення, як результат виклику функції над всіма елементами
const total = nums.reduce( (acc, num) => acc + num );
console.log(total);

// додати на початок і забрати з початку
nums.unshift(33);
console.log(nums);
nums.shift();
console.log(nums);
// забрати з кінця - pop
nums.pop();
console.log(nums);
