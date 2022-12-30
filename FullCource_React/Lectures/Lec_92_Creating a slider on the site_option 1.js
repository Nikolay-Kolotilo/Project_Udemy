'use strict';

/*   Lec_92_Creating a slider on the site, option 1.
1:10. Алгоритм самостоятельных действий:
    - Получение элементов слайдера со страницы;
    - Определение параметра (индекса), который будет определять текущий слайд.
      Его необходимо использовать и изменять;
    - Написание Функции показывающей наши слайды. Состоит из двух функцийй:
      1. показ слайда;
      2. скрытие других слайдов. Функция принимает индекс, показывает слайд и  индекс. 
      Также она должна принимать условия: когда доходит до конца индекс должен начинаться сначала.
    - навеска обработчиков событий на стрелочки, она должна изменять индекс при показе следующего слайда
    (+1) и (-1) при показе предыдущего слайда.
    - организация номерации: при индексе меньше 10 - подставляется 0.
*/

// Slider Решение самостоятельное 
    //Lec_92 sliderShow
function sliderShow(numberOfSlide, totalItem, currentId) {
    totalItem.forEach(item => item.classList.add('hide'));
    totalItem[numberOfSlide - 1].classList.remove('hide');
    totalItem[numberOfSlide - 1].classList.add('show');
    document.querySelector('.offer__slider-wrapper').append(totalItem[numberOfSlide -1]);
    if (numberOfSlide < 10) {
        currentId.innerHTML = `0${numberOfSlide}`;
    } else {
        currentId.innerHTML = numberOfSlide;
    }        
    if (counterTotal < 10 ) {
        totalId.innerHTML = `0${counterTotal}`;
    } else {
        totalId.innerHTML = counterTotal;
    }
}
sliderShow(countNumber, totalItem, currentId);

arrowPrev.addEventListener('click', (e) => {
    e.preventDefault();
    countNumber = countNumber - 1;
    sliderCounter(countNumber);
    // console.log(countNumber);
    sliderShow(countNumber, totalItem, currentId);
});
arrowNext.addEventListener('click', (e) => {
    e.preventDefault();
    countNumber++;
    sliderCounter(countNumber);
    // console.log(countNumber);
    sliderShow(countNumber, totalItem, currentId);
});


// Slider Решение преподавателя
let slideIndex = 1;
const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current');
showSlides(slideIndex);

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block'; 
  
    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', function(){
    plusSlides(-1);
});

next.addEventListener('click', function(){
    plusSlides(1);
});
