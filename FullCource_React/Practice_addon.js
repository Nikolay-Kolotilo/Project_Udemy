/* Задание на урок Практика 1 (Лекция №19):

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
/*
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Вопросы пользователю про фильмы

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
            gradeOfLastFilm = +prompt('На сколько оцените его', '');
        if (lastFilm != null && gradeOfLastFilm != null &&
            lastFilm != '' && gradeOfLastFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = gradeOfLastFilm;
            console.log('Done');
        } else {
            console.log('Eror');
            i--;
        }    
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else {
        if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");
        } else {
            if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
        }
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();
console.log(personalMovieDB);
console.log(writeYourGenres);
*/

/* Практика 2  (лекция 24)
Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
// Код возьмите из предыдущего домашнего задания

/* Практика 3 (лекция 29)
Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


/* Практика 4 (лекция 37)
Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // // Вопросы пользователю про фильмы
    start: function () {
        personalMovieDB.count = +prompt('сколько фильмов вы уже просмотрели?', '');
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('сколько фильмов вы уже просмотрели?', '');
        }
        return personalMovieDB.count;
    },
// Последние просмотренные фильмы
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
                gradeOfLastFilm = +prompt('На сколько оцените его', '');
            if (lastFilm != null && gradeOfLastFilm != null &&
                lastFilm != '' && gradeOfLastFilm != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = gradeOfLastFilm;
                console.log('Done');
            } else {            
                i--;
                return console.log('Eror');
            }    
        }
    },
// Оценка пользователя
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else {
            if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
                console.log("Вы классический зритель");
            } else {
                if (personalMovieDB.count >= 30) {
                    console.log("Вы киноман");
                } else {
                    console.log("Произошла ошибка");
                }
            }
        }
    },
// Любимые жанры
    writeYourGenres: function () {        
        let a;
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            personalMovieDB.genres[i - 1] === '' || personalMovieDB.genres[i - 1
            ] === null ? i-- : personalMovieDB.genres[i - 1];            
        }
        personalMovieDB.genres.forEach((item, i) => {
            a += `\nЛюбимый жанр #${i + 1} - это ${item}`;
        });            
        return console.log(a);
    },
    // Условие приватности
    showMyDB:function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    // Переключатель приватности БД
    toggleVisibleMyDB: function () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;        
    }
};
// Проверка на отмену или пустую тхт
//     checkData: function (inlet) {
//     inlet === '' && inlet === null ? true : false;
//     },
// personalMovieDB.checkData();
// // Вопросы пользователю про фильмы
// personalMovieDB.start();
// // Последние просмотренные фильмы
// personalMovieDB.rememberMyFilms();
// // Оценка пользователя
// personalMovieDB.detectPersonalLevel();
// Любимые жанры
personalMovieDB.writeYourGenres();
// Условие приватности
// personalMovieDB.showMyDB(personalMovieDB.privat);
// // Переключатель приватности БД
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

/* 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

console.log(personalMovieDB);