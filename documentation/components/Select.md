Используется для выбора значения из списка.

Так как селекты - дело сложное, за основу взят [react-select](https://react-select.com/) + добавлена виртуализация.

Полный список пропсов: [https://react-select.com/props#api](https://react-select.com/props#api)

Пример использования:

```js
const options = Array(36)
  .fill(true)
  .map((_, i) => ({ value: i, label: `Option ${i}` }))

;<Select options={options} />
```

Virtualized:

```js
const options = Array(10000)
  .fill(true)
  .map((_, i) => ({ value: i, label: `Option ${i}` }))

;<Select virtualized options={options} />
```

Controlled:

```js
initialState = {
  value: { label: 'Option 3', value: 3 },
}

const onChange = newOption => {
  setState({
    value: newOption,
  })
}

const options = Array(30)
  .fill(true)
  .map((_, i) => ({ value: i, label: `Option ${i}` }))

;<Select value={state.value} onChange={onChange} options={options} />
```

Combobox:

```js
const options = Array(30)
  .fill(true)
  .map((_, i) => ({ value: i, label: `Option ${i}` }))

;<Select options={options} isMulti closeMenuOnSelect={false} />
```

Async:
Нужно добавить пропсы **defaultOptions** и **loadOptions**

**defaultOptions** отвечает за опции, который будут изначально в селекте; если ```defaultOptions === true```, то тогда отправится запрос сразу, как только откроется селект.

**loadOptions** - промис, который собственно и будет грузить данные в селект.

```js
let uuid = 1

initialState = {
  isLoading: false,
  value: { value: 'helloKitty', label: 'Initial Value?' },
}

const onChange = value => setState({ value })

const loadOptions = query => {
  return new Promise((resolve, reject) => {
    const sampleQueryResults = Array(13)
      .fill(true)
      .map((x, i) => ({ label: `${query} - ${i}`, value: `${i}+${uuid}` }))
    uuid++
    setState({ isLoading: true });
    setTimeout(() => {
      setState({
        isLoading: false,
      })
      resolve(sampleQueryResults)
    }, 300)
  })
}

<Select
  async
  isLoading={state.isLoading}
  value={state.value}
  onChange={onChange}
  loadOptions={loadOptions}
  defaultOptions
/>
```

Размеры:
```js
const options = Array(30)
  .fill(true)
  .map((_, i) => ({ value: i, label: `Option ${i}` }))

;<Flex flexDirection="column" width={1/3} height={160} justifyContent="space-between">
  <Select options={options} placeholder="small" size="small" />
  <Select options={options} placeholder="medium" size="medium" />
  <Select options={options} placeholder="large" size="large" />
</Flex>
```