'use strict';

/*   Дус 90.    Async_Await (ES8) - Аналог таймаута при работе с сервером.
2:15. Запуск json-server.
3:00. Создание Функции общения с Сервером.
4:05. Создание const postData = () => { };
7:20. Fetch Выдает асинхронный код. !!! Происходит выполнение Функции до получения данных от сервера!!!
9:05.  Async. 'const postData = async (url, data) => {...'. Это парный оператор (работает вместе с Await).
9:25.  Await. Оператор ставится перед теми операциями, которые необходимо дождаться.
              Используются только в паре!
              'const res = await fetch(url, {...'   //Lec_90 5:05
              'return await res.json();...'
11:25 Использование postData в скрипте приложения
13:20.Сохранение запроса в db.json. - Скрипт выполнен верно. 
      Сервер автоматически подставил уникальный идентефикатор: "id": 1
13:50. Преобразование formData в json.
14:30. Метод entries внутри fornData. Этот метод возвращает массив массивов собственных перечисляемых свойств
       указанного объекта. См. Lec 88 23:25. Object.entries(obj).
15:50. Превращение массива с массивами в объект (обратная операция).
    - Object.fromEntries
16:35. Берем Форм дату, превращаем в Массив массивов, затем в объект массивов и получаем json. 
17:25. Получение карточек меню с сервера.
18:30. Обработка ошибок при fetch запросах (404, 500, 502 и т.д.).
18:50. Свойства промиса:
    - .ок    - св-во, которое говорит, что все получили или нет.
    - status - Статус 200 (ок), 400, 500. и т.д.
19:15. if (!res.ok) { throw new Error(`Could not fetch ${url}, status ${res.status}`);} .
19:50. throw -Оператор выкидывающий ошибку.
21:25. Формирование карточек меню на основе данных с сервера getResource.
24:15. Синтаксис деструктуризации объекта (Как по мне так меняем шило на мыло..).
27:25. Формирование верстки на лету:
*/

getResource('http://localhost:3000/menu')
    .then(dara => createCard(dara));

function createCard(data) {
    data.forEach(({img, altimg, title, descr, price}) => {
        const element = document.createElement('div');
        element.classList.add('menu__item');
        element.innerHTML = `
            <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${title} - ${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            </div>
            `;
        document.querySelector('.menu .container').append(document);
    });

}
    