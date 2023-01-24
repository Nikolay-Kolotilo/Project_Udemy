'use strict';
/*Lec_106_Mistakes_How to avoid “breaking” your code try_catch.
1:00. Конструкция try/catch.
try:    */
try {
    console.log('Normal'); //Команда try, выполняет то что в скобках и если выполняет то блок catch не выполняется.
} catch (e) { // e - is an argument.
    console.log('Eror'); //то, что получим если try не выполнился (из-за лшибок).
};
// в консоли получаем: Normal
//2:30. try/catch - основной смысо в том, что код после этого блока будет выполняться, а не останавливаться.

try {
    console.log('Normal'); //Команда try, выполняет то что в скобках и если выполняет то блок catch не выполняется:
    console.log(a);
    console.log('Result');
} catch (e) { // e - is an argument.
    console.log('Eror'); //то, что получим если try не выполнился (из-за ошибок).
};
// в консоли получаем: Normal
//3:00. try/catch - основной смысо в том, что код после этого блока будет выполняться, а не останавливаться.
console.log('further'); /* getting:
Normal
Eror - отработал блок catch из-за ошибки в console.log(a); 
further - Этот код проходит, несмотря на срабатывание catch из-за ошибки в console.log(a); */

//4:40 - е - объект ошибки:
try {
    console.log('Normal'); 
    console.log(a);
    console.log('Result');
} catch (error) { // error - is an argument.
    console.log(error); //в консоли получим ReferenceError: a is not defined... .
};
console.log('further');
/*5:35 У error есть 3 части:
- error.name - Название ошибки
- error.message - Само сообщение
- error.stack - Стек.
*/
try {
    console.log('Normal'); 
    console.log(a);
    console.log('Result');
} catch (error) { // error - is an argument.
    console.log(error.name); //в консоли получим: ReferenceError.
    console.log(error.message); //в консоли получим:  is not defined.
    console.log(error.stack); /*в консоли получим: 
    ReferenceError: a is not defined
    at Object.<anonymous> (c:\ITJS\Project_Udemy\FullCource_React\Lectures\tempCodeRunnerFile.js:3:17)*/
} finally {//6:35 finally работает как в промисах. Это блок, который выполнится абсолютно всегда (try/catch).
    console.log('Always fires after a block has been processed.');
} 
// 7:30. Пример.
try {
    document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
    });  
} catch(e) {
    console.log(e);
}
console.log('normal');
// если кнопки на странице нет то консоль выдаст ошибку, но console.log('normal') - сработает!!
// если кнопка на странице есть, то сработает весь скрипт!!




