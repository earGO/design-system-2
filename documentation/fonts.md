Шрифты хранятся в **theme.fonts**

```js static
theme.font: {
    // Основной шрифт. Текст, кнопки и тд
    main: '"PT Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    // Шрифт для заголовков. Можно использовать такой же, как и main, либо выбрать другой
    heading: '"PT Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    // Моноширинный шрифт
    monospaced: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
}
```
Запись шрифтов через запятую означает, что если браузер не найдет первый шрифт, то будет применен следующий по списку.

**Система физически не хранит в себе шрифты, в ней можно указать только названия, поэтому файлы шрифтов дожны быть загружены и подключены в приложении, в котором мы подключаем `<ThemeProvider />`**