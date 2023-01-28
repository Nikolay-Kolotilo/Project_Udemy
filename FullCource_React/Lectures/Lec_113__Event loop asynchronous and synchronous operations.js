/*Lec_113__Event loop asynchronous and synchronous operations.  
        http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
0:30.   */
console.log(1);                 //синхронная команда
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 2');
}, 2000);
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 4');
}, 4000);
console.log(2);                 //синхронная команда. В консоли получим:
/* Видим очередность выполнения
1
2
Timeout 2
Timeout 4
Асинхронные операции это операции, которые запускаются с течением времени.
Это setTimeout и setInterval, запросы на сервер, все колбэки (Ivent? submit и т.д.)
*/
console.log(1);                 //синхронная команда
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 2');
}, 2000);
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 4');
}, 4000);
console.log(2);                 //синхронная команда. В консоли получим:
/* Видим очередность выполнения
1
2
Timeout 2 - через 2 сек
Timeout 4 - через 4 сек.
Асинхронные операции это операции, которые запускаются с течением времени.
Это setTimeout и setInterval, запросы на сервер, все колбэки (Ivent? submit и т.д.)
*/

console.log(1);                 //синхронная команда
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 4');
}, 4000);
setTimeout(() => {              //асинхронная команда
    console.log('Timeout 4');
}, 4000);
console.log(2);                 //синхронная команда. В консоли получим:
/* Видим очередность выполнения
1
2
Timeout 4 - через 4 сек
Timeout 4 - через 4 сек.
Асинхронные операции это операции, которые запускаются с течением времени.
Это setTimeout и setInterval, запросы на сервер, все колбэки (Ivent? submit и т.д.)
4:40. сайт latentflip:
Call Stack      - Вызовы функций, которые выполняются в данный момент.
Web Apis        - Спец хранилище, для хранения промежуточных данных например setTimeout и setInterval.
Callback Queue  - Очередь выполнения.
Эти 3 понятия и есть собятийный цикл.*/
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
/*7:00. Очередность событий кода выше: https://habr.com/ru/company/hexlet/blog/656003/
1. Сначала выполняется синхронный код. Он попадет в Call Stack. Это будет первая команда $.on('button', 'click', function onClick() {
она просто Висит в Web Apis и ждет когда нажмут кнопку для выполнения setTimeout(function timer() {.
Парралельно в Web Apis выполняется setTimeout(function timeout() { в котором отсчитывается  15 сек,
который попал туда в очередь на шаге №3.
2. Далее идет console.log("Hi!"); Он сразу попадает в Call Stack.
3. setTimeout попадает в Web Apis, в котором отсчитывается 15 сек.
4. console.log("Welcome to loupe."); Он сразу попадает в Call Stack и выполняется
Любой синхронный код сначала попадает в очередь  в Callback Queue и сразу переходит в Call Stack.
13:40 подробно о работе 
    $.on('button', 'click', function onClick() {
    setTimeout(function timer() {
14:10. очередность при обработке такого кода.
$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
});
*/
const arr = [1, 4, 5, 6, 3];
arr.forEach(item => {
    console.log(item);
});
/*Каждый отдельный item запускается уже в Call Stack минуя Web Apis и Callback Queue.
При этом клики по кнопкам ждут в очереди в Callback Queue пока полгостью не отработает forEach.
15:20. Поэтому пока не отработает бесконезный цикл вкладка будет висеть.
И вся очередь в Callback Queue будет ожидать кавершения бесконечного цикла.
17:00. Пример.
19:35. Для решения проблем с зависанием при выполнении объемных высилений необхолимо разбивать задачу
        на отдельные кусочки.
20:20. Вопрос с собеседования.
*/
setTimeout(function timeout() {
    console.log("1");
}, 0);
console.log("2"); //Вконсоли все равно получим:
/*
2
1
Это происходит потому, что:
1. setTimeout попадает в асинхронную часть: Web Apis и Callback Queue и сначала выполнится синхронный код,
    который сразу попадает Call Stack (путь синхронной обработки)
2. Сам JS вместо }, 0); подставляет }, 4); тоесть 4 мс. вместо 0.

asinc and await Помагают в работе с синхронной и асинхонной частями.*/
