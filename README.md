# URSiP design-system

В данном репозитории хранится корпоративная библиотека визуальных компонентов

## Основные npm команды

* ``npm install`` - устанавливает зависимости, которые перечисленны в package.json. Эту команду необходимо выполнить один раз после клонирования репозитория.
* ``npm start``  - запускает слушатель изменений файлов в директории ``/src``. Любое изменение файла автоматически запускает билд библиотеки в директорию ``/dist`` Эта команда полезна, если необходимо локально тестировать интеграцию библиотеки в какой-либо проект.
* ``npm run build`` - собирает проект в директорию ``/build`` Данная команда скорее нужна для CI.
* ``npm run styleguide`` поднимает локально dev-сервер с документацией. Слушаются изменения файлов в директориях ``/src`` и ``/documentation``, исключая файл ``/documentation/config.js``. После изменений конфига документации проект надо перезапускать.
* ``npm run styleguide:build`` - эта команда билдит документацию в директорию ``/docs``. Нужна CI для обновления и деплоя документации.

