Поле для ввода:

```js
  <Input />
```

Только численные значения
```js
<Box width={0.25}>
  <Input type="number" />
</Box>
```

Иконка до и иконка после:
```js
  <Input width={1 / 4} prefix={<Icon name="beer" color="grey" />} suffix={<Icon name="cog" color="grey" />}/>
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

<Box width={250}>
  <Input value={state.value} onChange={handleChange} placeholder="Enter text" />
  {state.value && <Divider mt={3} mb={2} />}
  {state.value && <Text>value: <Text bold inline color="green">{state.value}</Text></Text>}
</Box>
```
Resizable
```js
		<Box width={300}>
			<ResizableInput
				size="small"
				value={value}
				placeholder={placeholder}
				prefix={prefix}
				suffix={Boolean(value) ? suffix : null}
				onChange={handleChange}
				shrinkWidth={60}
				growWidth={260}
			/>
		</Box>

```