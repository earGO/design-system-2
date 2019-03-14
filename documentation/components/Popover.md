Тест

```js
const content = (
  <Flex flexDirection="column" p={2}>
    <Text width="100%">Hello</Text>
    <Divider my={1} />
    <Text width="100%">Hello</Text>
  </Flex>
)
;
<Flex width={400} justifyContent="space-around">
  <Popover content={content} events={['click']} placement="right">
    <Button>Справа</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="top">
    <Button>Сверху</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="left">
    <Button>Слева</Button>
  </Popover>
  <Popover content={content} events={['click']} placement="bottom">
    <Button>Снизу</Button>
  </Popover>
</Flex>
```
