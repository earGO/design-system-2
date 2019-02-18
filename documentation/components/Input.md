Как то же нам надо получать данные от пользователя:

```js
<Box width={1 / 4}>
  <Input />
</Box>
```

Иконка до и иконка после:
```js
<Box width={1 / 4}>
  <Input prefix={<Icon name="beer" color="grey" />} suffix={<Icon name="cog" color="grey" />}/>
</Box>
```


```js
initialState = {
  disabled: true,
}

const toggle = () => {
  setState({
    disabled: !state.disabled
  })
}

<Flex width={1 / 4}>
  <Input size="small" disabled={state.disabled} placeholder="Disabled input" />
  <Button onClick={toggle} ml={2} size="small" type="dashed" >Toggle</Button>
</Flex>
```

Разные размеры:
```js
<Flex width={1 / 4} flexDirection="column" justifyContent="space-between" height={150}>
  <Input size="small" placeholder="small"/>
  <Input size="medium" placeholder="medium"/>
  <Input size="large" placeholder="large"/>
</Flex>
```

Пример работы:
```js
initialState = {
  value: undefined,
}

const handleChange = (value) => {
  setState({ value })
}

<Box>
  <Input value={state.value} onChange={handleChange} width={250} placeholder="Hi') DROP TABLE users;--" />
  <Text bold>Текущее значение: {state.value}</Text>
</Box>
```