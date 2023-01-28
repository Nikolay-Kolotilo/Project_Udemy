/*Lec_114__Macro and micro tasks
        http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
0:55. Каждая задача, которая попадает в Callback Queue и есть МАКРОзадача;
        Эта очередь есть очередь макрозадач
1:05. Микрозадачи:*/

setTimeout(() => {
    console.log('timeoute');
});
Promise.resolve()
    .then(() => console.log('promise'));

console.log('code'); /*В консоли получим:
code
promise - 3:90. промис второй потомучто выполнение кода внутри then/cetch/finaly/await относятся к МИКРОзадачам
timeoute 
4:00. Сразу после каждой МАКРОзадачи движок исполняет все задачи из очереди МИКРОзадачи.
    т.е. у нас формируется очереди и МАКРО и МИКРО - задач.
*/
//4:45:
setTimeout(() => {
    console.log('timeoute');
});
Promise.resolve()
    .then(() => console.log('promise1'));
Promise.resolve()
    .then(() => console.log('promise2'));

console.log('code'); /*В консоли получим:
code
promise1
promise2
timeoute
5:30. Сразу после каждой МАКРОзадачи движок исполняет все задачи из очереди МИКРОзадачи.
    т.е. у нас формируется очереди и МАКРО и МИКРО - задач.
Пмрмерная схема:
() => {} - микрозадача (Функция)
5:45. microtasks then/catch/finally/await - здесь завершаются все запланированный микрозадачи.
render page
() => {} - cktle.ofz микрозадача (Функция)
microtasks then/catch/finally/await
render page
7:25. Возможность самостоятельно запускать МИКРОзадачи
    тоесть код, который выполнится после макрозадач но до рендера страницы.
    Для этого существует спец команда*/
queueMicrotask(() => console.log('wow'));// тогда очередность выполнения задач будет следующая:

setTimeout(() => {
    console.log('timeoute');
});
Promise.resolve()
    .then(() => console.log('promise1'));
queueMicrotask(() => console.log('wow'));
Promise.resolve()
    .then(() => console.log('promise2'));

console.log('code');
/*
code
wow
promise1
wow         эта команда встала в очередь микрозадач
promise2
timeoute
*/
