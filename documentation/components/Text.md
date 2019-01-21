Начертания **regular, bold, italic, caps**:
```js
<Text>Обычный текст</Text>
<Text bold>Жирный текст <Text.span regular>Обычный текст</Text.span> жирный текст</Text>

<Text bold>Жирное начертание</Text>
<Text italic>Курсивное начертание</Text>
<Text caps>Капитель</Text>
```

**fontSize** задает размер.
```js
<Text fontSize={1}>Размер текста 1</Text>
<Text fontSize={2}>Размер текста 2</Text>
<Text fontSize={3}>Размер текста 3</Text>
<Text fontSize={4}>Размер текста 4</Text>
<Text fontSize={5}>Размер текста 5</Text>
<Text fontSize={6}>Размер текста 6</Text>

```

**align** отвечает за выравнивание текста.
```js
<Text align="left">Слева</Text>
<Text align="center">Центр</Text>
<Text align="right">Справа</Text>
<Text align="justify">Выравнивание длинного текста по обеим сторонам. Использовать такое выравнивание крайне не рекомендуется, так как чаще всего это ухудшает восприятие информации</Text>
```

**color** управляет цветом текста.
```js
<Text color="primary">Primary color text</Text>
<Text color="success">Success color text</Text>
<Text color="warning">Warning color text</Text>
<Text color="error">Error color text</Text>
```

**truncated** позволяет обрезать длинный текст по ширине блока и добавить троеточие в конце.
```js
<Text truncated>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
```

По-умолчанию `<Text />` рендерится, как блочный элемент, но для него можно явно указать **span**, **p** или **s**.
```js
<Text.span>Это span элемент</Text.span>
<Text.p>Это p элемент</Text.p>
<Text.s>Это s элемент</Text.s>
```
