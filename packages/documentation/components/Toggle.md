Cостояния:
```js
<Flex width={600} justifyContent="space-between">
  <Box>
    Checked:
    <Toggle checked={true} />
  </Box>
  <Box>
    Unchecked:
    <Toggle checked={false} />
  </Box>
  <Box>
    Disabled:
    <Toggle disabled />
  </Box>

  <Box>
    Disabled checked:
    <Toggle disabled checked={true} />
  </Box>
</Flex>
```

Uncontrolled:
```js
<Flex width={1/5} alignItems="center">
  Отправлять данные
  <Box ml={2}>
    <Toggle />
  </Box>
</Flex>
```

Controlled:
```js
initialState = {
  agreeToTerms: true,
}

const handleChange = (newState) => {
  setState({
    agreeToTerms: newState,
  })
}

<Box width="100%">
  <Flex width={1/2} alignItems="center">
    <Toggle checked={state.agreeToTerms} onChange={handleChange} />
    <Text ml={2}>Даю согласие на обработку персональных данных</Text>
  </Flex>
  <Text>
    {state.agreeToTerms ? 'Согласен.' : 'Не согласен.'}
  </Text>
</Box>


