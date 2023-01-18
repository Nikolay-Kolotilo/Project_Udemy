'use strict';
/*
Lec_99_Lec_99_Геттеры и сеттеры (свойства объектов).
0:00. Свойства акцессоры. Состоят из свойств и методов.
Свойства - это то, что описвает наш объект.
Методы - это то, что умеет делать наш объект.

Также есть два типа свойств объекта.
- Первый тип это свойства-данные (data properties). 
    Мы уже знаем, как работать с ними. Все свойства, 
    которые мы использовали до текущего момента, были свойствами-данными.
- Второй тип свойств мы ещё не рассматривали. 
    Это свойства-аксессоры (accessor properties). 
    По своей сути это функции, которые используются для присвоения и получения значения, 
    но во внешнем коде они выглядят как обычные свойства объекта.

0:55 Свойства акцессоры делятся на 2 группы: Геттеры и Сеттеры.
Свойства-аксессоры представлены методами: 
- «геттер» – для чтения и 
- «сеттер» – для записи. 
При литеральном объявлении объекта они обозначаются get и set:
*/
//1:05
const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {//1.35 Установка Геттера - Для получения данных
        return this.age;
    },
    set userAge(num) {//2.45 Установка Сеттера. Функция должна что-то принимать. Для установки данных.
        this.age = num;  
    }
};
console.log(persone.userAge); //2:05 В userAge - не ставим круглые скобки(). Получаем 25 в консоли.
console.log(persone.userAge = 30); //3:25 В userAge - устанавливаем возрвст 30. Получаем 30 в консоли.
console.log(persone.userAge);//Получаем 30 в консоли.
/*4:00 - работают только в паре, т.е. когда в объекте есть и Сеттер и Геттер одновременно.
const persone = { // в таком виде Сеттер и Геттер не работают в объекте.
    name: 'Alex',
    age: 25,
    get userAge() {
        return this.age;
    }
}; */



