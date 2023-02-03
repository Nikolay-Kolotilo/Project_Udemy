/*Lec_127__React_Practice properties on the project
            https://www.npmjs.com/package/classnames - Дополнительная библиотека.

1:00. Кастомизация сотрудников с использованием Props.  employees-list.js

Exampl 1_1 Start Levl*/
    <EmployeesListItem name='John' salary='800'/>
    <EmployeesListItem name='Alrx' salary='3000'/>
    <EmployeesListItem name='Nikolay' salary='5000'/>
//2:30. employees-list-item.js:
const EmployeesListItem = (props) => {
    <span className="list-group-item-label">{props.name}</span>
    <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'} />

//Exampl 1_2 C Деструктуризацией
//3:55. employees-list-item.js:
    const EmployeesListItem = ({name, salary}) => {
    <span className="list-group-item-label">{name}</span>
    <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
    }

//Exampl 2_1 Start Levl*/  Метод MAP.
//5:10. Генерация списка сотрудников в автоматическом режиме по данным с сервера.
//Эмулируем данные с сервера app.js:
function App() {
    const data = [
        { name: 'John', salary: 800 },
        { name: 'Alex', salary: 3000 },
        { name: 'Nikolay', salary: 5000 }        
    ];
    return (
        <div className="app">
            <EmployeesList data={ data } />
        </div>
    );}
//7:35. employees-list Использование массива для создания каждого элемента Метод MAP. Стандартный способ.
const EmployeesList = ({ data }) => { //data приходит из app.js 5:10.
const elements = data.map((item) => {
    return (
        <EmployeesListItem name={item.name} salary={item.salary}/>
    )})
return (
    <ul className="app-list list-group">
        {elements}
    </ul>
        )
    }

//Exampl 2_2 Pro Levl*/  Метод MAP. Спред оператор ... !!!
//12:40. employees-list Использование массива для создания каждого элемента Метод MAP. Спред оператор ... !!!
const EmployeesList = ({ data }) => { //data приходит из app.js 5:10.
const elements = data.map((item) => {
    return (
        <EmployeesListItem {...item} /> //Библиотека Реакт САМА!!! переведет Props в формат:
                                        //name='John' salary='800', т.к. без этого мы получим:
                                        //name:'John' salary:800 !!!
    )})
return (
    <ul className="app-list list-group">
        {elements}
    </ul>
        )
    }
    
                        //********************
//13:55. ДЗ. Добавить сво-во icrease в объект с данными (где name и salary):
    const data = [
        { name: 'John', salary: 800 },
        { name: 'Alex', salary: 3000 },
        { name: 'Nikolay', salary: 5000 }        
    ];

