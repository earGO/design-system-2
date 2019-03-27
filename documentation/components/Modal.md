Modal Kappa

```js

initialState = {
  visible: false,
}

const handleClick = () => {
  setState({
    visible: !state.visible,
  })
}

;<Box width={200}>
  <Button onClick={handleClick}>Просмотреть важное уведомление</Button>
  {state.visible && (
    <Modal
      title={<Heading.h4>Внимание! Важное уведомление</Heading.h4>} 
      closeModal={handleClick}
      // footer={null}
      footer={<Button onClick={handleClick}>Ok</Button>}
    >
      <Text fontSize={1}>
        Сохраните все данные и завершите работу <strong>до 19:00</strong>. Система будет обновлена.
      </Text>
    </Modal>
  )}
</Box>
```
Без закрытия модального окна при клике за него:

```js
initialState = {
  visible: false,
}

const handleClick = () => {
  setState({
    visible: !state.visible,
  })
}

;<Box width={200}>
  <Button onClick={handleClick}>Показать</Button>
  {state.visible && (
    <Modal
      closeOnBackdropClick={false}
      title={<Heading.h4>Внимание! Важное уведомление</Heading.h4>} 
      closeModal={handleClick}
      footer={<Button onClick={handleClick}>Ok</Button>}
    >
      <Text fontSize={1}>
        Сохраните все данные и завершите работу <strong>до 19:00</strong>. Система будет обновлена.
      </Text>
      <Text fontSize={2}>
        И клик за содержимым не закроет это окно!
      </Text>
    </Modal>
  )}
</Box>
```

