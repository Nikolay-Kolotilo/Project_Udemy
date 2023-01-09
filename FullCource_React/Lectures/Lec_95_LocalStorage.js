'use strict';
/*
Lec_95_Как сохранить данные без БД. Работа с localStorage.
00:25 Если говорить языком JavaScript, то localStorage это свойство глобального объекта браузера (window). */
// К нему можно обращаться как */
window.localStorage;
//  или просто 
localStorage.
/*
1:00. Находится в консоли aplication
2:00. Хранилище находится только внутри одного домена м служит для хранения локальных данных.
Браузеры выделяют ~ 5мб под localStorage. 
И если вы его превысите — получите исключение QUOTA_EXCEEDED_ERR. 
Кстати, c его помощью можно проверять есть ли в вашем хранилище еще место.

Работа с localStorage очень напоминает работу с объектами в JavaScript. Существует несколько методов для работы с ним.*/
    
/* 1. Метод который добавляет в localStorage новый ключ со значением (а если такой ключ уже существует, 
то перезаписывает новым значением). */

// 2:40. Первый аргумент - название ключа. 
localStorage.setItem('ключ', 'значение');
localStorage.setItem(‘myKey’, ‘myValue’);
localStorage.setItem('number', 5); //Пишем, например, */

// 3:40. 2. Берем определенное значение из хранилища по ключу.
localStorage.getItem('ключ');
localStorage.getItem('number');


// 4:20. 3. Удаляем ключ.
localStorage.removeItem("Ключ"); 
localStorage.removeItem("number"); 

// 4:45. 4. Очищаем все хранилище.
localStorage.clear();  

//5:30 Работа с примером. Папка: preview Урок 95
const checkBox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
    change = document.querySelector('#color');

console.log(checkBox);
   
if (localStorage.getItem('isChecked')) {  //8:00.
    checkBox.checked = true;
} 

if (localStorage.getItem('bg') === 'changed') {  //12:20.
    form.style.backgroundColor = 'red';
}
    

checkBox.addEventListener('change', () => { //7:00
    localStorage.setItem('isChecked', true);

});


change.addEventListener('click', () => { //9:40.
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

//13:30. Запись данных.
const persone = {
    name: 'Alex',
    age: 25
};
const serializedPersone = JSON.stringify(persone);//Если не перевести в Джейсон формат - будет ошибка.
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));//15:00


