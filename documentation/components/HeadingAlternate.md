```js
    <HeadingAlternate>Это заголовок, и он рендерится как h3 тэг по умолчанию</HeadingAlternate>
```

```js
    <HeadingAlternate tag="h1">h1 заголовок </HeadingAlternate>
    <HeadingAlternate tag="h2">h2 заголовок </HeadingAlternate>
    <HeadingAlternate tag="h3">h3 заголовок </HeadingAlternate>
    <HeadingAlternate tag="h4">h4 заголовок </HeadingAlternate>
    <HeadingAlternate tag="h5">h5 заголовок </HeadingAlternate>
    <HeadingAlternate tag="h6">h6 заголовок </HeadingAlternate>
```

Наследует компонент `<Text />` и поддерживает его параметры:
```js
<HeadingAlternate color="primary">Заголовок акцентного цвета</HeadingAlternate>
<HeadingAlternate italic>Заголовок курсивом</HeadingAlternate>
<HeadingAlternate caps>Заголовок капителью</HeadingAlternate>
<HeadingAlternate truncated>Очень длинный текст заголовка, демонстрирующий работу свойства truncated. Но делать заголовки такой длинны лучше не надо ;)</HeadingAlternate>
```