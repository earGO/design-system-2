Поле для ввода типа Resizable:

Пример работы:
```js
initialState = {
  value: undefined,
}


  const prefix = (
    <Box onClick={()=>{}} pt={1}>
      <Icon name="search" />
    </Box>
  )
  const suffix = (
    <Box onClick={()=>{}} pt={1}>
      <Icon name="close" />
    </Box>
  )

const handleChange = (value) => {
  setState({ value })
}


		<Box width={300}>
			<ResizableInput
				size="small"
				value={state.value}
				placeholder={'Enter text'}
				prefix={prefix}
				suffix={Boolean(value) ? suffix : null}
				onChange={handleChange}
				shrinkWidth={60}
				growWidth={260}
			/>
		</Box>

```
