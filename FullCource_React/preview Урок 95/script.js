'use strict'; //Lec_95_Как сохранить данные без БД. Работа с localStorage.

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
