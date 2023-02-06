/*Lec_131__React_Events in React_this
            https://ru.reactjs.org/docs/handling-events.html
0:25. Для назначения события мы должны прописать событие в качестве аргумента (в теге) в 
        формате СэмэлКейс.
onClick={this.nextYear}
onChange={this.nextYear}
onInput={this.nextYear}
onSubmit={this.nextYear}
и др. 
*/
import { Component } from 'react';
class WhoAmI extends Component() { //props is an object.
    constructor(props) {
        super(props); //4:25. super - Ключевое слово
        this.state = {
            years: 27,
            position: ''
        }
    }
    nextYear = () => {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1 //11:25
        }))
    }
    commitInputChanges = (e, arg) => {
        console.log(arg)
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props; 
        const { position, years } = this.state; 

        return (
            <div>
                <button onClick={this.nextYear}>{ this.state.text }</button> //8:25
                <h1>My name is {name},
                    surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form >
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'arg')} />
                </form>
        </div>
        )
    }        
}
//1:55. В Реакте onInput и onChange работают  одинаково. Лучше использовать onChange.
//В наттивном JS они работают так:
//onInput - срабатывает сразу во время ввода данных;
//onChange - срабатывает когда с поля ввода уводится курсор;
//2:25.
//название события      вызываемый метод
//          onChange = { this.commitInputChanges  }
//3:00. Создаем метод commitInputChanges
//        console.log(e.target.value); target - на каком элементе произошло событие.
//3:55. onChange = { this.commitInputChanges  } внутри скобок получаем объект события как единственный аргумент.
//4:10. Значение e.target.value записываем в конструктор: 
    years: 27,
    position: ''
/*5:25. Добавляем position в заголовок h1
//6:25. addEventListener вызввать специально не нужно, это делает реакт.
//6:50. Для отмены стандартного поведения браузера надо использовать ТОЛЬКО eventPreventDefault.
//7:10. Использование стрелочной формы методов класса. Эта форма используется так как у нее нет контекства вызова this.
//В таком случае у каждого компонента останутся свои свойства и пропсы. Иначе THIS станет undefined
//10:00. Варианты избегания проблемы THIS:
            1. Вариант. Использование конструкции bind. Синтаксис:*/
nextYear() {
    console.log('+++');
    this.setState(state => ({
        years: state.years + 1 //11:25
    }))
}
           
this.state = {
    years: 27,
    position: ''
}
this.nextYear = this.nextYear.bind(this) // - по факту проиходит жесткая привязка this к этому экземпляру.
//11:50.    2. Вариант. Использование использование стрелочных функций*/
//12:45.    3. Вариант. Вызвать событие через анонимную стрелочную функцию: */
    nextYear() {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1 //11:25
        }))
    }
<button onClick={() => { this.nextYear() }}>{this.state.text}</button> //Это ф-ия колбэк, запускается при каждом рендере
            //и если она передается также и в пропс то при изменении пропс произойдет также перерисовка, из - за чего теряется
            //быстродействие.
//14:10. В компоненте будет перерисовано только то, что содержит state.
//15:00. Использвание аргументов в обработчике событий. Здесь можно применить стрелочную функцию,
// вместо
    < input type = "text" onChange = { this.commitInputChanges } /> //применить стрелку:

    <input type="text" onChange={(e) => this.commitInputChanges(e, 'arg')} /> //тогда в commitInputChanges добавляем аргументы:

    commitInputChanges = (e, arg) => {
        this.setState({
            position: e.target.value
        })
    }


