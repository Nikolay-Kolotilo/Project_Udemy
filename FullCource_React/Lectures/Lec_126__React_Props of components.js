/*Lec_126__React_Props of components.js
        https://ru.reactjs.org/docs/components-and-props.html

***********
        2:30. Props. Exampl 1_1*/
function WhoAmI(props) { //props is an object.
        return (
                <div>
                        <h1>My name is {props.name}, surname - {props.surname}</h1>
                        <a href={props.link}>My profile</a>
                </div>
        )
}
        
//5:00. Creating properties of props. props будет формироывться из атрибутов: 
                        //<WhoAmI name='John' surname='Smith' link='facebook.com' />
function App() {
        return (
                <div className="app">
                        //      props.name   props.surname      props.link
                        <WhoAmI name='John' surname='Smith' link='facebook.com'/>
                </div>
        )}
//В итоге получим строку: 
//My name is John, surname - Smith

//*********Exampl 1_2
//6:50. Props. Exampl 1_2   */
function WhoAmI(props) { //props is an object.
        return (
                <div>
                        <h1>My name is {props.name}, surname - {props.surname}</h1>
                        <a href={props.link}>My profile</a>
                </div>
        )}
//5:00. Creating properties of props. props будет формироывться из атрибутов: 
                        //<WhoAmI name='John' surname='Smith' link='facebook.com' />
function App() {
        return (
                <div className="app">
                        //      props.name   props.surname      props.link
                        <WhoAmI name='John' surname='Smith' link='facebook.com'/>
                        //      props.name   props.surname      props.link
                        <WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
                </div>
        )}
//В итоге получим строки:
//My name is John, surname - Smith
//My name is Alex, surname - Shepard

//*********Exampl 2_1
//6:50. Props. Exampl 2_1   С Деструктуризацией*/ 
function WhoAmI({name, surname, link}) { //props is an object.
        return (
                <div>
                        <h1>My name is {name}, surname - {surname}</h1>
                        <a href={link}>My profile</a>
                </div>
        )}
//5:00. Creating properties of props. props будет формироывться из атрибутов: 
                        //<WhoAmI name='John' surname='Smith' link='facebook.com' />
function App() {
        return (
                <div className="app">
                        //      props.name   props.surname      props.link
                        <WhoAmI name='John' surname='Smith' link='facebook.com'/>
                        //      props.name   props.surname      props.link
                        <WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
                </div>
        )}
//В итоге получим те же строки как в пункте 1_2:
//My name is John, surname - Smith
//My name is Alex, surname - Shepard

//8:00. Значения атрибутов - неизменяемые и идут только на чтение, для динамического изменения
//        необходимо полностью перерисовать (пересоздать) страницу
//8:30. ВАЖНОЕ правило Реакта - компонент не должен изменять свои пропсы
<h1>My name is {name}, surname - {surname}</h1> // Это элемент и поменять его также нельзя.
        //Один раз создали и далее этот элемент неизменяем.

                        //******************
/*9:30. Что можно передавать как свойства, передавать можно все что угодно:

- Объект (смешанный вариант с простыми свойствами):                               */
function WhoAmI({name, surname, link}) { 
        return (
                <div>
                        <h1>My name is {name.firstName}, surname - {surname}</h1>//Свойства объекта можно передавать,
                                                                                А сам объект - НЕТ!!!
                        <h1>My name is {name}, surname - {surname}</h1>//Из-за name БУДЕТ ОШИБКА!!!
                        <a href={link}>My profile</a>
                </div> )}
                        //      props.name   props.surname      props.link
                        <WhoAmI name={{ firstName: 'John' }} surname='Smith' link='facebook.com' />
                        

//11:00. - Функция (смешанный вариант с простыми свойствами):                               */
function WhoAmI({name, surname, link}) { 
        return (
                <div>
                        <h1>My name is {name()}, surname - {surname}</h1>//name() - Вызов функции,
                        <h1>My name is {name}, surname - {surname}</h1>//Из-за name БУДЕТ ОШИБКА!!!
                        <a href={link}>My profile</a>
                </div> )}
                        //      props.name   props.surname      props.link
                        <WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com' />
//12:10. Правила называния Props-ов. Лучше их называть так, что б они имели смысл с точки зрения самого компонента.
//А во вторую очередь - тех компонентов, которые его рендерят. Тоесть внутренности компонента важнее оболочки.



