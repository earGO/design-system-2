Стандартный тултип:

```js
<Tooltip>Text</Tooltip>
```

Позиционирование тултипа:

```js
<Tooltip placement="left" text="Left">
  <Text inline>Left</Text>
</Tooltip>
```

Назначение ивентов:

```js
<Tooltip events={['click']} placement="right" text="right">
  <Button>Click</Button>
</Tooltip>
```

Убрать стандартную анимацию появления (также можно добавить другую анимацию в соответствии с React CSSTransitionGroup):

```js
<Tooltip text="Wow" transitionName={null}>
  <Text inline>Without animation</Text>
</Tooltip>
```
