'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
//     {transform: 'translateY(0)'},//5:00. Первым аргуметом передаем массив, массив объектов с ключевыми кадрами. Тоесть это начальная точка,
//     {transform: 'translateY(100px)'},//промежуточные точки и конечная. Ключевые кадры это какие-то CSS свойства.
//     {transform: 'translateY(-100px)'},
//     { transform: 'translateY(0)' } //5:00. Свойства могут быть любыми.  
// ], {//5:55 Далее передаем options, см внизу
//     duration: 3000,
//     iterations: Infinity,
// }); 
//8:00. Управление при помощи кнопки (вместо images[0].animate([):
let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0deg)',//11:50. Усложнение анимации.
                filter: 'opacity(100%)'//12:35
            }, 
            
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }  
        ], {                
            duration: 3000,
            iterations: Infinity,
        }); 
    } else if(phoneAnimation.playState === 'paused'){//9:40  https://developer.mozilla.org/en-US/docs/Web/API/Animation/pause
        //Если стоит на паузе - тогда используем метод Плей: https://developer.mozilla.org/en-US/docs/Web/API/Animation/play
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();//10:40
    }
});