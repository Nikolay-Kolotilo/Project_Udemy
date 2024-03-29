/*Lec_129__React_Component states
            https://ru.reactjs.org/docs/reconciliation.html
            https://habr.com/ru/post/444276/
            https://ru.reactjs.org/docs/state-and-lifecycle.html

1:20. Состояние компонента - это конкретное состояние компонента, которое он выполняем в данный момент из множества
        тех вариантов для которых выполнения которых он и быо создан.
        для счетчика это сам номер счета, для слайдера - это номер слайда который он отображает в данный момент. 
2:00. Состояние в классовых компонентах, на примере урока 126__*/
import { Component } from 'react';
class WhoAmI extends Component() { //props is an object.
    constructor(props) {
        super(props); //4:25. super - Ключевое слово
        this.state = {
            years: 27,
            text: '+++'
        }
    }
    nextYear = () => {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1 //11:25
        }))
    }

    render() {
        const { name, surname, link } = this.props; //4:50
        return (
            <div>
                <button onClick={this.nextYear}>{ this.state.text }</button> //8:25
            <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
            <a href={link}>My profile</a>
        </div>
        )
    }        
}
//3:25. Работа Props внутри классовых компонентов:
function App() {
    return (
        <div className="app">
            <WhoAmI name='John' surname='Smith' link='facebook.com'/>
            <WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
        </div>
    )
}
//4:00. При вызове класса, компонет создает экземпляр.
//что бы в экземпляр передать Props в классе надо использовать конструктор.

                                                **************************
//4:40. Теперь внутри созданного экземпляра будет свойство this.props!!!!! с объектом, содержащим
//то, что мы туда передали.
//6:05. Динамическое изменение данных внутри компонентов, т.к. props ТОЛЬКО для чтения
            *******
//6:25. Состояние. Для создания состояния и есть конструктор. this.state для описания динамических элементов.
//8:15. Назначение события на кнопку. < button onClick = { this.nextYear } >
//9:00. Создаем метод this.nextYear. Синтаксис - ОБЯЗАТЕЛЬНО только стрелочную функцию.                                                    
                                //В классах работает ТОЛЬКО стрелочная функция.
nextYear = () => {
    console.log('+++');
}
//10:05. Правильное изменение состояния. Напрямую мы состояние менять не можем
//10:50. Мы должны использовать специальную команду. Это команда:
this.setstate // Которая принимает в себя объект с новым состоянием:
this.setstate({ years: ++this.state.years }) //11:25. При таком синтаксисе, происходит мутация состояния.
//Поэтому лучше применять такой синтаксис:
this.setstate({ years: this.state.years + 1 })
//12:15. При изменении this.state происходит перерисовка всего компонента
//12:40. Ньюанс при работе this.state - Это АСИНХРОННАЯ команда и если клики происходят быстрее чем обрабатывается
//запрос то счетчик может сбиться, что будет не тем что ожидается от него.
//13:50. Для исправления - необходимо все изменения передавать через коллбек, тогда this.state будет выглядеть:
this.setstate(state => ({ years: ++this.state.years })) 
                *********
//14:35. Новый синтаксис: 
    (state => ({ years: state.years + 1 }))
//- если ф - цию обернуть в скобки то можно не писать return и т.д. Но надо УДАЛИТЬ THIS
//16:10. Несколько свойств в state:
this.state = {
    years: 27,
    text: '+++' }
//Это значение будем передавать в кнопку:
    < button onClick = { this.nextYear } > { this.state.text }</> 
/*17:00. Тогда при изменении всойства возраста, свойство текст меняться не будет.
            *****************
17:25. Резюме урока:
1. У компонента может быть внутреннее динамически меняющееся состояние;
2. Оно может быть как у классовых так и у функциональных компонентов;
3. State напрямую менять нельзя, только через команду setstate$
4. setstate - это асинхронная операция;
5. В команде setstate мы можем менять только те свойства, которые нам нужны. Остальные останутся без изменений.


*/



        


