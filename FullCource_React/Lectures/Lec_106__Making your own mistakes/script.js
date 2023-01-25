'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '', // При создани блока будет ошибка и о ней надо предупредить разработчика.
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

data.forEach((blockObj, i) => { // Для каждого элемента массива создаем элемент на странице.
    const block = document.createElement(blockObj.tag); // создаем элемент на стр. с тегом из data.tag
    // 1:35 Специальный оператор для генерации ошибки - throw.
    // if (!blockObj.id) throw 'error'; //2:00 - в консоль throw выдаст - 'error'.
    if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);
                                //2:40 - в консоль throw выдаст объект ошибки (Готовый встроенный класс в js)
                                // - Uncaught Error: В данных под номером 2 нет id
    block.setAttribute('id', blockObj.id); // к созданному эдементу добавляем id.
    document.body.append(block); // добавляем созданный элемент на страницу.
});

//4:00. Возможности throw.
const err = new Error('Random');
console.log(err.name, err.mesaage, err.stack);
//В консоли получаем: Error Random Error: Error... и stack.

//5:00. Синтаксис Error, Reference TypeError and act.:
const err = new SyntaxError('Random');
console.log(err.name, err.mesaage, err.stack);
//В консоли получаем: SyntaxError Random SyntaxError: Error... и stack.
//5:55 Применение проверки из предыдущего урока:

try {
data.forEach((blockObj, i) => { // 
    const block = document.createElement(blockObj.tag); // 
    if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
    block.setAttribute('id', blockObj.id); //
    document.body.append(block); //
});
} catch (e) { //При срабатывании SyntaxError эта ошибка переходит в catch, в качестве e
    console.log(e.name);
    console.log(e.mesaage);
    console.log(e.stack);
}
//7:20. Можно console.log заменить на console.error.
//8:00. Если надо передать ошибку в дальнейшую обработку:
try {
data.forEach((blockObj, i) => { // 
    const block = document.createElement(blockObj.tag); // 
    if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
    block.setAttribute('id', blockObj.id); //
    document.body.append(block); //
});
} catch (e) { 
    if (e.name === 'SyntaxError') { // Проверка на тип ошибки.
        console.log(e.mesaage);
    } else throw e; //9:40. При таком срабатывании дальнейший код не выполняется.
}





