/*Lec_128__Working with lists and matching algorithms
            https://ru.reactjs.org/docs/reconciliation.html
            https://habr.com/ru/post/444276/

3:00. Проблемы перерисовки страницы

                    ************************
3:20. Алгоритм реконцеляции или сверки
3:35. Ситуация ПЕРВАЯ. например если в коде     
    <ul className="app-list list-group">
        {elements}
    </ul>
изменить ul на div то прозойдет перерисовка, т.к. Реакт посчитает, что ДОМ дерево полностью изменилось.
в таком случае произойдет замена всего дерева включая и elements и создание заново нового ДОМ дерева.
Тоже самое будет происходить, когда переключаем страницы в одностраничном сайте !! :).
4:50. Ситуация ВТОРАЯ. Например если в коде меняются только атрибуты (prop-сы), 
то React будет обновлять только изменившийся элемент.
5:10. Ситуация Третья. Например если в коде добавляются только атрибуты (prop-сы), 
то React заменит тег <ul className="app-list list-group">, а затем перерендерит (рекурсивно) все elements с новыми классами.
5:30. Работает это так: React сохраняет копию существующего ДОМ дерева, создает новое дерево и затем сравнивает их
между собой следующим образом:
- при одинаковых элементах - переходит к следцющему;
- при разных элементах - новый элемент вставляет вместо старого в раельном ДОМ дереве.
7:10. Ситуация четвертая. При появлении нового элемента в конце списка все норм, т.к. сравнение идет по порядку 
(с первого элемента по последний). При появлении нового элемента в начале списка все плохо - т.к. 
будут перерисованы все остальные элементы, даже если они не менялись, т.к. сравнение идет также по порядку.
9:10. Решение проблемы в React - добавление УНИКАЛЬНОГО идентефикатора.
например добавляем ID:
        { name: 'John', salary: 800, id: 1 },
        { name: 'Alex', salary: 3000, id: 2 },
        { name: 'Nikolay', salary: 5000, id: 3 }        
9:45. Затем переходим в employees-list.js и добавляем:
const elements = data.map(item => {
    const {id, ...itemProps} = item
    return (
        <EmployeesListItem key={id} {...item} />
11:20. Использование в консоли установленного Аддона React (Components, Profiler).
12:20. УТОЧНЕНИЕ! Уникальные аргументы должны быть уникальными только для соседей, а не глобально.
В других компонентах эти id могут повторяться.
13:00. Использование индекса элемента (если с Бекэнда не пришли id):
const elements = data.map((item, i) => {
    const {id, ...itemProps} = item
    return (
        <EmployeesListItem key={i} {...item} />
13:45. Плохая практика. - использование случайных значений id.
14:20. Резюме:
    - React обновляет только те элементы, которые действительно изменились;
    - В этом ему помагает алгоритм согласования, который сравнивает старое и новое ДОМ деревья.
    - При работе со списком одинаковых сущкостей - надо использовать атрибуд key, для ускорения работы приложения.
*/