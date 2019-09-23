import React from 'react'
import propTypes from 'prop-types'
import {Absolute, Flex, Icon, Input} from '@design-system/atoms'
import styled from 'styled-components'

const ArrowsContainer = styled(Absolute)`
  display: ${props => (props.disabled ? 'none' : 'flex')};
  right: 15px;
  transition: all;
  transition-duration: ${props => props.theme.duration.fast};
  transition-timing-function: ${props => props.theme.timingFunctions.easeInOut};
  cursor: pointer;
  z-index: 3;
  i {
    color: black;
  }
  :hover {
    i {
      color: ${props => props.theme.colors.primary};
    }
  }
`
/** This one disables native increment/decrement arrows when Input is focused */
const NoArrowsWrapper = styled(Flex)`
  & input {
    -moz-appearance: textfield;
    border-color: ${props => props.theme.colors.darkGrey};
  }
  & input::-webkit-inner-spin-button,
  & input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`
/** Инпут с типом "число" - не позволяет ввести ничего, кроме число, позволяет повышать и понижать число на 1 стрелками.
 * Принимает все пропсы, применимые для обычного инпута */

export function NumericInput({globalValue, onChange, disabled, ...props}) {
  const handleChange = newValue => {
    if (typeof parseInt(newValue) !== 'number') {
      onChange && onChange(1)
    } else {
      onChange && onChange(newValue)
    }
  }
  const handleIncrement = () => {
    handleChange(globalValue + 1)
  }
  const handleDecrement = () => {
    if (globalValue - 1 > 0) {
      handleChange(globalValue - 1)
    } else {
      handleChange(1)
    }
  }
  return (
    <NoArrowsWrapper flexDirection={'row'} flexWrap={'flex-start'}>
      <ArrowsContainer
        disabled={disabled}
        onClick={handleIncrement}
        top={'6px'}
      >
        <Icon name={'keyboard_arrow_up'} size={1} />
      </ArrowsContainer>
      <ArrowsContainer
        disabled={disabled}
        onClick={handleDecrement}
        top={'22px'}
      >
        <Icon name={'keyboard_arrow_down'} size={1} />
      </ArrowsContainer>
      <Input
        type={'number'}
        value={globalValue}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
    </NoArrowsWrapper>
  )
}

NumericInput.propTypes = {
  /** Числовое значение, забираемое из инпута */
  globalValue: propTypes.number,
  /** Внешнаяя функция изменения содержимого инпута */
  onChange: propTypes.func,
  /** Переменная на "выключение" инпута */
  disabled: propTypes.bool
}

NumericInput.defaultProps = {
  /** Числовое значение, забираемое из инпута */
  globalValue: 0,
  /** Внешнаяя функция изменения содержимого инпута */
  onChange: () => {},
  /** Переменная на "выключение" инпута */
  disabled: false
}

NumericInput.displayName = 'NumericInput'

/** @component */
export default NumericInput
