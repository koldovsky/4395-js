// Ключова слова для змінних:
// const - змінна, яку ми не модифікуємо
// let - змінна, яку ми маємо модифікувати
// var - застаріле, не використовуємо
// const messageForUser = 'Привіт, JavaScript!';
// alert(messageForUser);

const userAge = Number(prompt('Введіть ваш вік'));
console.log('Ваш вік', userAge);

const nextAge = sum(userAge, 1);
console.log('Наступний вік', nextAge);

// Типи даних
// String - текст '', "", ``
// Number - число 42, 42.42, -42, 4e20, Infinity, -Infinity, NaN
// Оператори: +, -, *, /, %
// Boolean - true, false
// undefined - не визначено
// null - пусто
// Object - об'єкт
// Не будемо вивчати на цьому курсі
// Symbol - не має відношення до тексту, унікальний ідентифікатор
// BigInt - великі цілі числа, криптографія і т.п.

if (userAge >= 18) { // <= > < === !== && ||
    console.log('Повнолітній');
} else {
    console.log('Неповнолітній');
}

function sum(a, b) {
    return a + b;
}