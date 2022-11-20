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
    console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
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
    index;
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
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

/*Упражнение №11 
Task #1
1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
*/
'Peter', 'Ann', 'Alex', 'Linda'
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    const [...copyFamily] = arr;
    if (typeof(copyFamily[0]) != 'undefined') {
        let res = 'Семья состоит из:';
    copyFamily.forEach(function (answear) {
        res += ` ${answear}`;  
    });
    return res;    
    } else {
        return 'Семья пуста'; 
    } 
}
console.log(showFamily(family));

/*2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
и будет выводить в консоль эти строки в нижнем регистре.
Пример:
standardizeStrings(favoriteCities)  выведет в консоль
    lisbon
    rome
    milan
    dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. 
В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
*/
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    const [...nameSites] = arr;
    let res = nameSites.join('\n');
    return console.log(res.toLocaleLowerCase());
}
standardizeStrings(favoriteCities);

//Решение преподавателя для обоих задач упражнения 11:
const family = [];
function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += `${member} `
    });
    return str;
}
showFamily(family);
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}
standardizeStrings(favoriteCities);

/*Упражнение №12
Task #3 (продолжение 11)
3) Задача с собеседований. 
Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
Пример:
    const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'
Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
Это очень интересная задача, которую можно решить несколькими способами. 
Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. 
Как небольшая подсказка, есть метод, который может вам помочь. 
И часть дополнительных вариантов решения мы тоже изучим в течении курса.
Может показать сложной с первого взгляда, но это совсем не так 🙂
*/

const someString = 'This is some strange string';
function reverse(str) {
    let res = str;
    if (typeof (str) != 'string' ) {
        return 'Ошибка!';
    } else {
        res = str.split('');
        res = res.reverse();
        res = res.join('');
            return res;
    }    
}
console.log(reverse(someString));

//Решение преподавателя упражнения 12, задача №2(3):
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}
reverse(someString);

/*Упражнение №12
Task #4 (продолжение 11)
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
    const baseCurrencies = ['USD', 'EUR'];
    const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), 
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
Функция возвращает строку в нужном виде.
Пример:
    availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
    Доступные валюты:
    UAH
    RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies,
 потом additionalCurrencies по порядку
*/

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
let combined = baseCurrencies.concat(additionalCurrencies);

function availableCurr(arr, missingCurr) {
    let a = arr,
        b = missingCurr,
        c = 'Доступные валюты:\n',
        res = '',
        d = 'Нет доступных валют';
    if (a.length != 0) {
                for (let i = 0; i < a.length; i++) {
            if (a[i] == b) {
            continue;
            }
            res += `${a[i]}\n`;
    }
    res = c + res;
    return res;
    } else {
        return d;
    }
}
console.log(availableCurr([], 'UAH'));

//Решение преподавателя упражнения 12, задача №2(4):
function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

/*Упражнение №13
Task #1 
У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', 
если нет - 'Бюджета недостаточно'. И все 🙂
Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, 
бюджет или подставляется вообще другой объект.
*/
const shoppingMallData = {
    shops: [{ width: 10,
             length: 5        },
        {   width: 15,
            length: 7        },
        {   width: 20,
            length: 5        },
        {    width: 8,
            length: 10        },
        {    width: 8,
            length: 10        } 
           ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
    
function isBudgetEnough(data) {
    const sqwearShops = [],
        volumeShops = [],
        currentArr = data.shops;
    let currHeight = data.height,
        totalValu = 0,
        culcBudget = '';
    currentArr.forEach(function (Shop, numShop) {
        sqwearShops[numShop] = Shop.width * Shop.length;
        volumeShops[numShop] = sqwearShops[numShop] * currHeight;
        totalValu += volumeShops[numShop];
    });
    culcBudget = totalValu * data.moneyPer1m3;    
    if (culcBudget <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
    // // console.log(sqwearShops);
    // // console.log(volumeShops);
    // // console.log(totalValu);
    // console.log(culcBudget);
    // // console.log(data.budget);
    // console.log(typeof(enoughBudget));

}
isBudgetEnough(shoppingMallData);

//Решение преподавателя упражнение 13:
function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
    volume = data.height * square;
    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}
isBudgetEnough(shoppingMallData);

/*Упражнение №14
Task #1 (*) Продвинутая задача на работу с объектами и массивами
В этой задаче мы уже усложним работу с объектами и массивами. 
Она необязательна и тут можно попробовать свои силы.
Учтите, что проверка кода в таких заданиях осуществляется автоматически, 
через программу. Поэтому нужно четко следовать инструкции.
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
Задача:
У вас есть список учеников, которые хотят поиграть в игру:
    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 
    'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. 
Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. 
Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, 
функция возвращает новый массив с тремя командами и строкой как 4й элемент.
Пример:
sortStudentsByGroups(students)  =>
    [
      [ 'Andrew', 'Ann', 'Bernard' ],
      [ 'Cris', 'Josh', 'Mark' ],
      [ 'Peter', 'Sam', 'Sandra' ],
      'Оставшиеся студенты: Takesi'
    ]
Если убрать одно студента из списка, то результат будет:
    [
      [ 'Andrew', 'Ann', 'Bernard' ],
      [ 'Cris', 'Josh', 'Mark' ],
      [ 'Peter', 'Sam', 'Sandra' ],
      'Оставшиеся студенты: -'
    ]
А если добавить одного, то:
    [
      [ 'Andrew', 'Ann', 'Bernard' ],
      [ 'Cris', 'Josh', 'Mark' ],
      [ 'Peter', 'Sam', 'Sandra' ],
      'Оставшиеся студенты: Takesi, Somebody'
    ]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
Задача интересная, немного заковыристая, 
но все необходимое для неё мы уже проходили. 
Просто распишите логику действий строка за строкой.
*/
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
function sortStudentsByGroups(arr) {
    arr = arr.sort();
    let a = [],
        lastArr = [];
    for (let i = 0; i < arr.length; i++) {
        a[i / 3] = arr.slice(i, (i + 3));
        i += 2;
    }
    lastArr = a.pop();
    if (lastArr.length == 3) {
        a.push(lastArr);
        a.push('Оставшиеся студенты: -');        
    } else {
        lastArr = 'Оставшиеся студенты: ' + lastArr.join(', ');
        a.push(lastArr);
    }
    return a;
}
console.log(sortStudentsByGroups(students));

//Решение преподавателя упражнение 14:
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

/*Вопрос из теста №1:

Что будет содержаться в переменной result после завершения кода?
*/
function foo(a,b) {
    const [first] = a;
    const {eng} = b;
    console.log(first);
    return `${first} ${eng}`;
}  
     
const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
// Hello World


// 41. Задачи с собеседований на понимание основ
console.log(typeof ([] + 1));
[ ] + false - null + true ? 	//<--- 2. Чему равно такое выражение? Массив равен пустой строке лекция #41, время 3:30.

2 && 1 && null && 0 && undefined;
console.log(2 && 1 && null && 0 && undefined);


console.log   (a && b);//  a is not defined
console.log(!!(a && b));// a is not defined

console.log(!!('b' && '')); //false
console.log   ('b' && '');//''


a = [1, 2, 3];
b = [1, 2, 3]; 
console.log(a == b);	//false
console.log("Ёжик" > "яблоко");	//false Ё меньше я.
console.log(0 || "" || 2 || undefined || true || falsе);	//2

/*Задания на поиск ошибок в коде. Упражнение №15.
В этом упражнении мы с вами потренируемся находить ошибки и неточности в коде. 
Дебаг (поиск ошибок, debug) - очень важный навык любого программиста. 
И чем лучше вы им будете владеть, тем легче будет вам в первую очередь.
Мы уже разобрали один из важнейших инструментов для поиска ошибок у 
front-end разработчиков - это консоль разработчика прямо в браузере. 
Да, позже будут еще наслаиваться инструменты, но это один из основных. 
Не забывайте его использовать и внимательно читайте те сообщения, которые выводятся. 
Ведь все это было создано разработчиками для разработчиков, чтобы вам было проще. 
Ну и никто не отменяет древний метод поиска ошибок - вывод через console.log(). 
Но это только пока вы новичок :)
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда. 
Всю информацию для решения мы проходили в предыдущих уроках.
Задание:
У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, 
которые работают неправильно и он не может понять почему. 
Нужно исправить функции так, чтобы они давали всегда правильный результат.
1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - 
результат все время неправильный. Необходимо найти причины и исправить.
2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, 
складывать их и сравнивать с средним чеком (averageLunchPrice).
Сейчас функция работает, но постоянно выдает неправильный результат. 
Ведь из представленного меню сумма двух любых цен всегда будет больше 20. 
Необходимо найти причину и исправить.
3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. 
Конечно, в другом ресторане будут другие блюда, другие официанты и тп. 
Сейчас эта функция только в начале разработки и должна менять данные про официантов.
Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, 
но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! 
Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)*/
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};
function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';
    return anwser;
}
console.log(isOpen(openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}
transferWaitors(restorantData);

/*Задания на написание кода. Упражнение №16 Реккурсия.
(*) Задача на рекурсию
Здесь мы с вами рассмотрим одну из классических задач на рекурсию, 
которую дают на собеседованиях. Звучит она очень просто:
Напишите функцию, которая вычисляет факториал.
Задание простое, но нужно понимать что такое факториал вообще. 
Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", 
и так далее до 1. Факториал n обозначается как n!
Отсюда мы можем понять, что функция должна принимать 1 аргумент, 
который будет являться числом. Будет неплохо, если вы на собеседовании сразу 
напишите проверку на приходящее значение :) 
Поэтому, если в нашу функцию приходит дробное число или не число  - 
возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
Сам же факториал с примерами выглядит вот так:
n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула
Примеры значений для разных n:
    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    5! = 5 * 4 * 3 * 2 * 1 = 120
То есть, вызов нашей функции factorial(5) возвращает число 120
factorial(4) => 24
Решить задачу нужно через рекурсию. */
// Моё решение:
function factorial(n) {
    if (n%1 !== 0 || typeof(n) !== 'number') {        
        return 'Eror';
    } else {
        let total;
        if (n == 1 || n <= 0) {
            console.log('return 1');
            return 1;
        } else {
            console.log(n);
            total = n * factorial(n - 1);
            return total;               
        }        
    }    
}
console.log(factorial(5));

// Решение преподавателя:
function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }
    if (n >= 1) {
        console.log(n); // Проверка внутренней работы
        return n * factorial(n - 1);
    } else {
        console.log('return 1'); // Проверка внутренней работы
        return 1;
    }
    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

/*
(**) Сложная задача на вычисление количества страниц. Упражнение №17 
В каждой книге есть n страниц с номерами страниц от 1 до n. 
Написать функцию amountOfPages, аргумент которой summary составляется 
путем сложения количества цифр всех номеров страниц. 
Эта функция возвращает число - количество страниц n в книге. 
Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
Пример:
Если на входе функции summary = 25, то на результат должен быть 17. 
Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.
Функция на вход как раз принимает это общее количество цифр,
а возвращает конечное число, то есть последнюю страницу книги.
    amountOfPages(5) => 5
    amountOfPages(25) => 17
    amountOfPages(1095) => 401   
    amountOfPages(185) => 97
*/
function amountOfPages(summary){
    let resArr = 1;
    for (let i = 1; i <= summary; i++) {            
        resArr += `${i}`;
        if (resArr.length > summary) {                
        return i;
        }
    }    
    return resArr.length;
}
console.log(amountOfPages(1095));

// Решение автора

function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
}
  
/*
(**) Сложная задача на работу со строками
Это дополнительная непростая задачка, в которой вы можете попробовать свои силы. 
Задание:
Панграмма — это предложение, в котором каждая буква алфавита встречается 
хотя бы по одному разу. 
Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, 
поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. 
Если строка является панграммой - вернется true, если нет - false.
Пример:
isPangram(«The quick brown fox jumps over the lazy dog») => true
isPangram(«Hello world») => false
P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, 
которые мы будем проходить дальше по курсу. Но и без них можно это сделать. 
*/
// Своего решения нет.

// Решение преподавателя
// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}
// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}
// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }
      
        return false
    }
    
    return true
}
// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}
// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}