'use strict';

/*   Lec_94_Создаем навигацию для слайдов.
0:00. Добавление точек.
0:40. Перечень действий:
        - Получить как элемент - весь слайдер;
        - Установка position: relative.
        - Создание обертки для точек.
        - циклом создать количество точек равно количеству слайдов.
        - установка характерного атрибута с привязкой к номерам слайда.
        - сделать класс активности слайда.
        - при клике на точку - необходимо перемещаться на соответствующий слайд.
*/
//Lec_94. 11:20. Добавление события на точки.
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');// Lec_94. 11:50. Получение значения атрибута.

        slideIndex = slideTo;// Lec_94. 12:30. Присваивание индексу значения атрибута полученного ранее.
        ofset = +width.slice(0, width.length - 2) * (slideTo - 1); //Lec_94. 12:50. Передаижение по галлерее.
        slidesField.style.transform = `translateX(-${ofset}px)`;
        
        if (slides.length < 10 ) {//Lec_94. 13:50. Применение счетчика на точках.
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        } 
        dots.forEach(dot => dot.style.opacity = '.5'); //Lec_94. 13:40. Изменение отображения точек.
        dots[slideIndex - 1].style.opacity = '1';       
    });
    
});    



