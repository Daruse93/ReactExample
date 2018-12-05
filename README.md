# Пример работы React-приложения

Разработано с помощью:
- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://react-redux.js.org/)
- [Axios](https://github.com/axios/axios)
## Инструкция

Находясь в проекте для запуска введите:

### `npm start`

Откройте [http://localhost:3000](http://localhost:3000) в браузере

Для сборки проекта введите:
### `npm run build`

## Описание

Приложение подгружает данные через `Redux` и `Axios` c фейкового API 
[jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/posts/)
и выводит на страницу.  

Также реализовано:  
- Меню через `HashRouter`
- Кнопка по изменению размера карточек статей через `State/Props`
- Кнопки по изменению цвета (4 варианта)
 для каждой караточки статьи через `State/Props`