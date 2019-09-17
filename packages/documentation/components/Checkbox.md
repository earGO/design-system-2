Чекбокс и есть чекбокс.
Используется для выбора значений из представленных на выбор.

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
  <Checkbox mr={2} label="Согласен" checked={state.checked} onChange={handleChange}/>
  <Checkbox label="Не согласен" checked={!state.checked} onChange={handleChange} />
</Box>
```

Размеры:
```js
  <Checkbox label="small" size="small" />
  <Checkbox ml={2} label="medium" size="medium" />
  <Checkbox ml={2} label="large" size="large" />
```

Disabled
```js
  <Checkbox label="Disabled" disabled />
  <Checkbox ml={2} label="Disabled checked" disabled checked />
```
