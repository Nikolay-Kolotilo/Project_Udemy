/*Lec_143__React_Styles_Styled Components.js
            https://styled-components.com/
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
            https://jsramblings.com/how-to-use-media-queries-with-styled-components/

0:15. CSS in JS. Технология CSS внутри файла JS.
0:50. Установка технологии в проект

            npm install --save styled-components

1:40. Styled Components могут использовать условия внутри своих стилей, из документации:*/
const Button = styled.a`
//This renders the buttons above... Edit me! 
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

/* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
`
/*2:00. 
styled  - это элемент библиотеки Реакт. 
a       - тэг
``      - бэктики тега для всех стилей
Такой прием называется тегированными шаблонными строками для стилизации
2:45. Для использлвание - необходимо сначала их импортировать в файл из styled-components:

            import styled from 'styled-components';

3:10. Применяемый синтаксис:
const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;
4:00. return(
    <Wrapper>
    
    </Wrapper>
)
4:30. Классы назначаются полностью рандомные для избегания пересечений с предыдущими стилями. 
5:35. Еще пример:
const EmpItem = styled.div`
    padding: 20px;
    margin-buttom: 15px;
    border-redius: 5px;
    box-chadow: 5px 5px 10px rgba(0,0,0, .2);
`;
6:55. 
const Header = styled.h2`
    font-size: 22px;
`;
подставляем в верстку:
        return (
            <EmpItem>
                <AppInfo
                    employeesQ={employeesQ}
                    increaseQ={increaseQ}
                />
                <Header>
                    <SearchPanal onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </Header>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </EmpItem>
        )

7:40. Из примера следует, что styled-components поддерживает взаимную вложенность друг в друга. 
8:00. Еще пример:
const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-chadow: 5px 5px 10px rgba(0,0,0, .2);
`;
return (
    <button onClick={this.nextYear}>+++</button>
)
8:55. Возможгый способ применения - создание файла готовых компонентов и замет их импортировать и экспортировать.
например:

export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0, .2);
    box-chadow: 5px 5px 10px rgba(0,0,0, .2);
`;
импорт внутрь другого файла:

import {Button} from './App'

10:10. Ньюансы использования данного способа работает наследование стилей от другого компонента:

import styled from 'styled-components';
import {Button} from './App'
const BigButton = styled(Button)`           // используем функцию styled()
    margin: 0 auto;
    width: 245px;
`; 

Использование
<BigButton>+++</BigButton>

12:05. Проблема использования. Ксли мы хотим изменить кнопку на ссылку - тогда используем такой синтаксис:

<BigButton as='a'>+++</BigButton>

13:20. Вариант использования. styled-components - поддерживает вложенность как SASS:

const EmpItem = styled.div`
    padding: 20px;
    margin-buttom: 15px;
    border-redius: 5px;
    box-chadow: 5px 5px 10px rgba(0,0,0, .2);
    a{
        display: block;
        margin: 10px 0 10px 0;
        color: black;
    }
    input{
        display: block;
        margin-top: 10px;
    }
`;

15:10. Вариант использования. Поддержка своих Пропсов:

<EmpItem active>            //active - передаем позицию актив, тогда в стилях...
    <AppInfo
        employeesQ={employeesQ}
        increaseQ={increaseQ}
    />
    <Header>
        <SearchPanal onUpdateSearch={this.onUpdateSearch}/>
        <AppFilter filter={filter}
            onFilterSelect={this.onFilterSelect} />
    </Header>
    <EmployeesList
        data={visibleData}
        onDelete={this.deleteItem}
        onToggleProp={this.onToggleProp}
        />
    <EmployeesAddForm
        onAdd={this.addItem}
    />
</EmpItem>

//active - передаем позицию актив, тогда в стилях:

const EmpItem = styled.div`
    padding: 20px;
    margin-buttom: 15px;
    border-redius: 5px;
    box-chadow: 5px 5px 10px rgba(0,0,0, .2);
    a{
        display: block;
        margin: 10px 0 10px 0;
        color: {props => props.active? 'orange' : 'black'}; /// Применяем пропсы. 
    }
    input{
        display: block;
        margin-top: 10px;
    }
`;

17:00. Важное:
1. Вендорные префиксы ставятся автоматически;
2. Различные комбинации CSS селекторов и их отношений также будут работать;
3. Псевдо селекторы и псевдо элементы также точно работают;
4. Также можно создавать анимации см. документацию;

            Плюсы технологии
1. Инкапсуляция стилей - нет пересечения стилей, т.к. названия класов - рандомные. 
2. Нет необходимости использовать методики по типу БЭМ. Т.к. Стили не пересекаются.
3. Использование пропсов и условий. 
4. Браузерные и вендорные префиксы ставятся автоматически.

18:20.      Минусы технологии
1. Надо привыкнуть к синтаксису. 
2. При множественном использовании можно запутаться в элементах. 
3. Все условия styled-components можно реализовать и через обычные стили. 
4. Названия стилей превращаются в кашу. И в консоли не возможно ориентироваться по классам. 
5. Если CSS и JS в проекте - то они в проекте на весь проект. 
6. В случае ошибки приложение полностью Сломается.

*/


