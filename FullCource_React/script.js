const numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
    gradeOfLastFilm = +prompt('На сколько оцените его', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
    gradeOfLastFilm2 = +prompt('На сколько оцените его', '');
personalMovieDB.movies[lastFilm] = gradeOfLastFilm;
personalMovieDB.movies[lastFilm2] = gradeOfLastFilm2;

console.log(personalMovieDB);

console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 1 && 2 && 3 );
console.log(5 === 5 && 3 > 1 || 5);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
console.log(5 === 5 && 3 > 1 || 5);

// Задача - треугольник звездочек

    let brick = '';

for (let i = 0; i < 6; i++) {
    // brick = brick + '*';

    brick = brick + '*';
    console.log(brick);
}

// Упражнение по написанию кода 3: Задания на использование циклов и условий.
//     task #1
for (let j = 0; j < array.length; j++) {
        const element = array[j];
        index
}
    

let homeworkFirst = 4;
for (let i = 0; i <= 5; i++) {
    homeworkFirst++;
    console.log(homeworkFirst);
    }    
// Task #2
    let homeworkFirst = 21;
stopCycle: for (let i = 0; i < 11; i++) {
    homeworkFirst = homeworkFirst - 1;
    if (homeworkFirst == 13) break stopCycle;
    console.log(homeworkFirst);
    }  

// Task #3
let homeworkFirst = 0;
stopCycle: for (let i = 0; i < 5; i++) {
    homeworkFirst = homeworkFirst + 2;
    console.log(homeworkFirst);
    }  

// Task #4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let taskFour = 2;
while (taskFour < 16) {
        taskFour++
    if (taskFour % 2 === 0) {
      continue;  
    } else {
        console.log(taskFour);
    }
}
// Task#5
const arrayOfNumbers = [];
let homeworkFive = 0;
let homeworkNum = 5;
for (let i = 0; i < 6; i++) {
    arrayOfNumbers[i] = homeworkNum;
    homeworkNum++;
 }
console.log(arrayOfNumbers);



// (*) Продвинутые задания на использование циклов и условий
// task #1
// Заполните новый массив(result) числами из старого(arr).Количество элементов
//  в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
} 
console.log(result);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается
//  строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// task #2

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == "number") {
        data[i] *= 2;
    } else {
            data[i] = data[i] + " - done";
        }
    }
console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// task #2
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let j = 0;
for (let i = data.length; i >= 0; i--) {    
    result[j] = data[i];
    j++;
}
console.log(data);
console.log(result);

// Упражнение по написанию кода 5: (**) Задача на формирование фигуры
// вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//     *
//    ***
//   *****
//  *******
// *********
//***********
// + '\n' - Символ переноса строки;

const lines = 5;
let result = '';
for (let j = 1; j < 7; j++) {
    for (let i = 1; i < (7 - j); i++) {
        result += ' ';        
    }
    for (let k = 1; k < (j + 1); k++) {
        result += '*';
    }
    for (let k = 1; k < j; k++) {
    result += '*';
    }
    result += '\n';       
}    
console.log(result);

console.log(parseInt('010', 10))



// Упражнение по написанию кода 6: Задание на работу с функциями
// Task #1
/*1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

P.S. возвращать - это использовать ключевое слово return.

P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.
*/

// Решение 

function sayHello(name) {
    return 'Привет, ' + name + '!';
} 
console.log(sayHello('Nikolay'));


// Task #2
/*2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает
 массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6]. 
*/

// Решение

function returnNeighboringNumbers(numberOnly) {
    let task2Result = [];
    task2Result[0] = numberOnly - 1;
    task2Result[1] = numberOnly;
    task2Result[2] = numberOnly + 1;
    return task2Result;
}
console.log(returnNeighboringNumbers(5));

// Task #2
/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
(Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), 
где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
(Проверяем через оператор typeof)
Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20
Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
проверять их и продумывать логику работы внутри. 
Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

Да, задача сложнее, но она просто объединяет все то, что мы уже учили.
*/
// Решение

function getMathResult(number1, number2) {
    if (number2 > 0 && number2 !== 0 && typeof (number2) == "number" &&
        number1 > 0 && number1 !== 0 && typeof (number1) == "number") {
        let result = '';
        for (let i = 1; i < number2; i++) {
            result = result + "---" + number1 * (i + 1);
        }
        return number1 + result;
        } else {
        return number1;
        }
}
console.log(getMathResult(5, 'э'));

// второе решение задачи №3 (не моё).
function getMathResult(a, b) {
    let result = '';
    if (b <= 0 || typeof(b) != 'number') {
        return a;
    }
    for (let i = 1; i <= b; i++) {
        result += a * i;
        if (i < b) {
            result += '---';
        } 
    }    
    return (result);
   }
console.log(getMathResult(5, 'э'));



let number2 = 'd';
if (number2 > 0 && number2 !== 0 && typeof(number2) == "number") {
    console.log("Right");
    } else {
    console.log(number2);
    }

// let colors = [
'#FFAD23',
'#FEAD23',
'#54FA78';
let colors = ['#FFAD23', '#FEAD23', '#54F78'];




function brightest(colors) {
    let maxR = parseInt(colors[0].substr(1, 2), 16);
    colors[i]
    let g = parseInt(colors[0].substr(1, 2), 16);
    let b = parseInt(colors[0].substr(1, 2), 16);
    // let r = colors[i];
    let colorMax = Math.max(r, g, b);

    return colorMax;
}        
console.log(brightest(['#001000', '#FEAD23', '#54FA78']));



console.log(brightest(color));



let color = 'fff';
let colorMath = parseInt(color, 16);
console.log(colorMath);


/*
Упражнение №7 (*) Продвинутые задания на использование функций
В этих задачах мы уже усложним работу с функциями. 
Они необязательны и тут можно попробовать свои силы.
Учтите, что проверка кода в таких заданиях осуществляется автоматически,
 через программу. Поэтому нужно четко следовать инструкции.
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
Каждая задача проверяется отдельно, но по порядку, 
так что вы будете получать разные уведомления при проверке.
Задачи:
*/
// Task #1
/*
1) Создайте функцию, которая будет вычислять объем и 
площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. 
Ответ выведите в формате строки, который изображен в примерах.
Если в функцию попал неправильный аргумент или вычислить значения невозможно - 
вернуть строку "При вычислении произошла ошибка"
НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться.
Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
Примеры:
calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'
*/
// Решение

function calculateVolumeAndArea(onlyNumber) {
    if (onlyNumber === Math.round(onlyNumber) && typeof(onlyNumber) == "number" && onlyNumber > 0) {
        let a = 'Объем куба: ' + onlyNumber * onlyNumber * onlyNumber +
            ', площадь всей поверхности: ' + onlyNumber * onlyNumber * 6;
        return a;
    } else {
        return "При вычислении произошла ошибка";
    }
}
console.log(calculateVolumeAndArea(15.5));

// Task #2
/*Постепенно переходим к более реалистичным задачам :) 
Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
Пример:
getCoupeNumber(33)  => 9
getCoupeNumber(7)  => 2
getCoupeNumber(300)  => "Таких мест в вагоне не существует"
getCoupeNumber(0)  => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"
Такая функция вполне реальна и может использоваться для формирования билетов, 
в том числе и визуально на сайтах. Конечно, там будет куда больше условий, 
но смысл остается таким же.*/

// Решение
function getCoupeNumber(coupeNumber) {
    if (typeof (coupeNumber) === "number" &&  (coupeNumber >= 0 || coupeNumber > 36 || (coupeNumber ===
        Math.round(coupeNumber) && coupeNumber >= 0))) {
    return 'Таких мест в вагоне не существует';
    } else {
        if (coupeNumber == Math.round(coupeNumber) || coupeNumber < 0 || typeof(coupeNumber) != "number" ) {
        return 'Ошибка. Проверьте правильность введенного номера места';
        } else {
            if (coupeNumber >= 1 && coupeNumber <= 36) {
                let a = Math.round(coupeNumber / 4);
                return a;
            
            }
        }
    }
}

console.log(getCoupeNumber(36));

function getCoupeNumber(coupeNumber) {
    if (typeof (coupeNumber) === "number" && coupeNumber >= 1 && coupeNumber <= 36 && coupeNumber ===
        Math.round(coupeNumber)) {        
        let a = Math.ceil(coupeNumber / 4, 1);
        return a;
    } else {
        if (typeof(coupeNumber) != "number" && coupeNumber < 36 || coupeNumber < 0  || coupeNumber !=
            Math.round(coupeNumber)) {
            return 'Ошибка. Проверьте правильность введенного номера места';
        } else {
            return 'Таких мест в вагоне не существует';
        }
    }
}
console.log(getCoupeNumber(37));

/* Упражнение №8 (*) Продвинутые задания на использование функций
Task #1
Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные".
Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
Пример:
getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150) => "Ошибка, проверьте данные"
*/
// Решение (Моё)

let y;
function getTimeFromMinutes(numOfMinutes) {
    y = numOfMinutes;
    if (typeof (numOfMinutes) !== "number" || numOfMinutes < 0 || !Number.isInteger(numOfMinutes)) {
        return 'Ошибка, проверьте данные';
    } else {
        let j = getHours() + getMinutes();
        return j;
    }
}
function getHours(b) {
    b = Math.floor(y / 60);
    if (b % 10 === 0 || b >= 5 && b <= 9 || b % 10 >= 5 && b % 10 <= 9 || b >= 11 && b <= 20) {            
        b = `Это ${b} часов и `;
        return b;
    } else {
        if (b === 1 || b % 10 === 1) {
            b = `Это ${b} час и `;
            return b;
        } else {
            b = `Это ${b} часа и `;
            return b;
        }
    } 
}
getHours();
function getMinutes(a) {
    a = y % 60;
    if (a % 10 === 0 || a >= 5 && a <= 9 || a % 10 >= 5 && a % 10 <= 9 || a >= 11 && a <= 20) {            
        a = a + ' минут';
        return a;
    } else {
        if (a === 1 || a % 10 === 1) {
            a = a + ' минута';
            return a;
        } else {
            a = a + ' минуты';
            return a;
        }
    } 
} 
getMinutes();
console.log(getTimeFromMinutes(500));
console.log(y);


/*
Черновики для подставления в конечную функцию
function getMinutes(a) {
    a = numOfMinutes % 60;
    if (a % 10 === 0 || a >= 5 && a <= 9 || a % 10 >= 5 && a % 10 <= 9 || a >= 11 && a <= 20) {            
        a = numOfMinutes + ' минут';
        return a;
    } else {
        if (a === 1 || a % 10 === 1) {
            a = numOfMinutes + ' минута';
            return a;
        } else {
            a = numOfMinutes + ' минуты';
            return a;
        }
    } 
}    

console.log(getMinutes(numOfMinutes));
let numOfMinutes = 300;
// let a = numOfMinutes % 60;
function getHours(b) {
    b = Math.floor(numOfMinutes / 60);
    if (b % 10 === 0 || b >= 5 && b <= 9 || b % 10 >= 5 && b % 10 <= 9 || b >= 11 && b <= 20) {            
        b = `Это ${b} часов и `;
        return b;
    } else {
        if (b === 1 || b % 10 === 1) {
            b = `Это ${b} час и `;
            return b;
        } else {
            b = `Это ${b} часа и `;
            return b;
        }
    } 
}    
console.log(getHours(numOfMinutes));
*/ 
/*
Task #2
Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. 
Дробные числа разрешены.
Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0
У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)
*/ 
// Решение (Моё/ответ в комментариях)
function findMaxNumber(a, b, c, d) {    
    if ( typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number' && typeof(d) === 'number' ) {
        return Math.max(a, b, c, d);
    } else {
        return 0;        
    }
}
findMaxNumber();
console.log(findMaxNumber(5, '0', 3, 2));

/*Упражнение №9 (**) Задача с собеседований на числа Фибоначчи
Task #1
Это одна из классических задач в программировании на самых разных языках. 
Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1,
 а каждое последующее число равно сумме двух предыдущих чисел. 
 И на собеседованиях часто дают задачи, связанные с этими числами. 
 Есть разные вариации и тут мы попробуем решить одну из них.
Сразу скажу, что есть варианты решения через прием, называемый рекурсия. 
Он дальше по курсу. Но этот вариант нужно решить без её применения. 
Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, 
вы можете вернуться в это задание и попробовать решить по другому. 
Задача:
Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
Причем, их количество должно быть равно переданному аргументу.
Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
Пример:
fib(4) => "0 1 1 2"
fib(7) => "0 1 1 2 3 5 8"
fib('7') => ""
fib(1) => "0"
fib(0) => ""
Задача непростая для новичков, так что с первого раза может не получится. 
*/


function fib(argumentFib) {
    let a = [0, 1];
    if (argumentFib === Math.round(argumentFib) && typeof(argumentFib) == "number" && argumentFib >=0) {
        switch (argumentFib) {
        case 0: 
            return '';
            break;
        case 1:
                a = '0';
                return a;   
            break;
        default:
            for (let i = 2; i < argumentFib; i++) {        
                let c = i - 2,
                    d = i - 1;
                let b = a[c] + a[d];
                a[i] = b;
            }
                return a.join(' '); /*Заменяет все вхождения запятой на пробел в строке*/
    }
    } else {
            return '';        
    }
}
fib();
console.log(fib(0));
// Решение преподавателя:
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    let result = '';
    let first = 0;
    let second = 1;
    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}
fib(5);

/*Упражнение №10 
У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. 
Выполните часть заданий за него.
Task #1
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно 
*/
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
function showExperience(plan) {
    let a = plan;
    const { exp } = a.skills;
    return exp;
}
// console.log(showExperience(personalPlanPeter));

/*Task #2
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект 
со всеми данными и возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. 
Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.
*/
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};
function showProgrammingLangs(plan) {
    const { skills: { programmingLangs } } = plan;
    if (typeof(programmingLangs[0]) !== undefined) {
        let b = '';
        for (let key in programmingLangs) {
            b = b + `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }  
        return (b);
    } else {
        return '';
    }        
}
console.log(showProgrammingLangs(personalPlanPeter));

/*Task #3
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
Пример:
    personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, 
а языки всегда в верхнем регистре (большими буквами). 
Если данные в объекте поменяются, то и сообщение тоже изменится.
P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, 
в котором он расположен. Но пока делаем это менее удобным способом)
*/

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },    
    showAgeAndLangs: function (object) {
        const { skills, age } = object,
            // console.log(object.skills.languages);
            res = `Мне ${age} и я владею языками: ${object.skills.languages[0].toUpperCase()} ${object.skills.languages[1].toUpperCase()}`;
        return res;
        }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//Решение преподавателя:
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);