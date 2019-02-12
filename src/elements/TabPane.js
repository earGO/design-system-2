import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../primitives/Box'
import { themeGet } from 'styled-system'

const TabContentWrapper = styled(Box)`
  ${props => !props.isActive && 'display: none;'}
  padding-top: ${themeGet('space[3]', '16px')};
`

const TabPane = ({ isActive, children }) => (
  <TabContentWrapper isActive={isActive} >
    {children}
  </TabContentWrapper>
)

TabPane.propTypes = {
  /** Текст вкладки. */
  tab: propTypes.oneOfType([
    propTypes.string,
    propTypes.element,
  ]),
  /** Уникальный ключ вкладки */
  tabKey: propTypes.string.isRequired,
  /** Выключена ли вкладка */
  disabled: propTypes.bool,
}

TabPane.displayName = 'Tabs.TabPane'

/** @component */
export default TabPane