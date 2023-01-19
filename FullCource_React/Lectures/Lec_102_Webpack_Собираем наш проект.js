'use strict';
/*Lec_102_Webpack_Собираем наш проект.js
0:35. Системв модулей:
- CommonJS и 
- система импортов-єкспортов в ЕС6

Модули CommonJS
В структурном плане, CommonJS-модуль представляет собой готовый к переиспользованию фрагмент JavaScript-кода, 
который экспортирует специальные объекты, доступные для использования в любом зависимом коде. 
CommonJS-модули обычно они описывают две главных идеи: 
- объект exports, содержащий то, что модуль хочет сделать доступным для других частей системы, 
- и функцию require, которая используется одними модулями для импорта объекта exports из других.
*/
function myModule() {
    this.hello = function () {
        console.log('Hello');
    };
    this.goodby = function () { //1:55
        console.log('bae!');
    };
}
//2:05 Использование функции в другом файле.
//2:35
myModule.exports = myModule; // Именно exportS

//3:15. Вызов в другом файле.

const myModule = require('./fileName');

const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodby();

//4:40. Для сборки используем Webpack.
//5:30. gulp - Это планировщик задач, Webpack - сборщик модулей.
//11:10. Файл настройки Webpack.
//15:40. Донастройка конфига.
//18:10. Работа с Фуд проектом.

/*Basic Setup

First let's create a directory, initialize npm, install webpack locally, 
and install the webpack-cli (the tool used to run webpack on the command line):
*/
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

/*Throughout the Guides we will use diff blocks to show you what changes we're making to directories,
 files, and code. For instance:

+ this is a new line you shall copy into your code
- and this is a line to be removed from your code
  and this is a line not to touch.

Now we'll create the following directory structure, files and their contents:*/

npx webpack   ;//Запуск webpack в командной строке.

//19:50 Модуль Табс создание.
function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}
module.exports = tabs;

//20:20ю Модуль cards создание.
//24:25. Вызов модулей.
//25:10. Сборка структуры. Запуск webpack
asset bundle.js 32 KiB [emitted] (name: main) 1 related asset
./js/script.js 999 bytes [built] [code generated]
./js/modules/tabs.js 1.15 KiB [built] [code generated]
./js/modules/timer.js 2.2 KiB [built] [code generated]
./js/modules/modal.js 3.11 KiB [built] [code generated]
./js/modules/cards.js 5.5 KiB [built] [code generated]
./js/modules/forms.js 4.68 KiB [built] [code generated]
./js/modules/slider.js 7.47 KiB [built] [code generated]
./js/modules/calc.js 4.06 KiB [built] [code generated]
//26:00. Запуск jsonServer  из второго окна терминала.
//26:35. Подключение bundle.js в index.html.
<script src="js/script.js"></script> //Меняем на:
<script src="js/bundle.js"></script> 
//27:00. Тестирование сайта index.html.



