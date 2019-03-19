Радио баттон. 
Используется для выбора одного из нескольких вариантов.
В отличие от селекта, все варианты видимы.

Пример использования:
```js
initialState = {
  checked: true
}

const handleChange = (checked) => {
  setState({
    checked: !state.checked,
  })
}

<Box>
    <Radio mr={2} label="Согласен" checked={state.checked} onChange={handleChange}/>
    <Radio label="Не согласен" checked={!state.checked} onChange={handleChange} />
</Box>
```

Размеры:
```js
<Box>
  <Radio label="small" size="small" name='a' value='small'/>
  <Radio ml={2} label="medium" size="medium"name='a' value='medium'/>
  <Radio ml={2} label="large" size="large" name='a' value='large'/>
</Box>
```

Disabled
```js
  <Radio label="Disabled" disabled />
  <Radio ml={2} label="Disabled checked" disabled checked />
```

Группа:
```js

initialState = {
  value: ''
}

const handleChange = activeValue => {
  console.log(activeValue)
  setState({value: activeValue})
}

<Radio.Group onChange={handleChange} value={state.value} defaultValue='2'>
  <Radio label="Раз" value='1'/>
  <Radio label="Два" value='2' ml={2} />
  <Radio label="Три" value='3' ml={2} />
</Radio.Group>
```
