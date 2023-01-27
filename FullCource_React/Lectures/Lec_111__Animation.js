'use strict';
/*Lec_111__Animation.  https://html5book.ru/css3-animation
0:30. Ограничения в css3 по анимированию канвас элементов. css3 использует кривые безье.
1:15. Виды JS анимации. 
- при помощи функции setInterval - ранее в уроках.
    в этом способе есть ограничения - все параметры надо строго задавать, в том числе частоту кадров (frame rate), 
    что может не соответствовать частоте монитора и скорости обработки процессора.
    Также браузеру постоянно приходится перерисовывать анимацию, даже в фоновом режиме.
- 4:40. requestAnimationFrame. Подстраивает под частоту обновления браузера.
*/
//6:35. 
const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0; // этой переменной контролируем  позицию анимации.

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() { // Запускает функцию в виде колбека
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) { //Эта функция отвечает за анимацию
        requestAnimationFrame(myAnimation); // Запускает myAnimation
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); // Запускает анимацию первый раз по кнопке.
                                //Передавать надо в виде функции. myAnimation выполняется как колбек.
//11:20. Для остановки анимации в requestAnimationFrame оставляет уникальный идентификатор анимации:
let id = requestAnimationFrame(myAnimation);  
cancelAnimationFrame(id); //Отменяет myAnimation по ункальному id.