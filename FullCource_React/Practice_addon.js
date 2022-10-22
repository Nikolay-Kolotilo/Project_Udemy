const numberOfFilms = +prompt('сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
    gradeOfLastFilm = +prompt('На сколько оцените его', ''),
    lastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
    gradeOfLastFilm2 = +prompt('На сколько оцените его', '');
personalMovieDB.movies[lastFilm] = gradeOfLastFilm;
personalMovieDB.movies[lastFilm2] = gradeOfLastFilm2;

console.log(personalMovieDB);