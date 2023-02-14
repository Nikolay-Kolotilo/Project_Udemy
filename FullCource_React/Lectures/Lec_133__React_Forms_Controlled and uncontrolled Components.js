/*Lec_133__React_Forms_Controlled and uncontrolled Components
        https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/
        https://ru.reactjs.org/docs/forms.html

0:20. Отмена стандартного поведения. Только через  
        eventPreventDefolt. - Иначе будет происходить перезагрузка страницы.
        onInput И onChange - будут вести себя идентично. 
0:30. employees-add-form.js
0:40. Переписаваем на классы EmployeesAddForm
2:10. Метод для отслеживания состояния для обоих инпутов. Навешиваем обработчик событий onChange {onValueChange}
3:05. Создаем метод onValueChange. Меняем состояние this.setstate.
5:00. Синтаксис метода:
*/
onValueChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
/*6:10. Управляемые компоненты:
8:20. Управляемый компонент:*/
<input type="text"
    className="form-control new-post-label"
    placeholder="Как его зовут?" 
    name='name'
    value={name}
    onChange={this.onValueChange} />
//Это когда данные берутся из State, а не из полей дом дерева.
/*9:15. Значения полей, которые хранятся прямо в ДОМ дереве. Дополнительно почитать здесь: 
        https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/
10:00. Единственный неуправляемый инпун в Реакте это inputTypeFile
 */