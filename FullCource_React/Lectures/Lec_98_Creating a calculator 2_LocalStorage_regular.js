'use strict';
/*
Lec_98_Создаем калькулятор на сайте, часть 2.
2:35. Исправление ошибки ввода букв вместо цифр - подсвечивание красной рамки.*/
            if (input.value.match(/\D/g)) { //Lec_98. 2:35 Подсветка красной рамкой при ошибке.
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
//В результате получаем:

    function getDinamicInformation(selector) {//Lec_97. 20:00 Работа с элементами ввода данных.
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) { //Lec_98. 2:35 Подсветка красной рамкой при ошибке.
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;                
            }
            calcTotal();            
        });        
    }
/*
4:30. Работа с локальным хранилищем в проекте.
Запоминание выбранных, в предыдущий раз параметров в функции getStaticInformation.*/
        localStorage.setItem('sex', e.target.getAttribute('id')); //Lec_98. 5:00


//6:25.  Использование запомненных данных.
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }
/*
9:40. установка классов активности на єлементы в соответствии с данными из LocalStorage
function initLocalSettings(){} */
        function initLocalSettings(selector, activeClass) { //Lec_98. 9:40
        const elements = document.querySelectorAll(selector);
        elements.forEach((elem) => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

/*
15:05. Модификация getStaticInformation


*/