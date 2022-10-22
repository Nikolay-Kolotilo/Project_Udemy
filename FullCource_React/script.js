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

console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 1 && 2 && 3 );
console.log(5 === 5 && 3 > 1 || 5);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
console.log(5 === 5 && 3 > 1 || 5);

// Задача - треугольник звездочек

    let brick = '';

for (let i = 0; i < 6; i++) {
    // brick = brick + '*';

    brick = brick + '*';
    console.log(brick);
}

// Упражнение по написанию кода 3: Задания на использование циклов и условий.
//     task #1
for (let j = 0; j < array.length; j++) {
        const element = array[j];
        index
}
    

let homeworkFirst = 4;
for (let i = 0; i <= 5; i++) {
    homeworkFirst++;
    console.log(homeworkFirst);
    }    
// Task #2
    let homeworkFirst = 21;
stopCycle: for (let i = 0; i < 11; i++) {
    homeworkFirst = homeworkFirst - 1;
    if (homeworkFirst == 13) break stopCycle;
    console.log(homeworkFirst);
    }  

// Task #3
let homeworkFirst = 0;
stopCycle: for (let i = 0; i < 5; i++) {
    homeworkFirst = homeworkFirst + 2;
    console.log(homeworkFirst);
    }  

// Task #4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let taskFour = 2;
while (taskFour < 16) {
        taskFour++
    if (taskFour % 2 === 0) {
      continue;  
    } else {
        console.log(taskFour);
    }
}
// Task#5
const arrayOfNumbers = [];
let homeworkFive = 0;
let homeworkNum = 5;
for (let i = 0; i < 6; i++) {
    arrayOfNumbers[i] = homeworkNum;
    homeworkNum++;
 }
console.log(arrayOfNumbers);



// (*) Продвинутые задания на использование циклов и условий
// task #1
// Заполните новый массив(result) числами из старого(arr).Количество элементов
//  в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
} 
console.log(result);

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается
//  строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]
// task #2

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof data[i] == "number") {
        data[i] *= 2;
    } else {
            data[i] = data[i] + " - done";
        }
    }
console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// task #2
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
let j = 0;
for (let i = data.length; i >= 0; i--) {    
    result[j] = data[i];
    j++;
}
console.log(data);
console.log(result);

// Упражнение по написанию кода 5: (**) Задача на формирование фигуры
// вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//     *
//    ***
//   *****
//  *******
// *********
//***********

const lines = 5;
let result = '';
let space = '#';
let star = '*';
for (let i = 0; i < lines; i++) {
    result = result + ' ';
}
result += star;
    
console.log(result);
console.log(space);

// + '\n'

const lines = 5;
let result = '';
for (let j = 1; j < 7; j++) {
    for (let i = 1; i < (7 - j); i++) {
        result += ' ';        
    }
    for (let k = 1; k < (j + 1); k++) {
        result += '*';
    }
    for (let k = 1; k < j; k++) {
    result += '*';
    }
    result += '\n';       
}    
console.log(result);


