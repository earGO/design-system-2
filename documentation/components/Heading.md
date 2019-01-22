Используется для вывода заголовков.

```js
<Heading>Это заголовок, и он рендерится как h3 тэг по умолчанию</Heading>
```

```js
<Heading.h1>h1 заголовок</Heading.h1>
<Heading.h2>h2 заголовок</Heading.h2>
<Heading.h3>h3 заголовок</Heading.h3>
<Heading.h4>h4 заголовок</Heading.h4>
<Heading.h5>h5 заголовок</Heading.h5>
<Heading.h6>h6 заголовок</Heading.h6>
```

Наследует компонент `<Text />` и поддерживает его параметры:
```js
<Heading color="primary">Заголовок акцентного цвета</Heading>
<Heading italic>Заголовок курсивом</Heading>
<Heading caps>Заголовок капителью</Heading>
<Heading truncated>Очень длинный текст заголовка, демонстрирующий работу свойства truncated. Но делать заголовки такой длинны лучше не надо ;)</Heading>
```