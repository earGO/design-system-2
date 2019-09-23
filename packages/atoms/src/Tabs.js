import React, {useState, useEffect} from 'react'
import styled, {css} from 'styled-components'
import propTypes from 'prop-types'
import Flex from './Flex'
import Box from './Box'
import TabPane from './TabPane'
import themeGet from '@styled-system/theme-get'

const noop = () => {}

const borderBottom = props => css`
  ${props.isActive &&
    `border-bottom: 1px solid ${props.theme.colors.tabs.active}`}
  :hover {
    ${!props.disabled &&
      !props.isActive &&
      `border-bottom: 1px solid ${props.theme.colors.tabs.hover}`}
  }
`

const isDisabled = props =>
  props.disabled &&
  css`
    cursor: not-allowed;
    opacity: 0.4;
  `

const TabsList = styled(Flex)`
  justify-content: flex-start;
  flex-direction: row;
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
`

const Tab = styled(Flex)`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
  padding-right: ${themeGet('space[3]', '16px')};
  padding-left: ${themeGet('space[3]', '16px')};
  height: ${themeGet('heights.medium', '48px')};
  cursor: pointer;
  /* Чтобы не "прыгали" при hover/active */
  border-bottom: 1px solid ${props => props.theme.colors.semiLightGrey};
  ${borderBottom}
  ${isDisabled}
`

/** Используется, если необходимо сгруппировать или разграничить содержимое страницы.
 * `<Tabs />` используется совместно со своим дочерним компонентом `<Tabs.TabPane />`
 Для каждого TabPane обязателен уникальный атрибут (ключ) tabKey.
 * */

export function Tabs(props) {
  const [stateActiveKey, setStateActiveKey] = useState(undefined)
  useEffect(() => {
    if (!props.children) {
      return undefined
    } else if (props.children.length > 1) {
      props.children.forEach(child => {
        if (typeof child.props.tabKey === 'undefined') {
          console.error(
            '<TabPane /> components must have an unique "tabKey" prop. Check <Tabs/> component children.'
          )
        }
      })
      const {children = []} = props
      const firstChildKey = children[0].props && children[0].props.tabKey
      setStateActiveKey(
        props.activeKey || props.defaultActiveKey || firstChildKey
      )
    } else {
      if (typeof props.children.props.tabKey === 'undefined') {
        console.error(
          '<TabPane /> components must have an unique "tabKey" prop. Check <Tabs/> component children.'
        )
      }
      const {children = []} = props
      const firstChildKey = children.props && children.props.tabKey
      setStateActiveKey(
        props.activeKey || props.defaultActiveKey || firstChildKey
      )
    }
  }, [props])

  useEffect(() => {
    if ('activeKey' in props) {
      setStateActiveKey(props.activeKey)
    }
    return undefined
  }, [props])

  const handleChange = newActiveKey => {
    setStateActiveKey(newActiveKey)
    typeof props.onChange === 'function' && props.onChange(newActiveKey)
  }

  const onTabClick = tabKey => {
    if (tabKey !== stateActiveKey) {
      handleChange(tabKey)
    }
  }

  const getTabsItems = () => {
    const {children} = props

    if (children.length > 1) {
      return children.map(child => {
        const {tabKey, tab, disabled} = child.props
        return (
          <Tab
            isActive={stateActiveKey === tabKey}
            onClick={disabled ? noop : () => onTabClick(tabKey)}
            disabled={disabled}
          >
            {tab}
          </Tab>
        )
      })
    } else {
      const {tabKey, tab, disabled} = children.props
      return (
        <Tab
          isActive={stateActiveKey === tabKey}
          onClick={disabled ? noop : () => onTabClick(tabKey)}
          disabled={disabled}
        >
          {tab}
        </Tab>
      )
    }
  }

  const getChildren = () => {
    const {children} = props
    if (children.length > 1) {
      return children.map(child => {
        const tabKey = child.props.tabKey
        const props = {
          isActive: stateActiveKey === tabKey
        }
        return React.cloneElement(child, props)
      })
    } else {
      const tabKey = children.props.tabKey
      const props = {
        isActive: stateActiveKey === tabKey
      }
      return React.cloneElement(children, props)
    }
  }

  return (
    <Box>
      <TabsList>{getTabsItems()}</TabsList>
      {getChildren()}
    </Box>
  )
}

Tabs.TabPane = TabPane
Tabs.propTypes = {
  /** Активная вкладка */
  activeKey: propTypes.string,
  /** Активная вкладка по умолчанию */
  defaultActiveKey: propTypes.string,
  /** Функция-хендлер */
  onChange: propTypes.func
}
/** @component */
export default Tabs
