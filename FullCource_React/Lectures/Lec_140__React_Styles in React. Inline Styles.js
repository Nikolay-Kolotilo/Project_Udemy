/*Lec_140__React_Styles in React. Inline Styles.js

1:30. Атрибут style. В Ракт атрибут к тегу принимает объект:
style={{fontS}}
 */
style = {{ fontSize: 40 }} // fontSize в формате КеМэл Кейс, пикселы проставляются по умолчанию (только пикселы).
style = {{ fontSize: '40em' }} // Другие значения - должны быть в формате строки.
//3:30. 
style = {{ fontSize: '40em', color: red, }} // Другие стили - через запятую.
//3:50. Стили также можно поместить в переменную и вставлять в тег скобках {}.
//4:00. Проблемы использования инлайн стилей: ВЕНДОРНЫЕ префиксы надо будет ставить вручную.
//Это префиксы позволяющие работать со стилями в разных браузерах:
style = {{ fontSize: '40em', color: red, transition: 'all' }} // - трансишон поставится по умолчанию,
//Для корректного отображения надо прописывать вендорные префиксы самостоятельно:
style = {{ fontSize: '40em', color: red, transition: 'all', WebkitTransition: 'all', msTransition: 'all' }}
//Поэтому лучше использовать CSS стили или классы.