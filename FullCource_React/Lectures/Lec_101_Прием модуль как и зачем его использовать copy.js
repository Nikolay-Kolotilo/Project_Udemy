'use strict';
/*
Lec_101Прием модуль как и зачем его использовать.
Используется для скрытия деталей скрипта.

Во многих языках программирования существуют механизмы, позволяющие скрывать, например, 
методы и свойства классов. В JavaScript нет встроенных средств, позволяющих, без дополнительных усилий, 
достигать таких эффектов. Однако подобные вещи можно имитировать с использованием других возможностей языка.
Паттерн проектирования «Модуль», который позволяет скрывать приватную информацию в замыканиях, 
давая доступ лишь к тому, что решил сделать общедоступным разработчик. 

Управлять областью видимости переменных в JavaScript можно, пользуясь паттерном «Модуль». 
Для того чтобы создать приватную область видимости, можно воспользоваться замыканием. 
Как известно, функции создают собственные области видимости, 
содержимое которых отделено от глобальной области видимости:

(function () {
 // здесь находится приватная область видимости
})();
Перед нами — так называемая самовызывающаяся функция (IIFE, Immediately-Invoked Function Expression, 
    немедленно вызываемое функциональное выражение). Такая функция выполняется сразу же после её объявления. 
    Подобные функции удобно использовать для того, чтобы решить некую задачу, 
    которую нужно решить лишь один раз, не оставляя при этом ничего лишнего в глобальной области видимости.
     Внутри этой функции (как, впрочем, и внутри других функций) создаётся приватная область видимости, 
     недоступная извне. То есть, если объявить внутри этой области видимости другую функцию, 
    то, после того, как IIFE выполнится, доступ к ней получить не удастся.

Модуль не засисит от других модулей, а также обеспечивает чистоту рабочего пространства 
(глобальной области видимости) и избегает конфликта с именами переменных
*/
//3:25. 2 способа создания модулей через нативную реализацию:
// - использование анонимной самовызывающейся функции.

const app = '123';

const number = 1;
(function () { //анонимная самовызывающаяся функция.
    let number = 2;//Создаем собственную область видимости.
    console.log(number);
    console.log(number + 3);
    
}()); //Обязательно в круглых скобках, иначе получим Фанкшон декларайшн.

console.log(number); // запускаем в консоли и получаем:
/*
2 // строка 39 (console.log(number);)
5 // строка 40 (console.log(number + 3);)
1 // строка 36 (const number = 1;)

//6:30. - использование объектного интерфейса.
Модуль записываем в переменную и возвращаем методы доступные снаружи.
*/
const user = (function () { //использование объектного интерфейса.
    const privat = function () {
        console.log('I am privat!'); //Лежит внутри локальной области видимости.
    };
    return { //8:00. Возвращает метод из Юзер
        sayHello: privat
    };
}());
user.sayHello(); //8:20 запускаем метод в консоли и получаем:
/*
'I am privat!'
8:40 т.е. эта функция вызывает созданные в ней методы только для тех данных, которые нам нужны.
*/

