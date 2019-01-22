Доступные для использования иконки:
```js noeditor
const icons = require('../../src/theme/icons').default.definitions.fas

function IconCard({ name }) {
    return (
        <Card width={100} borderRadius={1} mr={3} mb={3}>
            <Flex height={70} justifyContent="center" alignItems="center">
                <Icon fontSize={5} name={name} />
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

Система использует [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free) в качестве базы данных иконок. 
Из него доступны только те иконки, которые перечислены в файле:
```js static
src/theme/icons.js
```


Чтобы вывести иконку, необходимо передать в параметр **name** ее название:
```js 
<Icon name="beer" />
```

Иконка поддерживает систему отступов:
```js
<Icon name="beer" m={4} />
```

По умолчанию цвет иконки наследуется от родителя, но с помощью свойства **color** можно явно указать ее цвет:
```js
<Icon name="beer" color="primary" />
```

**fontSize** управляет размером иконки:
```js
<Icon name="beer" fontSize={3} />
```

**spin** или **pulse** создают анимацию вращения:
```js
<Icon name="spinner" spin />
<Icon name="cog" pulse ml={2} />
```

Иконку можно позиционировать относительно исходной точки с помощью параметров **top, right, bottom, left**. 

**template.space** и **template.breakpoints** в этих параметрах не поддерживаются, так как обычно позиционирование следует применять в случае, если сама иконка из пакета [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free) немного смещена и для этого используются маленькие значения в px:
```js
<Card borderColor="primary" mb={2}>
    <Icon name="beer" />
</Card>
<Card borderColor="primary">
    <Icon name="beer" top={1} left={3} />
</Card>
```