Стандартный тултип:

```js
<Tooltip>
  <Card width={1 / 4} bg="primary" p={2}>
    <Text color="white">Стандартный тултип</Text>
  </Card>
</Tooltip>
```

Позиционирование тултипа:

```js
<Tooltip placement="topRight" text="Я тут">
  <Card width={1 / 2} bg="primary" p={2}>
    <Text color="white">Тултип справа сверху</Text>
  </Card>
</Tooltip>
```

Назначение ивентов:

```js
<Tooltip events={['click']} placement="left" text="Я тут">
  <Card width={1 / 4} bg="primary" p={4} style={{ cursor: 'pointer' }}>
    <Text color="white">Тултип появится по клику</Text>
  </Card>
</Tooltip>
```

Убрать стандартную анимацию появления (также можно добавить другую анимацию в соответствии с React CSSTransitionGroup):

```js
<Tooltip placement="right" text="Information" transitionName={null}>
  <Card width={1 / 4} bg="primary" p={4}>
    <Text color="white">Здесь будет тултип</Text>
  </Card>
</Tooltip>
```
