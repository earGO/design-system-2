import React, {useState} from 'react'
import propTypes from 'prop-types'
import Box from './Box'
import CollapsePanel from './CollapsePanel'

/** Используется, если необходимо сгруппировать или скрыть большое количество содержимого. */

export function Collapse({activeKeys, defaultActiveKeys, onChange, children}) {
  const [activeKeysFromState, setActiveKeysFromState] = useState(
    activeKeys || defaultActiveKeys || []
  )

  const handleChange = newActiveKeys => {
    setActiveKeysFromState(newActiveKeys)
    typeof onChange === 'function' && onChange(newActiveKeys)
  }

  const onPanelClick = panelKey => {
    let newActiveKeys = [...activeKeysFromState]
    if (activeKeysFromState.includes(panelKey)) {
      // Closed the panel
      newActiveKeys = activeKeysFromState.filter(key => key !== panelKey)
    } else {
      // Opened the panel
      newActiveKeys = [...activeKeysFromState, panelKey]
    }
    handleChange(newActiveKeys)
  }

  const getChildren = () => {
    if (children !== null && children !== undefined) {
      if (children.length) {
        return children.map((child, i) => {
          let key = child.key || String(i)
          let props = {
            key: child.key || String(i),
            panelKey: key,
            togglePanel: onPanelClick,
            // If controlled, props should be the source of truth.
            isOpen: activeKeys
              ? activeKeys.includes(key)
              : activeKeysFromState.includes(key)
          }
          return React.cloneElement(child, props)
        })
      } else {
        let key = children.key || String('singleKey')
        let props = {
          key: children.key || String('singleKey'),
          panelKey: key,
          togglePanel: this.onPanelClick,
          // If controlled, props should be the source of truth.
          isOpen: activeKeys
            ? activeKeys.includes(key)
            : activeKeysFromState.includes(key)
        }
        return React.cloneElement(children, props)
      }
    } else return null
  }

  return <Box>{getChildren()}</Box>
}

Collapse.propTypes = {
  /** Список открытых панелей. */
  activeKeys: propTypes.arrayOf(propTypes.string),
  /** Список открытых панелей по умолчанию */
  defaultActiveKeys: propTypes.arrayOf(propTypes.string),
  /** Функция-хендлер */
  onChange: propTypes.func
}

Collapse.Panel = CollapsePanel

/** @component */
export default Collapse
