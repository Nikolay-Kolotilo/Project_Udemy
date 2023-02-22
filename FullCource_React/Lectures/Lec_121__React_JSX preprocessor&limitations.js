/*Lec_121__React_JSX preprocessor&limitations
0:15. Содержание index.js:
Это импорты всего необходимого
import React from 'react';                          - Библиотека реакт из node_modules
import ReactDOM from 'react-dom/client';            - Библиотека react-dom (вирт дерево)
import './index.css';                               - Импорт стилей
import App from './App';                            - Импорт функции
import reportWebVitals from './reportWebVitals';    - Измеряет скорость работы приложения

4:30. Для использования 17 версии реакт надо изменить синтаксис в index.js
5:00. Работа команды ReactDOM 
7:00. document.getElementById('root') - то куда в HTML будет помещаться все что мы сделаем
7:50. Удаление лишних файлов
8:20. Синтаксис на примере:
const elem = <h2>Hello World!</h2>;
9:45. Отображение elem на странице
11:50. Синтаксис на чистом js.
const elem = React.createElement(//В createElement мы должны передать 3 аргумента:
  'h2',// - Название элемента в версткею h2
  // null,// - Название класса, если его нет - null.
  {className: 'greetings'}, //Вместо null можно передать ОБЪЕКТ!! с полем className
  'Hello World!' //Содержимое тега
);
14:25. То что вернет этот код.
15:50. нет необходимости импортировать библиотеку React в каждый файл проекта.
17:25. const elem = <h2>Hello World!</h2>; Это React-элемент
17:50.      1 Правило. Если элемент имеет многострочную структуру - его надо оборачивать в скобки ().*/
const elem = (
  <div>
    <h2>Hello World!</h2>
    <input type="text" />
    <button/>
  </div>
)
/*
19:00 Настройка Emmet:
Вызвать команду:  Preferences: Open User Settings, затем слева выбрать Extentions (Emmet), далее:
Include Languages
Enable Emmet abbreviations in languages that are not supported by default. 
Add a mapping here between the language and Emmet supported language. 
For example: {"vue-html": "html", "javascript": "javascriptreact"}
В первый столбец добавить javascript, во второй javascriptreact
20:20.      2 Правило. При создании многострочного элемента у него всегда должен быть один родитель.
22:00.      3.Правило. Не забывать про самозакрывающиеся теги
22:35.      4.Правило. Тег <button/> или <button></button> оба вариант доступны
23:15. Возможности JSX. 
- Для использования переменной надо использовать {}*/
let text = 'Test';
const elem = (
  <div>
        <h2>Текст: {text}</h2> // Получим: Текст: Test. Работает как Бэктики.
        <h2>Текст: {2+2}</h2>//Получим: Текст: 4. Работает как Бэктики.
    <input type="text" />
    <button/>
  </div>
)
/*
25:00. Исключение: нельзя в {} помещать объекты. Это сделано для обезопасивания от сторонних скриптов.
{{}} - будет ошибка!!!
{[2,3]} - массивы помещать можно. При этом массив конкретинируется.
27:30. Атрибут CSS Класса
1. Правмло CSS Класса - всегда в формате Кэмел Кейс:     <button tabIndex={0}/>
2. Правмло CSS Класса - 2 атрибута не совпадаюющие с названиеми в HTML: className & htmlFor

*/