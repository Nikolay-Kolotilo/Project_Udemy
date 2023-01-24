'use strict';
/*Lec_104_Building our project and fixing bugs.
0:00. Перевод проекта на модульную структуру. Фиксим баги из-зи модулей.
0:20. Модуль calc. */
export default calc; //Также меняем на export default остальные модули.

//1:25. Соответствующие правки в основном файле, получаем:
import tabs from './modules/tabs'; //2:40. Вырезаем из Дом контент и переносим импорт перед функцией
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
//3:25. Запускаем npx webpack - снова собираем модули.
//3:50. Решение бага для Опен и клоз модал - перенос внутри модал этих фу-ий в самый верх модуля.
//Затем делаем экспорт для этих фу-ций.
//6:00. Uncaught TypeError: modal.classList is undefined: modal.classList.add('show');
//Ошибка происходит из - за инкапсуляции.
//10:20. Прописываем triggerSelector, modalSelector в модуле modal.
btn.addEventListener('click', () => openModal(modalSelector));// => {72 - 4:05. Алгоритм работы, открытие окна. Лекция 73. 1:30 (openModal)
/* openModal заменяем на стрелочную функцию из-за ограничений обработчика событий:
() => openModal(modalSelector)   ВАЖНО!!!    */
/*11:10
Ньюанс по:
modal.addEventListener('click', (e) => {  //72 - 11:30. Закрытие модального окна по клику вне самого окна.
    if (e.target === modal || e.target.getAttribute('data-close') == '') {  
        closeModal(modalSelector);   // Подставляем modalSelector
    }
});

document.addEventListener('keydown', (e) => {  //72 - 16:06. Закрытие модального окна по клику 'Escape'.
    if (e.code == 'Escape' && modal.classList.contains('show')) {  
        closeModal(modalSelector); // Подставляем modalSelector
    }
});
*/
//11:35. Проверяем на странице.
/*11:50. Исправляем ошибку с таймером: Uncaught ReferenceError: modalTimerId is not defined
14:10. Откуда взять переменную для modalTimerId? Если она используется и в молуле modal и в модуле forms.
Правильнее создать ее в главном файле script: 14:30
Вместо:         const modalTimerId = setTimeout(openModal, 50000);  //Lec_104 14:40
Прописываем:    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);  //Lec_104 14:40
*/
//17:10. Настройка openModal и closeModal в forms
//19:20. Донастройка forms - вынос селектора 'form' в качестве аргумента.

/*19:50. postData, которая работает с сервером. Такие функции называют сервисами и выносят в отдельные файлы.
20:10. Создаем папку servises: js\servises, Переносим postData из forms в servises.js
Экспортируем как ф-цию:
const postData = async (url, data) => {//Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js
    const res = await fetch(url, {//Lec_90 5:05
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); 
};    
export { postData };*/

/*21:35. Донастройка cards - вынос функции getResource в servises.js, которая также  работает с сервером. 
Так как установлена Axios то ничего выносить не требуется.*/

/*22:40. Донастройка tabs - вынос аргументов в tabs().
23:25. Подставляем аргуметы в вызов функции в script
24:30. В script подставлен селектор с точкой, поэтому надо точку из аргумента убрать:
if (target && target.classList.contains(tabsSelector.slice(1))) { */

/*25:35. Донастройка timer - замена deadline в const deadline = '2023-05-11';.
26:25. Подставляем аргуметы в вызов функции в script  */

/*27:10. Донастройка slider - подстановка селекторов-аргументов в функцию.
26:25. Подставляем аргуметы в вызов функции в script  */
