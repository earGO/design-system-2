import React from 'react'
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
  }
  & input::-webkit-inner-spin-button,
  & input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`

function NumericInput({globalValue, onChange, disabled, ...props}) {
  console.log('NumericInput sees value as: ', globalValue)
  const handleChange = newValue => {
    console.log(typeof parseInt(newValue))
    if (typeof parseInt(newValue) !== 'number') {
      console.log('not a number')
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
        top={'2px'}
      >
        <Icon name={'keyboard_arrow_up'} size={1} />
      </ArrowsContainer>
      <ArrowsContainer
        disabled={disabled}
        onClick={handleDecrement}
        top={'18px'}
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

export default NumericInput
