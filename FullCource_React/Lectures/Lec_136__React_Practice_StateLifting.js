/*Lec_136__React_Practice_StateLifting
        https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react/43639228#43639228

2:30. Создание метода onToggleIncrease в App.js - Метод будет изменять параметр Increase на противоположный.
    onTogglrIncrease = (id) => {
        console.log(`Increase this ${id}`)
    }
3:22. Создание метода onToggleIncrease в App.js - Метод будет изменять параметр Increase на противоположный.
    onTogglrIncrease = (id) => {
        console.log(`Increase this ${id}`)
    }
    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }
3:45. Проброска методов вниз:
    <EmployeesList
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleIncrease={this.onToggleIncrease}
        onToggleRise={this.onToggleRise}
        />
4:25. Переходим в employees-list Добавляем методы:
const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
    const elements = data.map(item => {
    const {id, ...itemProps} = item
    return (
        < EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => {onToggleIncrease(id)} }
            onToggleRise={() => {onToggleRise(id)} } />
    )
})
5:50. Переходим в employees-list-item - передаем пропсы туда

6:35. Переделка класса в Функцию
10:00. Добавление нового свойства (rise: false,) в метод addItem в App.js
10:15. Доработка методов onToggleIncrease и onToggleRise в App.js. Для этого необходимо:
- взять объект с которым работает пользователь;
- сделать его копию;
- поменять его свойства;
- создать новый стейт;
- поменять его в компоненте. 
10:40. onToggleIncrease = (id) => { //- находим элемент по id
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
        })    
    }
11:30. Делаем копию объекта.
13:00. Механика замены свойств при разворачивании ...old в const newItem = {...old, increase: !old.increase}:
            ***************
- если новый свойства (increase) будуь совпадать со свойствами из ...old - то они будут его заменять !!!!!!!
13:35. Переработка всего State-а.
Способ №1
    onToggleIncrease = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })    
    }
15:40. Способ №2. Использование метода MAP
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                } 
                return item;
            })
         }))
20:10. Самостоятельная задача<div className="Решена на 100% как решил автор"></div>
Изменения в App.js
render() {
    let employeesQ = this.state.data.length,
        IncreaseQ = this.state.data.filter((item => item.increase === true)).length
    
    return (
        <div className="app">
            <AppInfo
                employeesQ={employeesQ}
                IncreaseQ={IncreaseQ}
            />

Изменения в AppInfo.js
const AppInfo = ({employeesQ, IncreaseQ}) => {
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N </h1>
                <h2>Общее число сотрудников: {employeesQ}</h2>
                <h2>Премию получат: {IncreaseQ}</h2>
            </div>
    )

23:50. Реализация метода onToggleRise:
    onToggleRise = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                } 
                return item;
            })
         }))
    }
24:30. Оптимизация методов onToggleRise и onToggleIncrease, замена их на 1 метод:
- Изменения в App.js :
    onToggleProp = (id, prop) => {   
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                } 
                return item;
            })
         }))
    }
    <EmployeesList
        data={this.state.data}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}/>
- Изменения в employees-list.js :
    const EmployeesList = ({ data, onDelete, onToggleProp }) => {

        const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            < EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} }/>
        )
    })
- Изменения в employees-list.js :
const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleProp, increase, rise } = props
    let elem = increase ? ' increase' : '';
    let elemLike = rise ? ' like' : '';
    
    return (
        <li className={'list-group-item d-flex justify-content-between elem' + elem + elemLike }>
            <span className="list-group-item-label"                    
                onClick={onToggleProp}
                data-toggle='rise'>{name}</span>                
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"                            
                        onClick={onToggleProp}
                        data-toggle='increase'>
                        <i className="fas fa-cookie"></i>
                    </button>

27:15. Data фтрибуты в React вместо методов onToggleRise и onToggleIncrease:
30:15. ДЗ. Исправить начисление премий и лайков для пустых полей сотрудников.
            data: data.map(item => {
                if (item.id === id && item.name.length > 3) { // Решение: добавляем условие && item.name.length > 3
                    return {...item, [prop]: !item[prop]}
                } 
                return item;
            })




*/