Как то же нам надо получать данные от пользователя:

```js
<Input width={200} />
```

Иконка до и иконка после:
```js
<Input prefix={<Icon name="beer" />} suffix={<Icon name="cog" />} width={300}/>
```

Disabled
```js
initialState = {
  disabled: true,
}

const toggle = () => {
  setState({
    disabled: !state.disabled
  })
}
<Flex>
  <Input width={200} disabled={state.disabled} placeholder="Disabled input" />
  <Button onClick={toggle} ml={2} size="small" type="dashed" >Toggle</Button>
</Flex>
```

Пример работы:
```js
initialState = {
  value: undefined,
}

const handleChange = (event) => {
  setState({
    value: event.target.value
  })
}

<Box>
  <Input value={state.value} onChange={handleChange} width={250} placeholder="Hi') DROP TABLE users;--" />
  <Text bold>Current value in state: {state.value}</Text>
</Box>
```