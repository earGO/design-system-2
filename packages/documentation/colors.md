```js noeditor
const colors = require('@design-system/theme').default.colors

initialState = {
  collapsed: true,
}

const togglePalette = () => setState({ collapsed: !state.collapsed })

function Palette() {
    return (
    <Box>
        <Flex flexWrap="wrap" height={state.collapsed && 315} style={{overflow: 'hidden'}}>
            {Object.keys(colors.palette).map(color => (
                <Card key={color} width={110} borderColor={color === 'white' ? 'lightGrey' : color} borderRadius={1} mr={3} mb={3}>
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
        <Divider my={0} />
        <Button type="flat" block onClick={togglePalette}>
            <Icon mr={2} name={state.collapsed ? 'chevron-down' : 'chevron-up'} />
            {state.collapsed ? 'Показать все цвета' : 'Скрыть'} 
        </Button>
    </Box>
    )
};

<Palette />
```

### Системные цвета
Назначаются из палитры.
```js noeditor
const colors = require('@design-system/theme').default.colors

function Palette() {
    return (
        <Flex flexWrap="wrap">
            {Object.keys(colors.system).map(color => {
            if(color!=='info'&&color!=='highlightHover'){
             return (                
                <Card key={color} width={110} borderColor={color} borderRadius={1} mr={3} mb={3}>
                    <Box height={80} bg={color} />
                    <Divider color={color} mt={0} />
                    <Text truncated title={color} align="center" my={2} px={1}>
                        <Text>{color}</Text>
                    </Text>
                </Card>
            )}})}
        </Flex>
    )
};

<Palette />
```

Список цветов доступен в **theme.colors** в виде плоского объекта:
```js static
{
    primary: "#0091ea",
    success: "#66bb6a",
    black: "#3a3a3a",
    white: "#ffffff",
    blue: "#0091ea",
    lightBlue: "#1e88e5",
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
