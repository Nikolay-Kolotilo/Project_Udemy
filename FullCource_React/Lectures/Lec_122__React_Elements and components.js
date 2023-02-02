/*Lec_122__React_Elements and components
        https://ru.reactjs.org/docs/components-and-props.html
0:10. React Компонент - Это структурные блоки функциональности (переменные с элементами, например).
1:30. React Компонент - это то из чего состоят структурные блоки:
        заголовки, теги, инпут и т.д.
        Элементы неизменяемые!!! Для изменения на странице все элементы должны быть полностью перерисованы.
        Они могутбыть только пересозданы и заново помещены на страницу.
6:30. Правила React Компонентов:
        - всегда с большой буквы, и импортируется из другого файла
4:25. Работаем с App.js 
        function App() {} возвращает из себя набор элементов:
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
5:40. Создание своих компонентов. См. App.js к уроку
function App() {
  return (
    <div className="App">
      <Header/> 7:00. Здесь 2 варианта написания: <Header/> и <Header><Header/>
    </div>
  );
}
7:40. Создание компонента Field
*/
const Field = () => {
  return <input placeholder='Type here' type='Text'/>
}
//8:15. Компонент с синтаксисом функции
function stn() {
  return <button/>
}
//. Затем подставляем в:
function App() {
  return (
    <div className="App">
      <Header /> 
      <Field />
      <Btn/> 
    </div>
  );
}
//9:15. Принцип формирования Конмпонентов:
// - Если компонент можно использовать в другой части.
// - Или он стал слишком большим.
// 10:00. Тег с содержимым ({}):
function Btn() {
    // const text = 'Log in'
    const res = () => {
        return 'Log in'
    }
  return <button>{res()}</button>
}
// 10:50. Тег с вызовом функции:
function Btn() {
    // const text = 'Log in'
    const res = () => {
        return 'Log in'
    }
  return <button>{res()}</button>
}
// 11:40. В элементы можно помещать другие элементы:
function Btn() {
    // const text = 'Log in'
    const res = () => {
        return 'Log in'
    }
    const p = <p>Log in</p>
  return <button>{p}</button>
}
//12:20. Во внутрь скобок можно помещать выражения:
  return <button>{2+2}</button>
//12:40. Примеры условного вражения (условия работают ТОЛЬКО через тернарный оператор (?)):
function Btn() {
    const text = 'Log in'
    const logged = true
  return <button>{logged ? 'Enter' : text}</button>
}
//15:55. Если надо прописаль условия полноценно:
function Btn() {
    const text = 'Log in'
    const logged = true
    if (condition) {
        
    } else {
        
    }
  return <button>{/*Переменная-Результат из if */}</button>
}
//16:20. Мвнипуляция внутренностями атрибутов
const Field = () => {
  const holder = 'Enter here'
  return <input placeholder={holder} type='Text'/> //Пример использования CSS классов
}
//17:30. Назначение инлайн стилей.
const Field = () => {
  const holder = 'Enter here'
  const styledField = {
    width: '300px'
  };
    return <input // Ыорма записи, когда много компонентов.
        placeholder={holder}
        type='Text'
        style={styledField} />
}
//19:10. Правила использования компонентов: мы можем и должны экспортировать и импортировать в другие фыйлы.
//19:50. Правила экспорта:
export {Header};
//20:30. Правила импорта:
import { Header } from "./App";
//21:00.  Классы это тоже функции.
//21:30.  Классы это тоже функции, пример:
class Field extends React.Component { } //Наследование класса из Реакт. Таким образом наследуем
                                        //функциональные вещи из класса Реакта.
                                        //см. урок про наследование.
//22:50. Импорт реакт в App.js: import React from 'react';
//23:50. Альтернативная запись:
import {Component} from 'react';
class Fielld extends Component {} 
//24:20. Метод компонента:
class Fielld extends Component {
  render() {
    const holder = 'Enter here Fielld'
    const styledField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type='Text'
      style={styledField} />
  }
}
//Лекция 122__ Дополнительный синтаксис импорта: import React, {Component} from 'react'  !!!


