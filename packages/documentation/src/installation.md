Библиотека хостится в нашем корпоративном артифактории внутри локальной сети, поэтому перед установкой необходимо убедиться, что **npm** правильно настроен. Для этого можно выполнить команду:
```js static
npm config list
```

Параметр **registry** должен содержать ссылку на https://gitlab.ursip.ru/nexus/repository/npm. Если это не так, то необходимо его явно указать:
```js static
npm config set registry https://gitlab.ursip.ru/nexus/repository/npm
```

Далее для установки библиотеки необходимо выполнить команду:
```js static
npm install --save @ursip/design-system 
```