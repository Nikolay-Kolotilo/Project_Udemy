/*Lec_138__React_Practice_Implement searches and filters.js
        https://ru.reactjs.org/docs/fragments.html
0:15. Реализация поиска - логика
1:20. Добавление state.term: '' в app.js
1:35. вынимаем state.term в render.
2:00. Пишем метод для поиска serchEmp.
4:00. serchEmp ищем все совпадения как при нажатии Ctrl+F.
5:50. Создание переменной visibleData для отфильтрованных данных.
6:30. Тест visibleData на странице (Меняем пропсы в EmployeesList):*/
erchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

render() {
    const { data, term } = this.state;
    let employeesQ = this.state.data.length,
        increaseQ = this.state.data.filter((item => item.increase === true)).length
    const visibleData = this.serchEmp(data, term);
    return (
        <div className="app">
            <AppInfo
                employeesQ={employeesQ}
                increaseQ={increaseQ}
            />
            <div className="search-panel">
                <SearchPanal />
                <AppFilter />
            </div>
            <EmployeesList
                data={visibleData}
/* 7:00. Работаетм с search-panel для задания term. Переделываем SearchPanal в класс
8:00. Подъем состояния до компонента app для установки term в конструкторе компонента app.
Для этого в app создаем новый метод onUpdateSearch. Длинный синтаксис записи:
onUpdateSearch = (term) => {
    this.setState({term: term})
}
8:50. Короткий синтаксис записи:
onUpdateSearch = (term) => {
    this.setState({term})
}
9:00. Передаем метод onUpdateSearch в search-panel через props: 

<SearchPanal onUpdateSearch={this.onUpdateSearch}/>

9:40. Создание метода в search-panel для корректной работы внутренних данных: 
11:10. Проброска состояния term из  search-panel в app (в term) через this.props.onUpdateSearch(term):
    onUpdateSearch = (e) => { - Эта Ф-ция работает локально в search-panel
        const term = e.target.value;
        this.setState({ term })
        this.props.onUpdateSearch(term); // Проброска наверх в app Эта Ф-ция работает приходит из app компонента.
    }
13:50. ДЗ - Реализовать фильтры на странице. 
14:35. В state добавляем пропс filter: ''
В рендер вынимаем его из Стейта:     render() { const { data, term, filter } = this.state;  ......
14:50. Добавляем метод для фильтрации. 
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'noreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }
18:30. Применение созданного метода (ларчик просто открылся), в Рендере меняем: 
        visibleData вставляем в качестве аргумента в filterPost вместо items:
            
    const visibleData = this.filterPost(this.serchEmp(data, term), filter)
20:45. Работа с app-filter.js (здесь формируем данные для удобства работы с колмчеством кнопок): 

class AppFilter extends Component {

    render() {
        const buttonsData = [
            { name: 'all', label: 'Все сотрудники' },
            { name: 'rise', label: 'На повышение' },
            { name: 'noreThen1000', label: 'З/П Больше 1000$' },
            
    ];
        return (
23:45. Перебираем массив данных из созданной переменной buttonsData (при помощи метода MAP): 
        const buttons = buttonsData.map(({ name, label }) => {
                return (
                    <button className="btn btn-light"
                        type='button'
                        onClick={this.onFilterAll}
                        kay={name}>
                        {label}
                </button>
                )
            })
24:50. Добавляем обязательно key:  kay={name}>.
25:25. Формируем классы отображеня кнопок.  
Для этого создаем пропс в AppFilter:

            <AppFilter filter={filter} /> // filter это this.state.filter,
            который мы деструктурировали в const {data, term, filter} = this.state;

теперь Пропс передаем в app-filter:

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'noreThen1000', label: 'З/П Больше 1000$' },            
    ],
        buttons = buttonsData.map(({ name, label }) => {
            const active = props.filter === name
            const clazz = active ? 'btn-light' : 'btn-outline-light'
            return (
                <button className={`btn ${clazz}`}
                    type='button'
                    key={name}>
                    {label}
                </button>
            )
        })        
    return (
        <div className='btn-group'>
            {buttons}
        </div>    )}

30:50. Формирование прописанной логики по кликам со страницы: 
формируем onFilterSelect

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

32:00. Передаем его в AppFilter:  <AppFilter filter={filter} onFilterSelect={this.onFilterSelect } />

32:10. В app-filter обращаемся к пропсам и назначаем обработчики событий:
                <button className={`btn ${clazz}`}
                    type='button'
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
                </button>

35:30. ДЗ со звездочкой





*/