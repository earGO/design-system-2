Тест

```js
const content = (
  <Flex flexDirection="column">
    <Text width="100%" fontSize={0}>        Hello</Text>
    <Divider my={1} />
    <Text width="100%" fontSize={0}>        Hello</Text>
  </Flex>
)
;
<Box>
  <Popover content={content} events={['click']} placement="right">
    <Button>Нажми меня</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="top">
    <Button>Нажми меня</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="left">
    <Button>Нажми меня</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="bottom">
    <Button>Нажми меня</Button>
  </Popover>
</Box>
```
