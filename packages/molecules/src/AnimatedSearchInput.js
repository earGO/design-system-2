import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Icon, Box, Input} from '@design-system/atoms'

const IconButton = styled(Box)`
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`
/** Поле ввода для поиска, такое же как `<SearchInput/>`, но расширяющееся, когда пользователь кликает на него,
 * и сужающееся, когда кликает куда-то ещё */

export function AnimatedSearchInput({
  onChange,
  onSearch,
  placeholder,
  shrinkWidth,
  growWidth,
  ...props
}) {
  const [value, setValue] = React.useState('')
  const handleChange = value => {
    setValue(value)
    onChange && typeof onChange === 'function' && onChange(value)
    onSearch && typeof onSearch === 'function' && onSearch(value)
  }

  const handleClear = () => {
    setValue('')
    onChange && typeof onChange === 'function' && onChange('')
    onSearch && typeof onSearch === 'function' && onSearch('')
  }

  const prefix = (
    <IconButton onClick={handleChange} pt={1}>
      <Icon name="search" />
    </IconButton>
  )
  const suffix = (
    <IconButton onClick={handleClear} pt={1}>
      <Icon name="close" />
    </IconButton>
  )

  return (
    <Box {...props}>
      <Input
          resizable
        size="small"
        value={value}
        placeholder={placeholder}
        prefix={prefix}
        suffix={Boolean(value) ? suffix : null}
        onChange={handleChange}
        shrinkWidth={shrinkWidth}
        growWidth={growWidth}
        {...props}
      />
    </Box>
  )
}

AnimatedSearchInput.propTypes = {
  /** Placeholder */
  placeholder: PropTypes.string,
  /** Внешняя функция изменения содержимого */
  onChange: PropTypes.func,
  /** Внешнее значение */
  value: PropTypes.string,
  /** Ширина поля в сжатом состоянии */
  shrinkWidth: PropTypes.number,
  /** Ширина поля в расширенном состоянии */
  growWidth: PropTypes.number
}

AnimatedSearchInput.defaultProps = {
  placeholder: 'Поиск',
  value: '',
  onChange: () => {},
  shrinkWidth: 80,
  growWidth: 160
}

AnimatedSearchInput.displayName = `AnimatedSearchInput`

/** @component */
export default AnimatedSearchInput
