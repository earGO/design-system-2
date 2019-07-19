В основе этой библиотеки используются решения:

* [styled-components](https://www.styled-components.com/) для создания базовых компонентов и управления css-правилами;
* [styled-system](https://jxnblk.com/styled-system/) содержит коллекцию функций, расширяющих компоненты свойствами, которые позволяют управлять стилями на основе заранее прописанных параметров темы.

### Как это работает?
Создадим компонент Box и добавим в него функцию **color**:

```js static
import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled.div`
  ${color}
`

export default Box
```

Теперь `<Box />` имеет два параметра: **color** для задания цвета текста и **bg** для фона:
```html static
<Box color="#fff" bg="tomato">
  Tomato
</Box>
```
```js noeditor
<Box color="#fff" bg="tomato">
  Tomato
</Box>
```

Добавим в Box еще несколько функций:
```js static
import styled from 'styled-components'
import { color, space, width } from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${width}
`

export default Box
```
Теперь мы можем управлять отступами и шириной блока:
```html static
<Box color="#fff" bg="tomato" width={1/3} m={2} py={2} px={3} >
  Tomato
</Box>
```
```js noeditor
<Box color="#fff" bg="tomato" width={1/3} m={2} p={2} >
  Tomato
</Box>
```

Функция **space** может брать значения из заранее прописанной сетки отступов в объекте темы:
```js static
// theme.js
export default {
  space: [
    0, 4, 8, 16, 32, 64, 128, 256, 512
  ]
}
```
В примере выше для параметров **m** и **p** мы указали значение 2. Эта цифра является индексом элемента из массива **space** темы. То есть по факту мы записываем для компонента css:
```js static
{
  margin: 8px;
  padding: 8px;
}
```

Все свойства могут принимать значения number, string, array:
* Числа, превышающие длину массива отступов из темы, преобразуются в пиксели;
* Есть возможность передавать значения строкой, например 'auto' или '2em';
* Свойство margin может принимать отрицательные значения для задания негативного отступа;
* Массивы используются для адаптивного дизайна.

Аналогичным образом работает функция **fontSize**, которая смотрит на массив fontSizes в обьекте темы. 

### Список всех доступных функций styled-system
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`space`       | `m`        | `margin`        | `space`
`space`       | `mt`       | `margin-top`    | `space`
`space`       | `mr`       | `margin-right`  | `space`
`space`       | `mb`       | `margin-bottom` | `space`
`space`       | `ml`       | `margin-left`   | `space`
`space`       | `mx`       | `margin-left` and `margin-right`   | `space`
`space`       | `my`       | `margin-top` and `margin-bottom`   | `space`
`space`       | `p`        | `padding`       | `space`
`space`       | `pt`       | `padding-top`   | `space`
`space`       | `pr`       | `padding-right` | `space`
`space`       | `pb`       | `padding-bottom` | `space`
`space`       | `pl`       | `padding-left`  | `space`
`space`       | `px`       | `padding-left` and `padding-right`   | `space`
`space`       | `py`       | `padding-top` and `padding-bottom`   | `space`
`width`       | `width`    | `width`         | none
`fontSize`    | `fontSize` |`font-size`      |`fontSizes`
`color`       | `color`    | `color`         | `colors`
`color`       | `bg`       | `background-color`| `colors`

### Типографика
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`fontFamily` | `fontFamily` | `font-family` | `fonts`
`textAlign`   | `textAlign`    | `text-align`   | none
`lineHeight`  | `lineHeight` | `line-height` | `lineHeights`
`fontWeight`  | `fontWeight` | `font-weight` | `fontWeights`
`fontStyle`  | `fontStyle` | `font-style` | none
`letterSpacing` | `letterSpacing` | `letter-spacing` | `letterSpacings`

### Layout
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`display` | `display` | `display` | none
`maxWidth` | `maxWidth` | `max-width` | `maxWidths`
`minWidth` | `minWidth` | `min-width` | `minWidths`
`height` | `height` | `height` | `heights`
`maxHeight` | `maxHeight` | `max-height` | `maxHeights`
`minHeight` | `minHeight` | `min-height` | `minHeights`
`size` | `size` | `width` `height` | none
`ratio` | `ratio` | `height` `padding-bottom` | none
`verticalAlign` | `verticalAlign` | `vertical-align` | none

### Flexbox

Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`alignItems`  | `alignItems` | `align-items` | none
`justifyContent` | `justifyContent` | `justify-content` | none
`flexWrap` | `flexWrap` | `flex-wrap` | none
`flexDirection` | `flexDirection` | `flex-direction` | none
`flex` | `flex` | `flex` (shorthand) | none
`alignContent`  | `alignContent` | `align-content` | none
`justifyItems`  | `justifyItems` | `justify-items` | none
`justifySelf` | `justifySelf` | `justify-self` | none
`alignSelf` | `alignSelf` | `align-self` | none
`order` | `order` | `order` | none
`flexBasis` | `flexBasis` | `flex-basis` | none

### Grid Layout
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`gridGap`  | `gridGap` | `grid-gap` | `space`
`gridRowGap` | `gridRowGap` | `grid-row-gap` | `space`
`gridColumnGap` | `gridColumnGap` | `grid-column-gap` | `space`
`gridColumn` | `gridColumn` | `grid-column` | none
`gridRow` | `gridRow` | `grid-row` | none
`gridArea` | `gridArea` | `grid-area` | none
`gridAutoFlow` | `gridAutoFlow` | `grid-auto-flow` | none
`gridAutoRows` | `gridAutoRows` | `grid-auto-rows` | none
`gridAutoColumns` | `gridAutoColumns` | `grid-auto-columns` | none
`gridTemplateRows` | `gridTemplateRows` | `grid-template-rows` | none
`gridTemplateColumns` | `gridTemplateColumns` | `grid-template-columns` | none
`gridTemplateAreas` | `gridTemplateAreas` | `grid-template-areas` | none

### Background
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`background`  | `background` | `background`  | none
`backgroundImage` | `backgroundImage` | `background-image` | none
`backgroundSize` | `backgroundSize` | `background-size` | none
`backgroundPosition` | `backgroundPosition` | `background-position` | none
`backgroundRepeat` | `backgroundRepeat` | `background-repeat` | none

### Position
Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`position` | `position` | `position` | none
`zIndex` | `zIndex` | `z-index` | none
`top` | `top` | `top` | none
`right` | `right` | `right` | none
`bottom` | `bottom` | `bottom` | none
`left` | `left` | `left` | none

### Misc

Функция | Параметр компонента  | CSS параметр  | Параметр в объекте темы
--------------|------------|-----------------|--------------
`borderRadius` | `borderRadius` | `border-radius` | `radii`
`borderColor` | `borderColor` | `border-color` | `colors`
`borders` | `border` | `border` | `borders`
`borders` | `borderTop` | `border-top` | `borders`
`borders` | `borderRight` | `border-right` | `borders`
`borders` | `borderBottom` | `border-bottom` | `borders`
`borders` | `borderLeft` | `border-left` | `borders`
`boxShadow` | `boxShadow` | `box-shadow` | `boxShadows`
`opacity`   | `opacity` `o` | `opacity`  | `opacity`
`overflow` | `overflow` | `overflow` | none

Как работают функции из styled-system  [можно прочитать тут](https://github.com/jxnblk/styled-system/blob/master/docs/how-it-works.md).


## Адаптивная верстка
Все функции из styled-system позволяют задать массив значений для различных размеров экранов:

```js static
<Box
  width={[
    1,    // 100% телефоны
    1/2,  // 50% планшеты
    1/4   // 25% десктоп
  ]}
/>

// margin
<Text m={[ 0, 1, 2 ]} />

// padding
<Text p={[ 2, 3, 4 ]} />

// font-size
<Text fontSize={[ 3, 4, 5 ]} />
```

Брейкпоинты задаются в теме:
```js static
// theme.js
const breakpoints = [420, 640, 1200, 1600]
const mediaQueries = breakpoints.map(width => `@media screen and (min-width: ${width}px)`)

export default {
  breakpoints,
  mediaQueries
}
```