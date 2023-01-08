'use strict';

/*   Lec_93_Creating a slider on the site, option 2.
0:00. Слайдер в виде карусели.
0:45. Создание переменных.
1:00. Изменение структуры HTML кода. Перемещение картинок внутрь вновь создаваемого div.
        
1:35. Алгоритм работы слайдера- карусели. Назначение св-ва overflow: hiden
2:15. Св-во transform - для передвижения по отношению в тегу-обертке.
3:50. 4:30. Получение ширины окна обертки: Компьютед стайл - width = window.getComputedStyle(slidesWrapper);
5:30. Функционал слайдера.
5:45. Установка ширины для slidesField. -  slidesField.style.width = 100 * slides.length + '%';

6:35. Приведение ширины всех влайдов к одному значению: 
    slides.forEach(slide => {
        slide.style.width = width;
    });
7:45. Добавление Флексов и Трансишион. -     
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
8:50. Ограничение показа элемента внутри обертки.     
        slidesWrapper.style.overflow = 'hidden';
9:40. Ориентир для вмещения слайдов.
        ofset = 0;
10:20. Обработчик србытий на кнопку некст.
    next.addEventListener(() => {
        
        slidesField.style.transform = `translateX(-${ofset}px)`;
    });
11:50. Условия сдвига для ofset.
    next.addEventListener('click', () => {
        if (ofset == +width.slice(0, width.length - 2)*(slides.length - 1) ) { //14:10. Превращение  width (650px) в 650.
            ofset = 0;
        } else { //14:50.
        
        }
        slidesField.style.transform = `translateX(-${ofset}px)`;
    });

15:45. Обработчик србытий на кнопку previous.
    prev.addEventListener('click', () => {
        if (ofset == 0) { 
            ofset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else { //14:50.
            ofset -= +width.slice(0, width.length - 2) * (slides.length - 1);
        }
        slidesField.style.transform = `translateX(-${ofset}px)`;
    });
18:35. Счетчик слайдов.
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    } 
20:00. Контроль слайд индексов. в addEventListener.
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        } 
20:45. Контроль total слайдов. в addEventListener.
        if (slides.length < 10 ) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        } 
        if (slideIndex == 1) { //Для prev.
            slideIndex = slides.length;
        } else {
            slideIndex--;
        } 
        if (slides.length < 10 ) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        } 
*/

