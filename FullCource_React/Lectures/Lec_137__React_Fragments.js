/*Lec_137__React_Fragments.js
        https://ru.reactjs.org/docs/fragments.html
1:00. Применение фрагментов для отмены оборачивания элементов в родительский тег:

- 1 Способ. Для этого надо вытащить способ (Фрагмент) из Реакта, как мы вытаскивали Компонент
import { Component, Fragment } from 'react', тогда синтаксис будет такой:
return (
    <Fragment>
        <AppInfo/>
        <div className="search-panel"></div>
        <EmployeesList />
        <EmployeesAddForm/>
    </Fragment>
)
4:10. Этот способ может пригодиться когда надо назначить KEY. Фрагмент позволяет это делать.
        в пустом теге это сделать нельзя, Реакт этого НЕ поймет!!! В таком случае синтаксис должен быть таким:
        React.Fragment key='123'
3:35.
- 2 Способ. Более частый способ, когда Фрагмент импортировать не нужно - использование пустого тега:
return (
    <>
        <AppInfo/>
        <div className="search-panel"></div>
        <EmployeesList />
        <EmployeesAddForm/>
    </>
)
это сокращенная запись Реакт это понимает
*/