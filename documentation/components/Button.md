**type** отвечает за вид кнопки и может принимать значения: **primary, bordered, dashed, outline, flat**.
```js
<Button mr={2}>Primary</Button>
<Button type="bordered" mr={2}>Bordered</Button>
<Button type="dashed" mr={2}>Dashed</Button>
<Button type="outline" mr={2}>Оutline</Button>
<Button type="flat">Flat</Button>
```

**size** задает размер кнопки. Допустимые значения: **large, medium, small**. По-умолчанию размер кнопки **medium**.
```js
<Button size="large" mr={2}>Large</Button>
<Button size="medium" mr={2}>Medium</Button>
<Button size="small">Small</Button>
```

**block** делает кнопку шириной 100% родительского блока.
```js
<Button block>Full width</Button>
```

**circle** превращает кнопку в окружность.
```js
<Button circle mr={2}>Circle</Button>
```

**disabled** блокирует кнопку
```js
<Button disabled>Disabled button</Button>
```

Использование вместе с иконками.
```js
<Box mb={2}>
    <Button mr={2}>
        <Icon spin name="loading" mr={2} scale={1.3}/>
        Loading...
    </Button>
    <Button circle>
        <Icon spin name="loading" scale={1.3}/>
    </Button>
</Box>
<Box>
    <Button type="bordered" mr={2}>
        <Icon spin name="loading" mr={2} scale={1.3}/>
        Loading...
    </Button>
    <Button circle type="bordered">
        <Icon spin name="loading" scale={1.3}/>
    </Button>
</Box>
```