/*Lec_145__React_Styles_Class fields and static.js
            https://github.com/tc39/proposals/blob/main/finished-proposals.md - репозиторий разработчиков
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields
            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/static


                    ***********************
1:00. Для создания полей склассов используется метод как в создании метода со стрелочной функцией.        
1:35. Создание любых свойств без конструктора (вместо конструктора - синтаксис):

state = {
    name: 'Nikolay',
    salary: ''
}

2:50. Использование ключевого слова Static.
3:50. Свойства, которые мы можем использовать без создания класса называются статическими. 
Например Math.random().

5:00. Создание статического метода, используя ключевое слово Static

static onLog = () => {
    console.log('Test');
}
5:30. Вызов метода:

имякласса.onLog()

5:55. Поля классов:

static logged = 'on'; тогда вызов будет:      console.log(имякласса.logged); //В конлоси получим: 'on'

5:45. Область применения: создание библиотеки, создание переменной для всех классов (ширина, например)


*/