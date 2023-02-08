/*Lec_132__React_The practice of states on the project.js

0:50. Переделка структуры EmployeesListItem на классы. 
1:35. Добавление переменных
2:00. Создаем конструктор и state 
2:50. Назначение обработчика сбытия на иконку с Печенькой 
3:10. Создание метода this.onIncrease
3:35. Использование Колбека в функции:*/
    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }
/*6:10. Отслеживание глобальными данными изменений в APP.JS 
6:30. ДЗ */