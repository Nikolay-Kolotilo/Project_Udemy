'use strict';

/* 0:15. NPM пакеты - Эко кусочки кода, которые лежат на отдельных серверах. 
Которые мы можем устанавливать себе в проет и использовать.
  Метод filter() создаёт новый массив со всеми элементами,
прошедшими проверку, задаваемую в передаваемой функции.
Вернётся новый массив с элементами, которые прошли проверку. 
Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

1:25 Создание NPM проекта.
3:20 Установка NPM пакета, который будем использовать внутри проекта.
Terminal: npn i json-server 
4:05 Различия пакотов. Локально. Глобально.
    - Глобально. Будет работать в любой части нашей системы. - Неважно в каком проекте или папке мы его запускаем.
    используется для проверяющих утилит к различным проектам.
- Локально. Для конкретного проекта.
5:05 sudo - Для Мак ОС.
5:50 - Указание флага. Используется ли он при разработке или работе проекта и т.д.
        --save-dev - Ключ для фейкового окружения (опен сервер) и тестирования функционала.
    Terminal: npm i json-server --save-dev
6:30 - Ключ для использования библиотек внутри проекта (Jqwery, React  и др.):
        --save  
8:40 - Папку node_modules - не трогаем!!
9:20. Размер папки node_modules может быть 500 Мб - особенности работы с Гит Хаб.
      Gitignore.
9:50. Удаление и установка папки node_modules
      npm i - команда в терминал для установки сервера по файлу "package.json".
11:15. package-lock.json 
11:40. Работа с json-server.
12:10. db.json - В нем записаны данные с карточек товара.
12:50. Получение меню из db.json с помощью fetch
15:00. Запуск json-server. 
    Terminal: npx json-server db.json
17:50. Получение массива на интернет странице при обращении к json-server db.json
18:15. Важная информация по запуску серверов.

*/