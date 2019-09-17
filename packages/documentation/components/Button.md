**type** отвечает за вид кнопки и может принимать значения: **primary, bordered, dashed, outline, flat**:
```js
<Button mr={2}>Primary</Button>
<Button type="secondary" mr={2} >Secondary</Button>
<Button type="bordered" mr={2}>Bordered</Button>
<Button type="dashed" mr={2}>Dashed</Button>
<Button type="flat">Flat</Button>
```

**size** задает размер кнопки. Допустимые значения: **verySmall, small, medium, large**. (24px, 32px, 40px, 56px)

По умолчанию размер кнопки **medium**:
```js
<Button size="verySmall" mr={2}>VerySmall</Button>
<Button size="small" mr={2}>Small</Button>
<Button size="medium" mr={2}>Medium</Button>
<Button size="large" mr={2}>Large</Button>


```

**block** делает кнопку шириной 100% родительского блока:
```js
<Button block>Full width</Button>
```

**circle** превращает кнопку в окружность:
```js
<Button circle mr={2}>Circle</Button>
```

**disabled** блокирует кнопку:
```js
<Button disabled>Disabled button</Button>
```

Использование вместе с иконками:
```js
<Box mb={2}>
    <Button mr={2}>
    <Flex><Box mr={1} mt={1}>
       <Icon spin name="autorenew" />
       </Box>
       <Box mt={1}>
        Loading...
        </Box>
        </Flex>
    </Button>
    <Button circle>
    <Box mt={1}>
       <Icon spin name="autorenew" />
       </Box>
    </Button>
</Box>
<Box>
    <Button type="bordered" mr={2}>
    <Flex><Box mr={1} mt={1}>
       <Icon spin name="autorenew" />
       </Box>
       <Box mt={1}>
        Loading...
        </Box>
        </Flex>
    </Button>
    <Button circle type="bordered">
    <Box mt={1}>
       <Icon spin name="autorenew" />
       </Box>
    </Button>
</Box>
```