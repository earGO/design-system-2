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
      background: ${themeGet('colors.white', '#ffffff')};
    `
  }
  if (checked) {
    return css`
      background: ${themeGet('colors.lightBlue', '#0091ea')};
    `
  }
  return css`
    background: ${themeGet('colors.grey', '#b5b5b5')};
  `
}

const tracksBorder = ({disabled}) => {
  if (disabled) {
    return css`
      border-color: ${themeGet('colors.grey', '#b5b5b5')};
    `
  }
  return `border-color: transparent;`
}

const handleBackground = ({disabled}) => {
  return css`
    background: ${disabled
      ? themeGet('colors.grey', '#b5b5b5')
      : themeGet('color.white', '#ffffff')};
  `
}

const handlePosition = ({checked, disabled}) => {
  if (checked && disabled) {
    return css`
      top: 0px;
      left: 12px;
    `
  }
  if (checked) {
    return css`
      top: 0px;
      left: 12px;
    `
  }
  if (disabled) {
    return css`
      top: 0px;
      left: 0px;
    `
  }
  return css`
    top: 0px;
    left: 1px;
  `
}

const ToggleHandle = styled(Absolute)`
  width: 14px;
  height: 14px;
  border: 1px solid transparent;
  border-radius: 8px;
  ${handleBackground}
  ${handlePosition}
  transition: left ${themeGet('durations.normal', '300ms')};
`

const ToggleTrack = styled.button`
  position: relative;
  outline: none;
  width: 28px;
  height: 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${themeGet('radii[2]', '8px')};
  ${tracksBackground}
  ${tracksBorder}
  cursor: ${({disabled}) => (disabled ? `not-allowed` : `pointer`)};
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
