Доступные для использования иконки:
```js noeditor
const icons = require('../../src/theme/icons').default

function IconCard({ name }) {
    return (
        <Card width={100} borderRadius={1} mr={3} mb={3}>
            <Flex height={70} justifyContent="center" alignItems="center">
                <Icon scale={1.5} name={name} />
            </Flex>
            <Divider />
            <Text truncated title={name} align="center" fontSize={1} my={2} px={1}>{name}</Text>
        </Card>
    )
}

function Icons() {
    return (
        <Flex flexWrap="wrap">
            {Object.keys(icons).map(name => <IconCard name={name} />)}
        </Flex>
    )
}

<Icons />
```

Система использует пакет [react-icons]( ttps://react-icons.netlify.com/#/) в качестве базы данных open-source svg иконок. 
Из него доступны только те иконки, которые перечислены в файле:
```js static
src/theme/icons.js
```


Чтобы вывести иконку, необходимо передать в параметр **name** ее название:
```js 
<Icon name="close" />
```

Иконка поддерживает систему отступов:
```js
<Icon m={4} />
```

По-умолчанию цвет иконки наследуется от родителя, но с помощью свойства **color** можно явно указать ее цвет
```js
<Icon color="primary" />
```

**scale** управляет размером иконки:
```js
<Icon scale={2.5} />
```

**spin** создает анимацию вращения против часовой стрелки:
```js
<Icon spin />
```

Иконку можно позиционировать относительно исходной точки с помощью параметров **top, right, bottom, left**. 

**template.space** и **template.breakpoints** в этих параметрах не поддерживаются, так как обычно позиционирование следуюет применять в случае, если сама иконка из пакета [react-icons]( ttps://react-icons.netlify.com/#/) немного смещена и для этого используются маленькие значения в px.
```js
<Card borderColor="primary" mb={2}>
    <Icon />
</Card>
<Card borderColor="primary">
    <Icon top={3} left={3} />
</Card>
```