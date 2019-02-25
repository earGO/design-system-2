```js noeditor
const colors = require('../src/theme/colors').default

function Palette() {
    return (
        <Flex flexWrap="wrap">
            {Object.keys(colors.palette).map(color => (
                <Card width={110} borderColor={color === 'white' ? 'lightGrey' : color} borderRadius={1} mr={3} mb={3}>
                    <Box height={80} bg={color} />
                    <Divider color={color === 'white' ? 'lightGrey' : color} mt={0} />
                    <Text align="center" fontSize={1} my={2} px={1}>
                        <Text truncated title={color}>{color}</Text>
                        <Text fontSize={0}>  
                            {colors[color]}
                        </Text>
                    </Text>
                </Card>
            ))}
        </Flex>
    )
};

<Palette />
```

### Системные цвета
Назначаются из палитры
```js noeditor
const colors = require('../src/theme/colors').default

function Palette() {
    return (
        <Flex flexWrap="wrap">
            {Object.keys(colors.system).map(color => (
                <Card width={110} borderColor={color} borderRadius={1} mr={3} mb={3}>
                    <Box height={80} bg={color} />
                    <Divider color={color} mt={0} />
                    <Text truncated title={color} align="center" my={2} px={1}>
                        <Text>{color}</Text>
                        <Text fontSize={0}>  
                            {Object.keys(colors.palette).find(key => colors.palette[key] === colors.system[color])}
                        </Text>
                    </Text>
                </Card>
            ))}
        </Flex>
    )
};

<Palette />
```


Список цветов доступен в **theme.colors** в виде плоского объекта:
```js static
{
    primary: "#1890ff",
    success: "#66bb6a",
    black: "#3a3a3a",
    white: "#ffffff",
    blue: "#1e88e5",
    lightBlue: "#0091ea",
    lightGrey: "#f5f5f5",
    // ...
}
```

Свойства **bg** и **color** у компонентов имеют доступ к этому объекту, поэтому для выбора необходимого цвета можно передать его название строкой:
```html static
<Heading color="primary">Primary heading</Heading>
<Heading color="success">Success heading</Heading>

```
```js noeditor
<Heading color="primary">Primary color heading</Heading>
<Heading color="success">Success color heading</Heading>
```

Если передаваемый цвет не найден в объекте, то он применится, как обычная строка в css color:
```html static
<Heading color="#ebebeb">Ghost heading</Heading>
<Heading color="pink">Default browser color heading</Heading>
```
```js noeditor
<Heading color="#ebebeb">Ghost heading</Heading>
<Heading color="pink">Default browser color heading</Heading>
```

Поддерживается использование массива значений для поддержки адаптивного дизайна.
```js static
<Box bg={['primary', 'error', 'success' ]} p={4}>
    Responsive background color
</Box>
```
```js noeditor
<Box bg={['primary', 'error', 'success' ]} p={4}>
    Responsive background color
</Box>
```
*Изменяйте ширину экрана для проверки работы массива цветов.*
