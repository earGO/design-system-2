Блок с фоном фирменного цвета и шириной 50%
```js
<Box width={1/2} bg="primary" color="white">
  Content
</Box>
```

Padding из **theme.space[3]** (16px)
```js
<Box width={1/2} bg="primary" color="white" p={3}>
  Box
</Box>
```

Margin из **theme.space[2]** (8px)
```js
<Box width={1/2} bg="primary" color="white" p={3} m={2}>
  Box
</Box>
```

Для адаптивной верстки параметры в качестве значения могут принимать массивы, в котором каждый индекс соответсвует брейкпойнту из настроек темы.

*Изменяйте ширину экрана для проверки работы брейкпоинтов.*

```js
<Box
  bg={['white', 'orange', 'primary']}
  color={['black', 'green', 'white']}
  width={[1, 1/2, 1/4, 1/10]}
  fontSize={[0, 1, 2, 3]}
  py={[0, 1, 2, 3]}
  px={[0, 1, 2]}
>
  Hello
</Box>
```
