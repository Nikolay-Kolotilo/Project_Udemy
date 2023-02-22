/*Lec_144__React_Styles_Ready - made component libraries.js
            https://react-bootstrap.github.io/
            https://reactstrap.github.io
            https://mui.com/
            https://habr.com/ru/post/335244/
            https://ant.design/
                
                    
                    ***********************
1:00. Использование react-bootstrap.
1:45. Установка react-bootstrap в проект:   https://react-bootstrap.github.io/

            npm install react-bootstrap bootstrap --save

2:30. импорт в главный CSS файл (The following line can be included in your src/index.js or App.js file):

            import 'bootstrap/dist/css/bootstrap.min.css';

3:15. Применение стилей в проекте - согласно документации.
                        ***
3:30. Гриды в react-bootstrap  https://react-bootstrap.github.io/layout/grid/:

        import Container from 'react-bootstrap/Container';  
        import Row from 'react-bootstrap/Row';
        import Col from 'react-bootstrap/Col';

        function ContainerExample() {
        return (
            <Container>             //Ограничивает ширину нашего контента
            <Row>                   //Строка
                <Col>1 of 1</Col>   //колонки внутри строки
            </Row>
            </Container>
        );
        }

        export default ContainerExample;        //Экспортируем для использования в другом файле проекта
                        ***
7:35. Компонент с Кнопками (https://react-bootstrap.github.io/components/buttons/):

import Button from 'react-bootstrap/Button';

function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}
export default TypesExample;

7:55. Возможна настройка:   Outline buttons,    Button tags,    Sizes,                  Block buttons, 
                            Active state,       Disabled state, Button loading state    и т.д.
8:15. API#Button. Есть такое проперти как as и работает как Styled-component (для установки типа тега). 
                        ***
8:35. Карусель. https://react-bootstrap.github.io/components/carousel/

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
    </Carousel>
  );
}
export default UncontrolledExample;
                        ***
10:15. Форма. https://react-bootstrap.github.io/forms/overview/

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default BasicExample;

11:20. Назначение Маржинов:
        function ContainerExample() {
        return (
            <Container className='mt-5 mb-10'>  ///'mt-5 margin-top: 50px; margin-bottom: 100px' так обозначается в бутстрапе
            <Row>                 
                <Col>1 of 1</Col>   
            </Row>
            </Container>
        );
        }

                    ***********************
12:20. Material UI (Материал Дизайн)- Overview https://mui.com/
12:35. Установка

        npm install @mui/material @emotion/react @emotion/styled

                        ***
13:10. Элемент Скелетон https://mui.com/material-ui/react-skeleton/

                    ***********************
14:10. CSS Modules.   https://habr.com/ru/post/335244/

* /


