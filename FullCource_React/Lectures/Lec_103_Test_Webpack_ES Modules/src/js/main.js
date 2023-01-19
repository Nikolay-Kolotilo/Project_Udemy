export let one = 1;

let two = 2;
export {two}; // обязательно заключать в фигурные скобки.

export default function sayHi() {//1:15 Возможен экспорт и функций.
    console.log('Hello');
}