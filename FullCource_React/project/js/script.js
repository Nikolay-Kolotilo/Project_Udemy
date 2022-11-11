/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});
console.log(movieList);
genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

/*


const box = document.getElementById('box'); // Получение элемента по ID;
console.log(box);// Получение эленета 0 из массива 'box'.


const btns = document.getElementsByTagName('button');// Получение элемента по имени тега;
console.log(btns[0]);// Получение эленета 0 из массива 'button'.

// Задание №1.
const promo = document.getElementsByClassName("promo__adv");
promo[0].remove();
console.log(promo);

// Задание №2.
const genre = document.getElementsByClassName("promo__genre"),
    divBg = document.getElementsByClassName("promo__genre");

const divText = document.createElement('div');
divText.textContent = 'Драма';
divText.classList.add("promo__genre");
document.querySelector(".promo__bg").prepend(divText);
divBg[1].remove();

console.log(divBg);

// Задание №3.
const img = document.getElementsByClassName("promo__bg");

console.log(img);

console.log(genre);
// console.dir(genre);
*/