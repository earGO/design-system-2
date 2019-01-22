![](https://cdn.dribbble.com/users/43720/screenshots/4260415/ds_visual_1x.png)

**Дизайн-система  —  это целостный визуальный язык и его техническое отражение в виде библиотеки компонентов.**

*TODO: Описать преимущества нашей библиотеки, какие задачи она решает и тд..*

Пример реализации комплексного компонента путем комбинирования примитивов и простых элементов:
```js
<Card width={1/2} boxShadowSize="md">
    <Heading.h5 m={3}>Do you want to read this?</Heading.h5>
    <Divider mb={2} />
    <Text mx={3} fontSize={1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    </Text>
    <Text align="right" m={2}>
        <Button type="outline">Cancel</Button>
        <Button ml={2}>Apply</Button>
    </Text>
</Card>
```
☝️ **нажмите "VIEW CODE" для просмотра исходного кода примера.**

Практически все примеры в этой документации интерактивны. Их можно править, пробовать различные свойства и комбинировать разные компоненты. Подробнее про работу с code-editor [можно почитать тут](https://react-styleguidist.js.org/docs/documenting.html#writing-code-examples).
