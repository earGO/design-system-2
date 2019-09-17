import React from 'react'
import NumericInput from './NumericInput'
import {Box, Text} from '@design-system/atoms'
import PropTypes from 'prop-types'
import ActionCell from './ActionCell'

function TitledNumericInput({width, title, onChange, globalValue, ...props}) {
  console.log(globalValue)
  return (
    <Box width={width} mb={2}>
      <Text fontSize={'12px'} mb={1}>
        {title}
      </Text>
      <NumericInput
        globalValue={globalValue}
        onChange={onChange}
        {...props}
        border={'lightGrey'}
      />
    </Box>
  )
}

TitledNumericInput.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string,
  onChange: PropTypes.func
}

TitledNumericInput.defaultProps = {
  width: 352,
  title: 'please set title',
  onChange: () => {}
}

TitledNumericInput.displayName = 'TitledNumericInput'

/** @component */
export default TitledNumericInput
