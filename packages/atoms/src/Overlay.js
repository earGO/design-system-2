import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import hexRgb from 'hex-rgb'
import Flex from './Flex'

const getColor = ({theme, bg, opacity}) => {
  if (bg === 'transparent') {
    return {
      backgroundColor: bg
    }
  }

  const hex = theme.colors[bg] || bg
  const {red, green, blue, alpha} = hexRgb(hex)

  return {
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity || alpha})`
  }
}

/** Оверлей */
const StyledFlex = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${getColor};
`

/** Обёртка для вывода одного компонента поверх других.
 * Приеменяется, например, для компонента `<Loading/>`. Создан как расширение над `<Flex/>`,
 * принимакт все его параметры для настройки расположения содержимого оверлея. */

export function Overlay({children, ...props}) {
  return (
    <StyledFlex {...props}>
      {React.cloneElement(React.Children.only(children), {
        onClick: e => {
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
        }
      })}
    </StyledFlex>
  )
}

Overlay.propTypes = {
  /** Содержимое оверлея */
  children: PropTypes.element,
  /** Событие клика на оверлей */
  onClick: PropTypes.func,
  /** Прозрачность фона оверлея от 0 до 1 */
  opacity: PropTypes.number,
  /** Цвет фона оверлея */
  bg: PropTypes.string
}

Overlay.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'black',
  opacity: 0.85
}

Overlay.displayName = 'Overlay'

/** @component */
export default Overlay
