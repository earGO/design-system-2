import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Text, Flex, Input} from '@design-system/atoms'
import ActionCell from './ActionCell'

const InputHint = styled(Text)`
  position: absolute;
  top: 3px;
  left: 16px;
  font-size: 8px;
  text-transform: capitalize;
  color: ${props => (props.theme ? props.theme.colors.darkGrey : '#949394')};
`

function HintedInput({hint, placeholder, value, onChange, ...props}) {
  return (
    <Flex flexFlow={'column nowrap'}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        paddingTop={12}
        {...props}
      />
      <InputHint>{hint}</InputHint>
    </Flex>
  )
}

HintedInput.propTypes = {
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

HintedInput.defaultProps = {
  hint: 'please provide a hint',
  placeholder: 'please provide a placeholder',
  onChange: () => {}
}

HintedInput.displayName = `HintedInput`

/** @component */
export default HintedInput
