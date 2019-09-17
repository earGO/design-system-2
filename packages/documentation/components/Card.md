```js
<Card p={4}>
  <Text caps align="center">Card content</Text>
</Card>
```

**boxShadowSize** позволяет задать тень для карточки. Допустимые значения: **sm, md, lg, xl**
```js
<Card boxShadowSize="sm" p={4} mb={4}>
    <Text bold>sm-shadow</Text>
</Card>
<Card boxShadowSize="md" p={4} mb={4}>
    <Text bold>md-shadow</Text>
</Card>
<Card boxShadowSize="lg" p={4} mb={4}>
    <Text bold>lg-shadow</Text>
</Card>
<Card boxShadowSize="xl" p={4}>
    <Text bold>xl-shadow</Text>
</Card>
```