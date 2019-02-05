import * as React from 'react'
import propTypes from 'prop-types'
import RSelect, { components } from 'react-select'
import AsyncRSelect from 'react-select/lib/Async'
import { FixedSizeList as List } from 'react-window'
import styled, { ThemeConsumer, css } from 'styled-components'
import Icon from '../elements/Icon'
import Box from '../primitives/Box'

/**
 * TODO:
 * 1) Combobox values remake/restyling.
 * 2) Option groups с виртуализацией. Сейчас заработают только в простом виде.
 */

const OPTION_HEIGHT = 38

const customStyles = {
  control: (base, props) => {
    const { systemTheme } = props.selectProps
    return {
      ...base,
      // TBD => focus color.
      boxShadow: props.isFocused ? `0 0 0 1px ${systemTheme.colors.focus}` : 0,
    }
  },
  menuList: (base, props) => {
    const { systemTheme } = props.selectProps
    return {
      ...base,
      '&::-webkit-scrollbar': {
        height: '8px',
        backgroundColor: 'transparent',
        width: '8px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `${systemTheme.colors.scrollbar}`,
        borderRadius: '10px',
      },
      scrollbarColor: `${systemTheme.colors.scrollbar} transparent`,
      scrollbarWidth: 'thin',
    }
  },
  indicatorSeparator: base => ({ ...base, width: '0px' }),
  option: (base, props) => {
    const { systemTheme } = props.selectProps
    return { ...base, ':active': { backgroundColor: systemTheme.colors.highlight } }
  },
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name="chevron-down" />
    </components.DropdownIndicator>
  )
}

// MenuList - выпадающее меню, открывается при клике на селект.
// Подход говно, надо бы рефакторнуть.
// #TODO - refactor this stuff.
const scrollStyles = ({ theme }) => {
  return css`
    &::-webkit-scrollbar {
      height: 8px;
      background-color: transparent;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.scrollbar};
      border-radius: 10px;
    }
    scrollbar-color: ${theme.colors.scrollbar} transparent;
    scrollbar-width: thin;
  `
}

const StyledList = styled(List)`
  ${scrollStyles}
`

const MenuList = optionHeight =>
  /** Класс, чтобы ArrowUp/ArrowDown скроллили List */
  class MenuList extends React.Component {
    state = {
      currentIndex: null,
    }

    list = React.createRef()

    static getDerivedStateFromProps({ children }) {
      const _children = Array.isArray(children) ? children : [children]
      const currentIndex = Math.max(_children.findIndex(({ props: { isFocused } }) => isFocused), 0)
      return {
        currentIndex,
      }
    }

    componentDidUpdate() {
      const { currentIndex } = this.state
      currentIndex && this.list.current.scrollToItem(currentIndex)
    }

    render() {
      const { options, children, maxHeight, getValue } = this.props
      const [value] = getValue()
      const initialOffset = options.indexOf(value) * optionHeight
      if (!children.length) {
        /* No option message */
        return <Box>{children}</Box>
      }
      return (
        <StyledList
          ref={this.list}
          height={maxHeight}
          itemCount={children.length}
          itemSize={optionHeight}
          initialScrollOffset={initialOffset}
        >
          {({ index, style }) => <div style={style}>{children[index]}</div>}
        </StyledList>
      )
    }
  }

/** тестовый вариант на хуках :) // need react 16.7.0-alpha1 */
const Hooks_MenuList = optionHeight => ({ options, children, maxHeight, getValue }) => {
  const listRef = React.useRef(null)

  const [value] = getValue()
  const initialIndex = options.indexOf(value)
  const initialOffset = options.indexOf(value) * optionHeight

  let [currentIndex, setCurrentIndex] = React.useState(initialIndex)

  React.useEffect(() => {
    const _children = Array.isArray(children) ? children : [children]
    const newIndex = Math.max(_children.findIndex(({ props: { isFocused } }) => isFocused), 0)
    if (currentIndex !== newIndex) {
      setCurrentIndex(newIndex)
      listRef.current.scrollToItem(newIndex)
    }
  }, children)

  if (!children.length) {
    /* No option message */
    return <Box>{children}</Box>
  }

  return (
    <StyledList
      ref={listRef}
      height={maxHeight}
      itemCount={children.length}
      itemSize={optionHeight}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </StyledList>
  )
}

class Select extends React.Component {
  withSystemTheme = (size, systemTheme) => theme => {
    let controlHeight = 0
    switch (size) {
      case 'small':
        controlHeight = 30
      case 'large':
        controlHeight = 46
      default:
        controlHeight = 38
    }

    return {
      ...theme,
      borderRadius: systemTheme.radii[1],
      // can override colors with systemTheme here later?
      colors: theme.colors,
      spacing: {
        controlHeight,
        baseUnit: 4,
        menuGutter: 8,
      },
    }
  }

  render() {
    const { optionHeight, size, async, virtualized } = this.props
    const selectProps = {
      styles: customStyles,
      components: {
        DropdownIndicator,
        MenuList: virtualized ? MenuList(optionHeight || OPTION_HEIGHT) : components.MenuList,
      },
      ...this.props,
    }
    return (
      <ThemeConsumer>
        {systemTheme =>
          async ? (
            <AsyncRSelect {...selectProps} systemTheme={systemTheme} theme={this.withSystemTheme(size, systemTheme)} />
          ) : (
            <RSelect {...selectProps} systemTheme={systemTheme} theme={this.withSystemTheme(size, systemTheme)} />
          )
        }
      </ThemeConsumer>
    )
  }
}

Select.displayName = 'Select'

Select.defaultProps = {
  loadingMessage: () => 'Загрузка...',
  noOptionsMessage: () => 'Нет данных.',
  placeholder: 'Выбрать',
}

Select.propTypes = {
  /** Можно ли выбирать несколько значений */
  isMulti: propTypes.bool,
  /** Доступен ли поиск. */
  isSearchable: propTypes.bool,
  /** Находится ли селект в состоянии загрузки */
  isLoading: propTypes.bool,
  /** Можно ли сбросить значение по кнопке */
  isClearable: propTypes.bool,
  value: propTypes.oneOfType([propTypes.object, propTypes.arrayOf(propTypes.object)]),
  /** Текст, который выводится при загрузке */
  loadingMessage: propTypes.func,
  /** Текст, который выводится при отсутствии опция для выбора. */
  noOptionsMessage: propTypes.func,
  /** Содержимое селекта по умолчанию. */
  placeholder: propTypes.string,
}
/** @component */
export default Select
