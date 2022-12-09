

'use strict';
/*
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
*/

/* const box = document.getElementById('box'); // Получение элемента по ID;
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
const img = document.getElementsByClassName("promo__bg");*/

/* Практика №4. Лекция № 44. Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

/* Практика №5. Лекция № 48. Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener('DOMContentLoaded', () => {
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
        movieList = document.querySelector('.promo__interactive-list'),
        //Переменные из практики №5.
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    deleteAdv(adv);

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();

    const sortArr = (arr) => { arr.sort(); };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value,
        favorite = checkBox.checked;
        if (newFilm) {
            newFilm.length <= 21 ? newFilm = newFilm : newFilm =`${newFilm.slice(0, 21)}...`;                
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
        if (favorite) {
            console.log(newFilm);
        }
    });

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('div.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }


    createMovieList(movieDB.movies, movieList);

    console.log(addInput);
    console.log(checkBox);
    console.log(movieDB.movies);
});

