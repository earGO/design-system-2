Тест

```js
const content = (
  <Flex flexDirection="column" p={2}>
    <Text width="100%">Hello</Text>
    <Divider my={1} />
    <Text width="100%">Hello</Text>
  </Flex>
);

const placements = {
  topLeft: 'Top Left',
  top: 'Top',
  topRight: 'Top Right',
  right: 'Right',
  bottomRight: 'Bottom Right',
  bottom: 'Bottom',
  bottomLeft: 'Bottom Left',
  left: 'Left',
};

<Flex width={800} justifyContent="space-around">
  {Object.keys(placements).map(placement => (
    <Popover content={content} events={['click']} placement={String(placement)}>
      <Button>{placements[placement]}</Button>
    </Popover>
  ))}
</Flex>
```
