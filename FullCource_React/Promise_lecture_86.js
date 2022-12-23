/* Промисы - это обещание, выполнить последовательность действий.
Помогает избежать ада Coll Beck.
*/
'use strict';

//2:00

console.log('Запрос данных...'); // Синхронній код.

//Асинхронній код.

setTimeout(() => {
    console.log('Подготовка данных...');
    const product = {
        name: 'TV',
        price: 2000
    }
    setTimeout(() => { 
        product.status = 'order';
        console.log(product);
    }, 2000);// 4:00 - Разростание дерева колбеков.
}, 2000);