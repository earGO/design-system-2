Доступные для использования иконки:
```js noeditor
const icons = require('../../src/theme/icons')

function IconCard({ name }) {
    return (
        <Card width={100} borderRadius={1} mr={3} mb={3}>
            <Flex height={70} justifyContent="center" alignItems="center">
                <Icon size={2} name={name} color={'text'}/>
            </Flex>
            <Divider />
            <Text truncated title={name} align="center" fontSize={1} my={2} px={1}>{name}</Text>
        </Card>
    )
}

function Icons() {
    return (
        <Flex flexWrap="wrap">
            {icons.icons.map(name => <IconCard key={name} name={name} />)}
        </Flex>
    )
}

<Icons />
```

Система использует Material Design Icons в качестве базы данных иконок. Поддерживаются только иконки из палитры выше. Название каждой карточки - имя иконки, которое необходимо передать компоненту для отображения. 

По большому счёту это тег `<i>` с присвоенным ему специальным классом, отображающим иконку из шрифта. Для управления отступами и тонкого позиционирования необходимо заключить иконку в другой компонент, например Box.

Чтобы вывести иконку, необходимо передать в параметр **name** ее название:
```js 
<Icon name="check_circle" />
```

По умолчанию цвет иконки чёрный, но с помощью свойства **color** можно явно указать ее цвет из цветовой палитры (поддерживаются только Системные цвета):
```js
<Icon name="school" color="primary" />
<Icon name="school" color="warning" />
```

Иконки не наследуют цвета шрифта от родителей - цвет либо чёрный, либо явно указанный в компоненте самой иконки

**size** управляет размером иконки:
```js
<Icon name="folder_open" size={1} />
<Icon name="folder_open" size={2} />
<Icon name="folder_open" size={3}/> 
<Icon name="folder_open" size={4} />
```
Поддерживаются размеры в 18, 24, 36 и 48 пикселей (size от 1 до 4 соответственно)

Иконка может вращаться, если ей в качестве параметра передан **spin** :
```js
<Icon name="face" size={2} spin/>
```