```js
<Flex color="white">
  <Box bg="blue" width={1/2} p={2}>
    Flex
  </Box>
  <Box bg="red" width={1/2} p={2}>
    Box
  </Box>
</Flex>
```

Комбинирую компоненты `<Flex />` и `<Box />` можно создавать layout-разметку для расположения элементов на экране:

```js
<Flex>
  <Box bg="lightGrey" flex={1} p={3}>
    <Text color="black">Navbar</Text>
  </Box>
  <Flex flexDirection="column" flex={5}>
    <Box bg="primary" height="10vh" p={3}>
      <Text color="white">Header</Text>
    </Box>
    <Flex>
      <Box height="60vh" flex={3} p={3}>
        <Text>Content</Text>
      </Box>
      <Box bg="success" color="white" flex={1} p={3}>
        <Text color="white">Sidebar</Text>
      </Box>
    </Flex>
    <Box bg="error" color="white" height="10vh" p={3}>
      <Text color="white">Footer</Text>
    </Box>
  </Flex>
</Flex>
```