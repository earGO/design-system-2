Все пропсы - https://github.com/airbnb/react-dates

Пример использования:
```js
<Box width={1/4}>
  <Datepicker id="hello" placeholder="Выберите дату" />
</Box>
```

Controlled:

```js
initialState = {
  value: undefined,
};

const handleChange = (value) => setState({ value });

<Box width={0.25}>
  <Datepicker id="hello2" placeholder="Выберите дату" value={state.value} onChange={handleChange}></Datepicker>
  <Text fontSize={3} color="green">Значение (moment object): {state.value ? state.value.format('DD/MM/YYYY') : 'undefined'}</Text>
</Box>
