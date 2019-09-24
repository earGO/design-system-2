import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

const FlexContainer = styled(Flex)`
  margin: 0;
  align-self: center;
  width: 100%;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.border};
`

/** Стандартный `<Flex/>`, дополненный нижним разделителем для более точной верстки
 * Используется в модулях навигации и просто между крупными блоками
 *
 * Введён как отдельный компонент ввиду неточной вёрстки с применением `<Divider/>` */

export function FlexContainerBottomDivider({children, ...props}) {
  return <FlexContainer {...props}>{children}</FlexContainer>
}

FlexContainerBottomDivider.propTypes = {}

FlexContainerBottomDivider.defaultProps = {}

export default FlexContainerBottomDivider
