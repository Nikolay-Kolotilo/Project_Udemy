'use strict';
/*107__How to turn ES6+ code into old ES5 format. Babel, Core.js and polyfills
https://babeljs.io/docs/en/usage
0:45. Babel - Трансплитер. Переводит новый код в старый.
1:00. Полифилы - участки кода, эмулирующие поведение новых возможностей в старые.
2:40. Установка Babel:*/

npm install --save-dev @babel/core @babel/cli @babel/preset-env

/*  --save-dev - зависимости для разработки.
    @babel/core - Осноагой функционал.
    @babel/cli - утилита для работы с babel из командной строки.
    @babel/preset-env - preset - набор настроек, которые будут использоваться в нашем пакете.
    https://babeljs.io/docs/en/babel-preset-env

5:00. npm install --save @babel/polyfill - Модуль для полифилов.
    https://babeljs.io/docs/en/babel-polyfill
    Полифилы включаются в код готового продукта.

6:35. babel.config.json - не добавляем в Фуд-проект. Все данные пишем внутри package.json:
"browserslist" : [
    "> 1%"
],

8:20. webpack.config - Настройки конфига

'use strict';
let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/, //Поиск JS файлов с использованием регулярных выражений.
        exclude: /(node_modules|bower_components)/, //Исключения из выборки.
        use: { // Что будем использовать.
          loader: 'babel-loader', //Технология связывающая webpack c babel/
          options: { // Опции.
            presets: [['@babel/preset-env', { // Пресеты.
                debug: true, // Позволяет видеть прямо в процессе возникающие проблемы
                corejs: 3, // использлвание библиотеки для полифилов.
                useBuiltIns: "usage" // Функция позволяющая интеллектуально выбрать только используемые полифилы.
            }]]
          }
        }
      }
    ]
  }
};
8:55. Установка модуля 'babel-loader': 
        npm i --save-dev babel-loader
11:00. Установка модуля corejs: 3, : 
        npm i --save-dev core-js
12:15. После устпновки используем:
        npx webpack
14:00.  Установка полифилов вручную:
        https://www.npmjs.com/package/es6-promise
        в консоли устанавливаем модуль.
        npm install es6-promise
15:30. Auto-polyfill
        https://www.npmjs.com/package/es6-promise
To polyfill the global environment (either in Node or in the browser via CommonJS) use the following code snippet:
        require('es6-promise').polyfill();
16:00. Пример установки модуля для ФорИЧ.
        https://www.npmjs.com/package/nodelist-foreach-polyfill
        npm i nodelist-foreach-polyfill
       Затем используем Import в файле JS:
        import 'nodelist-foreach-polyfill';
17:30. Slick-slider установка в терминале:
        npm slick-slider
       Затем используем Import в файле JS:
        import 'slick-slider';

        */