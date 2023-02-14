/*Lec_135__React_State Immutability and Custom Events
        https://habr.com/ru/company/developersoft/blog/302118/
        https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        https://www.udemy.com/course/javascript_full/learn/lecture/28568923#questions
        https://www.npmjs.com/package/uuid
        https://lodash.com/docs/4.17.15#uniqueId

0:10. Удаление сотрудников по нажатию на корзинку.
0:50. При нажатии на корзинку данные должны удалиться из data в App.js и затем перерисовать наше приложение
1:20. Передача функции в компонент через EmployeesListItem, получаем:
        < EmployeesListItem
            key={id}
            {...itemProps}
            onDelete={() => {console.log('Deleted')}} />
1:50. Передаем в employees-list-item - onDelete:
        const { name, salary, onDelete } = this.props
... 
        <button type="button"
                className="btn-trash btn-sm "
                onClick={onDelete}>
            <i className="fas fa-trash"></i>
        </button>
3:10. Прокидываем проперти в app.js
6:20. Function App - Переделка в Класс. Импортируем Component
8:35. Добавление метода в App на примере консоль лог
9:35. Формирование метода в App для удаления сотрудника через this.Setstate
11:00. Поиск объекта в массиве по индексу. Метод массива arr.findIndex
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id == id)  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        })
    }
13:05. Удаление элемента массива (сотрудника) по полученному findIndex индексу.
Так как Через setState менять (иммутировать) его нельзя то для изменения надо создать копию объекта с внесенными изменениями.
Про иммутабельность здесь:  https://habr.com/ru/company/developersoft/blog/302118/
использовать data.splice(index, 1) - нельзя т.к. работаем напрямую с объектом. splice - изменяет содержимое массива. 
Для правильного удаления применим:
                **************
17:40.  Вариант 1.
    метод slice - копирует часть массива и создает новый
        deleteItem = (id) => {
            this.setState(({ data }) => {
                const index = data.findIndex(elem => elem.id == id)  
                const before = data.slice(0, index); - копируем массив начиная с нулевого индекса и до нашего. 
                const after = data.slice(index+1); - копируем массив начиная со следующего на нашим индекса. 

                const newArr = [...before, ...after]  - Склеиваем в новый массив без нашего элемента.
                return {
                    data: newArr
                }        })    }
                ********************
20:040.  Вариант 2. используем метод массива filter
    метод slice - копирует часть массива и создает новый
        deleteItem = (id) => {
            this.setState(({ data }) => {


                return {
                    data: data.filter(item => item.id !== id) - перебираем все элементы и отфильтровываем и перзаписываем
                                                                те элементы, которые не совпадают с id.
                }        })    }
22:35. ДЗ. 
23:15. Подсказка по генерации id. this.maxId = 4;
24:10. onSubmit  - для отправки формы

onSubmit={onSubmit}
*/