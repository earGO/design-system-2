import React from 'react'
import styled, {withTheme} from 'styled-components'
import PropTypes from 'prop-types'
import {borderRadius} from 'styled-system'
import Box from './Box'

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow':
        props &&
        props.theme &&
        Object.keys(props.theme).length > 0 &&
        props.theme.boxShadows[0]
    },
    md: {
      'box-shadow':
        props &&
        props.theme &&
        Object.keys(props.theme).length > 0 &&
        props.theme.boxShadows[1]
    },
    lg: {
      'box-shadow':
        props &&
        props.theme &&
        Object.keys(props.theme).length > 0 &&
        props.theme.boxShadows[2]
    },
    xl: {
      'box-shadow':
        props &&
        props.theme &&
        Object.keys(props.theme).length > 0 &&
        props.theme.boxShadows[3]
    }
  }
  return boxShadows[props.boxShadowSize] || {}
}

const boxBorder = props => ({
  // border: `1px solid ${props.theme.colors.border}`
  border: `1px solid #ecebeb`
})

const CardBox = styled(Box)`
  overflow: hidden;
  position: relative;
  background-color: ${props => props.bg};
  ${boxShadow} 
  ${boxBorder} 
  ${borderRadius};
`

/** Наследует компонент `<Box />` и расширяет его параметрами **boxShadowSize, borderColor, borderRadius, borderWidth**.
 * Используется для создания блока с тенью и границами.
 * */

export function Card({children, ...props}) {
  return <CardBox {...props}>{children}</CardBox>
}

Card.propTypes = {
  /** Размер тени */
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /** Радиус скругления блока */
  borderRadius: PropTypes.oneOf([0, 1, 2]),
  /** Ширина бордера */
  borderWidth: PropTypes.oneOf([0, 1, 2]),
  /** Цвет фона */
  bg: PropTypes.string
}

Card.defaultProps = {
  borderRadius: 1,
  borderWidth: 0,
  bg: 'white'
}

Card.displayName = 'Card'

/** @component */
// export default withTheme(Card)
export default Card
