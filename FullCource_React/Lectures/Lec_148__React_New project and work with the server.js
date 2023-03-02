/*Lec_148__React_New project and work with the server.js
            https://developer.marvel.com/                                                     - API Марвел
            https://www.figma.com/file/xiC1B6ZlHvbiUK6FO3caxN/Marvel-DB?node-id=0%3A1         - Макет Фигма
            https://github.com/yankovalenko94/JS_task_answers/tree/master/React_Redux_step_10 - Код из урока
            https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6              - Как скрывать ключи API.

1:30. Регистрация в Марвел. 
3:40. Внимание! В списке доменов поставить *.  https://developer.marvel.com/account
5:02. Скачивание и установка макета приложения. 
проблема при запуске Реакта решается здесь: https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported/69699772#69699772
Сделать нужно следующее: 
In your package.json: change this line
        "start": "react-scripts start"
to
        "start": "react-scripts --openssl-legacy-provider start"
9:50. Импорт изображений. Для импорта картинок из папки resources необходимо в файл прописать импорт по синтаксису JS:
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
Используется здесь: <img src={thor} alt="Random character" className="randomchar__img"/>
Webpack подставит изображение вместо src={thor}
10:40. Установка пакетов NPM. Устранение желтых ощибок - позже.
11:00. Создание запросов от API Марвел. 
11:50. Функция GetRedource в MarvelService.js и создание класса MarvelService на чистом JS.

class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
}

13:40. Добавление методов для формирования запросов к API.
            getAllCharacters = () => {
                return this.getResource();
            }
14:30. Переходим на сайт марвел. Получаем строку:
https://gateway.marvel.com:443/v1/public/characters?apikey=8d102c7c3676008f79d7   

, где apikey=8d102c7c3676008f79d77d63467668 это наш паблик ключ при регистрации. 
16:10. подставляем строку в getResource
16:50. Экспортируем класс. 
        class MarvelService {
            getResource = async (url) => {
                let res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
                }
                return await res.json();
            }

            getAllCharacters = () => {
                return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=8d102c7c3676008f79d77');
            }
        }

        export default MarvelService;
17:20. Импортируем в index.js: 
        import MarvelService from './services/MarvelService';
17:40. Создание экземпляра классаMarvelService

19:50. Установка лимита по количеству отодражения карточек на странице. limit 9; offset 210
21:40. Получение characterID
        const marvelService = new MarvelService();
        marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

25:42. Оптимизация класса в index.js. Использование синтаксиса а подчеркиванием означает, что свойчтво менять нельзя:
        _apiBase = '....';
27:00. получаем: 
        _apiBase = 'https://gateway.marvel.com:443/v1/public/';
        _apiKey = 'apikey=*********';

27:30. Редактируем метод getAllCharacters: 
        getAllCharacters = () => {
            return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        }
        getCharacter = (id) => {
            return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        }

*/