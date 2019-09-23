import React, {useState, useEffect} from 'react'
import propTypes from 'prop-types'
import styled, {css} from 'styled-components'
import themeGet from '@styled-system/theme-get'
import Absolute from './Absolute'
import {FIELD_DATA_PROP} from './Form'

const noop = () => {}

const tracksBackground = ({checked, disabled}) => {
  if (disabled) {
    return css`
      background: ${themeGet('colors.grey', '#b5b5b5')};
    `
  }
  if (checked) {
    return css`
      background: ${themeGet('colors.lightBlue', '#0091ea')};
    `
  }
  return css`
    background: ${themeGet('colors.white', '#ffffff')};
  `
}

const tracksBorder = ({checked, disabled}) => {
  if (!checked && !disabled) {
    return css`
      border-color: ${themeGet('colors.black', '#3a3a3a')};
    `
  }
  return `border-color: transparent`
}

const handleBackground = ({disabled}) => {
  return css`
    background: ${disabled
      ? themeGet('colors.lightGrey', '#f5f5f5')
      : themeGet('color.white', '#ffffff')};
  `
}

const handleBorder = ({checked, disabled}) => {
  if (!checked && !disabled) {
    return css`
      border-color: ${themeGet('colors.black', '#3a3a3a')};
    `
  }
  return 'border-color: transparent'
}

const handlePosition = ({checked, disabled, ...rest}) => {
  if (checked) {
    return css`
      top: 2px;
      left: 10px;
    `
  }
  return css`
    top: 2px;
    left: 2px;
  `
}

const cursor = ({disabled}) => {
  return disabled ? 'cursor: not-allowed;' : 'cursor: pointer;'
}

const ToggleHandle = styled(Absolute)`
  width: 10px;
  height: 10px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  ${handleBackground}
  ${handlePosition}
  ${handleBorder}
  transition: left ${themeGet('durations.normal', '300ms')};
`

const ToggleTrack = styled.button`
  position: relative;
  outline: none;
  width: 24px;
  height: 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${themeGet('radii[2]', '8px')};
  ${tracksBackground}
  ${tracksBorder}
  ${cursor}
  :focus {
    /* Выглядит не очень конечно - не знаю кто его рисовал, но Иванов-Тельманов ни при чем */
    border-color: ${themeGet('color.blue', '#1e88e5')};
    ${ToggleHandle} {
      border-color: ${props =>
        !props.checked && themeGet('color.blue', '#1e88e5')};
    }
  }
`

/** Используется так же, как и Checkbox, но для единственного значения. */
export function Toggle(props) {
  const [stateChecked, setStateChecked] = useState(
    typeof props.checked !== 'undefined' ? props.checked : false
  )

  useEffect(() => {
    // If controlled by form
    if (props[FIELD_DATA_PROP]) {
      setStateChecked(props.value)
    } else if ('checked' in props) {
      setStateChecked(props.checked)
    }
  }, [props])

  const handleChange = event => {
    event.preventDefault()
    const flippedValue = !stateChecked
    setStateChecked(flippedValue)
    typeof props.onChange === 'function' && props.onChange(flippedValue)
  }
  return (
    <ToggleTrack
      checked={stateChecked}
      disabled={props.disabled}
      onClick={props.disabled ? noop : handleChange}
    >
      <ToggleHandle checked={stateChecked} disabled={props.disabled} />
    </ToggleTrack>
  )
}

Toggle.propTypes = {
  /** Состояние тумблера. */
  checked: propTypes.bool,
  /** Возможность редактирования */
  disabled: propTypes.bool,
  /** Функция - хендлер, вызывается при клике на тумблер. */
  onChange: propTypes.func
}

/** @component */
export default Toggle
