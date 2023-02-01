/*Lec_120__Create React App introduction
            https://github.com/facebook/create-react-app
0:00. Введение.
0:45. Create React App. Это готовая сборка с настройками
1:30. Запуск установки в терминале (см. readme):
        npx create-react-app my-app
2:15. При повторной установке - старую установку лучше удалить.
        npm uninstall -g create-react-app
2:40. Запуск React App:
        cd my-app - Переходим в директорию.
        npm start - запускаем React App.
3:00. Структура приложения:
- SRC. Рабочая папка для всех рабочих файлов :)
        - index.js - главный сборочный файл.
- public. Обычно хранятся статичные файлы (которые не будут меняться)
        - index.html - без  React App - не работает.
- node_modules. С этим понятно, в нем и бебель и Webpack и все необходимые модули.
- package.json. 6:50:
        - dependencies - зависимости;
        - scripts - перечень готовых команд. 
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
        - eslintConfig - вместо ДЖСХинта
        - browserslist  production - Требования к перечню поддерживаемых браузеров. См. лекцию wabpack Lec_102_Webpack
        - browserslist  development - Требования к перечню поддерживаемых браузеров при разработке.
10:00. Запуск приложения.
11:40. Установка инструментов разработчика (меню в консоли Components и Profiler). 
                https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation
12:00. Важное про сборку. Основные части сборки - вебпак и бебель. Бебель пожет переводить jsx в обычный ДЖС код.
                https://babeljs.io/docs/en/babel-plugin-transform-react-jsx
                
                */
