'use strict';
/*
Lec_97_Создаем калькулятор на сайте, часть 1.
2:10. Алгоритм для калькулятора.
    для мужчин: BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)
    для женщин: BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)

Коэффициенты активности при расчете нормы калорий:
    Минимальный уровень активности — 1.2
    Низкий уровень активности — 1.375
    Средний уровень активности — 1.55
    Высокий уровень — 1.725
    Очень высокий —  1.9

3:50. Назначение уникальных идентефикаторов. #female #male
4:10. Формула расчета каллорий по ссылке. Пункт 2:10 и коэфф-нт активности.
4:45. Назначение коэффициентов черед data-ratio  - Дата артибут.
5:50. Получение класса для значения калькулятора document.querySelector('.calculating__result span')
6:45. Функционал калькулятора. Функция calcTotal.*/
        function calcTotal() {//Lec_97. 8:00
                if (!sex || !height || !weight || !age || !ratio) {
                    result.textContent = "____";
                    return;
                }
                if (sex === "female") { //Lec_97. 9:40
                    result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio;
                } else {
                    result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio;
                }
            }
            calcTotal();
/*
12:00 Проверка работоспособности функции
12:45. Функционал калькулятора. Функция getStaticInformation.*/
        function getStaticInformation(parentSelector, activeClass) { //Lec_97. 12:45
                const elements = document.querySelectorAll(`${parentSelector} div`);

                document.querySelector(parentSelector).addEventListener('click', (e) => {//Lec_97. 14:10
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = e.target.getAttribute('data-ratio');
                    } else {
                        sex = e.target.getAttribute('id');                
                    }
                    console.log(ratio, sex); //Lec_97. 16:35 Проверка правильности получения атрибутов.

                    elements.forEach(elem => {
                        elem.classList.remove(activeClass);                
                    });
                    e.target.classList.add(activeClass);
                }); 
            }
            getStaticInformation('#gender', 'calculating__choose-item_active');
            getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');
/*
20:00. Создание функции по обработке инпута.
21:40. Switch Case. Многозначная проверка строки.
24:45. Вызов calcTotal() после действий с объектами калькулятора - для пересчета.
26:30. Применение метода Math.round. Для округления значений.*/
        function getDinamicInformation(selector) {//Lec_97. 20:00 Работа с элементами ввода данных.
                const input = document.querySelector(selector);

                input.addEventListener('input', () => {
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
            getDinamicInformation('#height');
            getDinamicInformation('#weight');
            getDinamicInformation('#age');
/*28:00. Исправление багов.
- срабатывание подложки из-за делегирования событий;
- отсутствие дефолного значения для калькулятора. 30:30


*/