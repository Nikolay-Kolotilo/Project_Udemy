'use strict';
                //*****************
/*0:55. Метод filter() 
создаёт новый массив со всеми элементами,
прошедшими проверку, задаваемую в передаваемой функции.
Вернётся новый массив с элементами, которые прошли проверку. 
Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.
*/
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']; //2:00
//2: 40
const shortNames = names.filter(function (name) {
    return name.length < 5;  //Фильтр имен подлине имени 5
});
//4:35
console.log(shortNames);

                //***************
// 5:15 Метод MAP
const answers = ['IvAn', 'AnnA', 'Hello']; // 6:25 Получение имен без ошибок
const result = answers.map(item => item.toLocaleLowerCase());
//8:00
console.log(result);
// 8:40 перезапись в тотже массив, но из-за иммутабельности лучше так не делать
let answers = ['IvAn', 'AnnA', 'Hello']; // 6:25 Получение имен без ошибок
answers = answers.map(item => item.toLocaleLowerCase());
//8:50
console.log(answers);

                //********************                
// 9:45 Метод every/some
//some - перебирает массив и возвращает true если хоть один элемент подходит условию
//false если нет.
const some = [4, 'qwq', 'dfgfdhg'];
//10:50
console.log(some.some(item => typeof(item) === 'number')); //есть ли в массиве хоть одно число?
// 11:55 every - перебирает массив и возвращает true если все элементы подходит условию
//false если нет.
const some = [4, 'qwq', 'dfgfdhg'];
//12:10
console.log(some.every(item => typeof(item) === 'number')); //если все элементы числа?

                //********************                
// 13:50 Метод reduce - Сбор массива в одно единое целое
/*
Синтаксис
array.reduce(callback[, initialValue])
Параметры
callback
    Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента:
    accumulator
        Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
    currentValue
        Текущий обрабатываемый элемент массива.
    indexНеобязательный
        Индекс текущего обрабатываемого элемента массива.
    arrayНеобязательный
        Массив, для которого была вызвана функция reduce.
initialValueНеобязательный
    Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
*/
//14:20
const arr = [4, 5, 1, 3, 2, 6];
//             аргумент = 0;/ 2-й арг- элемент массива
const res = arr.reduce((sum, current) => sum + current);
//17:35
console.log(res); //=21
//18:10 Сбор массива из строк
const arr = ['apple', 'pear', 'plum'];
//             аргумент = 0;/ 2-й арг- элемент массива
const res = arr.reduce((sum, current) => `${sum}, ${current}`); //  Сложение методом интерполяции
//19:45
console.log(res); //=apple, pear, plum
//20:30 Редюс может принимать третий аргумент, которій может віступать начальным значением
const arr = [4, 5, 1, 3, 2, 6];
//             аргумент = 3;/ 2-й арг- элемент массива
const res = arr.reduce((sum, current) => sum + current, 3);// =24

                //********************           
// 21:35 Практический пример.
// 23:20  entries - Получение массива массивов (строк объекта)

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
// 23:25
const newArr = Object.entries(obj);
console.log(newArr);
// 24:50 Chaining Цепочка
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
// 23:25
const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')// Получаем массив персон (Людей).
    .map(item => item[0]);// Получаем массив имен (Людей).
console.log(newArr);

