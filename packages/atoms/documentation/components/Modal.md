http://reactcommunity.org/react-modal/#usage

```js

initialState = {
  visible: false,
}

const handleClick = () => setState({ visible: !state.visible })

;<Box width={200}>
    <Modal isOpen={state.visible}>
      <Card bg="white" p={3}>
        <Text align="center">
          <Text>Сохраните все данные и завершите работу <Text bold>до 19:00</Text>. Система будет обновлена.</Text>
          <Button mt={2} type="secondary" size="small" onClick={handleClick}>Хорошо</Button>
        </Text>
        
      </Card>
    </Modal>
    <Button onClick={handleClick}>Просмотреть важное уведомление</Button>
</Box>
```