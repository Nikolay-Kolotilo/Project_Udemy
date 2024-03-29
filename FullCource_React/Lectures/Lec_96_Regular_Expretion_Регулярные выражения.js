'use strict';
/*
Lec_96_Регулярные выражения.
Любое регулярное выражение состоит из вдух частей:
    - Петтерн - шаблон; 
    - Флаги.
1:00. Синтаксис
Возможны как литеральная запись, так и запись через конструктор:

new RegExp(pattern, flags)
1:30. /pattern/flags

Параметры
pattern
    Текст регулярного выражения.

flags
    Если определён, может принимать любую комбинацию нижеследующих значений:
    g        глобальное сопоставление
    i        игнорирование регистра при сопоставлении
    m        сопоставление по нескольким строкам; символы начала и конца (^ и $) 
            начинают работать по нескольким строкам (то есть, происходит сопоставление с             
            началом или концом каждой строки (строки разделяются символами \n или \r), 
            а не только с началом или концом всей вводимой строки)
    y Экспериментальная возможность

        «липкий» поиск; сопоставление в целевой строке начинается с индекса, 
        на который указывает свойство lastIndex этого регулярного выражения 
        (и не пытается сопоставиться с любого более позднего индекса).


Описание

Существует два способа создания объекта RegExp: литеральная запись и использование конструктора. 
При записи строк параметры в литеральной записи не используют символы кавычек, 
в то время как параметры функции-конструктора используют кавычки. 
Так что следующие выражения создают одинаковые регулярные выражения:

/ab+c/i;
new RegExp('ab+c', 'i');

Литеральная запись обеспечивает компиляцию регулярного выражения при вычислении выражения. 
Используйте литеральную запись если регулярное выражение будет неизменным. 
Например, если вы используете литеральную запись для конструирования регулярного выражения, 
используемого в цикле, регулярное выражение не будет перекомпилироваться на каждой итерации.

Конструктор объекта регулярного выражения, например, new RegExp('ab+c'), 
обеспечивает компиляцию регулярного выражения во время выполнения. 
Используйте функцию-конструктор, если вы знаете, что шаблон регулярного выражения 
будет меняться или если вы не знаете шаблон и получаете его 
из внешних источников, например, из пользовательского ввода.

При использовании функции-конструктора необходимо использовать обычные правила 
экранирования в строках (предварять специальные символы символом обратного слеша «\»). 
Например, следующие выражения эквивалентны:

var re = /\w+/;
var re = new RegExp('\\w+');*/


//2:00. Метод строки search.

const ans = prompt('введите Ваще имя.');//В консоли вводим допустим 'Ann'. 'fyjkuitlui'
const reg = /n/;
console.log(ans.search(reg));//Метод поиска в строке. Когда в строке ввода 'Ann',
                            //Тогда консоль выдаст 1. - первое найденное вхождение
                            //Если 'fyjkuitlui', Тогда консоль выдаст -1. - Отсутствие вхождений.
/* Поиск вне зависимости от регистра, или надо найти все вхождения. Тогда применяются флаги:

4:30. g       Глобальное сопоставление (global);
4:20. i       Игнорирование регистра при сопоставлении;
4:35. m       Многострочный. Сопоставление по нескольким строкам; символы начала и конца (^ и $) 
            начинают работать по нескольким строкам (то есть, происходит сопоставление с             
            началом или концом каждой строки (строки разделяются символами \n или \r), 
            а не только с началом или концом всей вводимой строки)
y           Экспериментальная возможность.
                «липкий» поиск; сопоставление в целевой строке начинается с индекса, 
                на который указывает свойство lastIndex этого регулярного выражения 
                (и не пытается сопоставиться с любого более позднего индекса).*/

// 4:45. const reg = /n/i; Получим также 1.
// 5:00. const reg = /n/g; С методом "search" - не работает.
// 5:20. const reg = /n/gim; Флаги можно комбинировать.

// 5:35. Метод строки match. 
const ans = prompt('введите Ваще имя.');//В консоли вводим допустим 'Ann'.
const reg = /n/i;

console.log(ans.match(reg));//[ 'n', index: 1, input: 'Ann', groups: undefined ]

const ans = prompt('введите Ваще имя.');//В консоли вводим допустим 'ANNN'.
const reg = /n/ig;

console.log(ans.match(reg));//3 [ 'N', 'N', 'N' ]

// 7:00. Метод строки replace. 
const pass = prompt('Passwort');//В консоли вводим допустим ''.
console.log(pass.replace('Что заменяем', "На что заменяем"));//
console.log(pass.replace(/./g, "*"));
/*Внутри регулярных выражений знаки означают:
/./  - Все элементы строки (символы).
/\./ - Поиск точки в строке. \ - символ экранирования символа, обратный слэш.
9:30/\\/  - Поиск обратного слэша.
9:30/\^/  - Поиск каретки.
9:30/\&/  - .
9:50/\|/  - .
Без экранирования значение символов см. в документации.*/

//10:00
console.log('12-34-56'.replace(/-/g, ":"));// Заменить все дефисы на двоеточия. // 12:34:56

// 11:00. Метод регулярного выражения test. 
const ans = prompt('введите Ваше имя.');//В консоли вводим допустим 
const reg = /n/ig;
console.log(reg.test(ans));//При совпадении вернет true или folse при несовпадении.

/* 12:40. Классы регулярного выражения.
\d - digits. Ищем цифры.
\w - words. Ищем все слова.
\s - spases. Ищем все пробелы.
*/ 
//14:00
const ans = prompt('введите Ваше число.');//В консоли вводим допустим 'sdfgtew3dfvfg'
const reg = /\d/;
console.log(ans.match(reg));//При совпадении вернет [ '3', index: 7, input: 'sdfgtew3dfvfg', groups: undefined ].

//14:30
const ans = prompt('введите Ваше число.');//В консоли вводим допустим '200px'
const reg = /\d/;
console.log(ans.match(reg));//При совпадении вернет 3 [ '2', '0', '0' ].

//14:30 Комбинирование Классов:
const str = 'My name is R2D2'; // вырезаем имя "R2D2".
console.log(str.match(/\w\d\w\d/i));//При совпадении вернет [ 'R2D2', index: 11, input: 'My name is R2D2', groups: undefined ].

/* 16:20. Обратные классы регулярного выражения.
\D - digits. Ищем не цифры.
\W - words. Ищем не слова.
\S - spases. Ищем не пробелы.

17:40 - работа с проектом.
*/ 
