/* Промисы - это конструкция (Объект) обещание, выполнить последовательность действий.
Помогает избежать ада Coll Beck.

Синтаксис создания Promise:

let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"
});

Функция, переданная в конструкцию new Promise, называется исполнитель (executor). Когда Promise создаётся, она запускается автоматически. Она должна содержать «создающий» код, который когда-нибудь создаст результат. В терминах нашей аналогии: исполнитель – это «певец».

Её аргументы resolve и reject – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.

Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

    resolve(value) — если работа завершилась успешно, с результатом value.
    reject(error) — если произошла ошибка, error – объект ошибки.

Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

    state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
    result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

Так что исполнитель по итогу переводит promise в одно из двух состояний:
1. resolve(value):
- state: "fulfilled"
- result: value
 2. reject(error)
- state: "rejected"
- result: error

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
    };
    setTimeout(() => { 
        product.status = 'order';
        console.log(product);
    }, 2000);// 4:00 - Разростание дерева колбеков.
}, 2000);

//5:00 Resolve & Rreject - Это функции: Resolve - выполнение правильно (if - true),
//Rreject - выполнение когда неправильно (if - false),
const req = new Promise(function(resolve, reject) {
    setTimeout(() => {//5:30
        console.log('Подготовка данных...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);// 10:00 return из req для последующего использования.

    }, 2000);    
});

/*then - метод Promise. 7:35
reject - метод Promise. 16:45
Синтаксис:

promise.then(
  function(result) { обработает успешное выполнение }, - аргумент 1
  function(error) { обработает ошибку } - - аргумент 2
);
         аргумент 1   */
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order'; //9:45 product - нет в функции, её необходимо return-уть из req.
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
})/* 17:25 catch*/.catch(() => {
    console.error('Произошла ошибка!');// 17:50/
})/* 18:20 finally*/.finally(() => { // Использется ВСЕГДА в конце и позволяет віполнить действие при любом исходе.
    // Можно использовать для очистки формы, например.
    console.log('Finally!');// 19:10.
});

/* 20:40. all & race*/

const test = time => {
    return new Promise(resolve => { // Если Реджект не нужен - можно передавать только Ресолв
        setTimeout(() => resolve(), time);
    });
};
//21:45`
test(1000).then(() => console.log('1000 ms'));
//22:20
test(2000).then(() => console.log('2000 ms'));

//22:40 Promise.all - Принимает в себя массив с промисами.
//нужна, что б убедиться, что все промисы выполнились.

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

//24:45 Promise.race - Принимает в себя массив с промисами.
//Применяется для выполнения требуемой операции после срабатывания ПЕРВОГО промиса
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First');
});

