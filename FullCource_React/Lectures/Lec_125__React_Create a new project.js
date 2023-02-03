/*Lec_125__React_Create a new project
        https://ru.reactjs.org/docs/strict-mode.html
0:55. CRUD.  
        https://ru.wikipedia.org/wiki/CRUD
Расшифровывается как 4 понятия: создание, чтение модификация и удаление.
1:50. Набор готовых классов из библиотеки:
        https://cdnjs.com
        https://cdnjs.com/libraries/bootstrap
2:35. Создание структуры папок Реакт для приложения.
4:25. Создание структуры папок.
5:30. Вставка стилей CSS из https://cdnjs.com/libraries/bootstrap:
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css" 
        integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA==" 
        crossorigin="anonymous" referrerpolicy="no-referrer"/>
6:00. Иконки из пакета:
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" 
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />        
7:00. Разделение приложения на отдельные части: Шапка, Фильтры и строка поиска, Карточка сотрудников, форма добавления сотрудника.
        Создаем подпапки по компонентам
cebabCase: папки создаются с названиями через дефис
9:35. Можно создавать файлы JSX вместо JS - разницы нет
14:30. Настраиваем app.css
.app{
    margin: 0 auto;
    max-width: 1000px;
}
15:00. Работаем в app.js
17:30. Создание других компонентов app-info.js
18:30. Возможности Emmot пишем .ИМЯ - получаем див с этим классом.
20:45. Стили желательно также выделять в отдельные файлы к каждому компоненту
22:00. Результат:
import './app-info.css';
const AppInfo = () => {
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: </h2>
                <h2>Премию получат: </h2>
            </div>
            )
}
export default AppInfo
17:30. Создание других компонентов search-panel.js
23:50. Добавляем Инпут с классами из библиотеки Бутстрап: https://cdnjs.com/libraries/bootstrap
import './search-panel.css';
const SearchPanal = () => {
        return (
            <input
                type="text"
                className='form-control search-input'
                placeholder='Найти сотрудника'/>
            )
}
export default SearchPanal
26:10. Создание других компонентов app-filter.js
className="btn-group" из библиотеки Бутстрап: https://cdnjs.com/libraries/bootstrap
28:25. документация по классам: https://getbootstrap.com/docs/5.3/components/buttons/
import './app-filter.css';
const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                    type='button'>
                        Все сотрудники
            </button>
            <button className="btn btn-outline-light"
                    type='button'>
                        На повышение
            </button>
            <button className="btn btn-outline-light"
                    type='button'>
                        З/П Больше 1000$
            </button>
        </div>
    )    
}
export default AppFilter
30:45. Создание других компонентов employees-list-item.js
31:55. defaultValue="1000$" из <input type="text" className="list-group-item-input" defaultValue="1000$"/>
        Это заготовка на будущее. В Реакте есть трибут, что означает, что будет показано значение по умодчанию: 1000$.
import './employees-list-item.css';
const EmployeesListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">John Smith</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default EmployeesListItem
34:35. Создание других компонентов employees-list.js
35:30. Переиспользование других компонентов. 
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';
const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
        )
}
export default EmployeesList
38:35. Создание других компонентов employees-add-form.js
import './employees-add-form.css';
const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}
export default EmployeesAddForm;
42:00. Варианты выполнения задачи.
*/