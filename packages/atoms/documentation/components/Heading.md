```js
<Heading>Это заголовок, и он рендерится как H3 тэг по умолчанию</Heading>
```

```js
<Heading tag="h1">H1 заголовок </Heading>
<Heading tag="h2">H2 заголовок </Heading>
<Heading tag="h3">H3 заголовок </Heading>
<Heading tag="h4">H4 заголовок </Heading>
<Heading tag="h5">H5 заголовок </Heading>
<Heading tag="h6">H6 заголовок </Heading>
```

Наследует компонент `<Text />` и поддерживает его параметры:
```js
<Heading color="primary">Заголовок акцентного цвета</Heading>
<Heading italic>Заголовок курсивом</Heading>
<Heading caps>Заголовок капителью</Heading>
<Heading truncated>Очень длинный текст заголовка, демонстрирующий работу свойства truncated. Но делать заголовки такой длинны лучше не надо ;)</Heading>
```