import React from 'react'
import PropTypes from 'prop-types'
import {Box, Text, Input} from '@design-system/atoms'

function TitledInput({width, title, placeholder, global, onChange, ...props}) {
  return (
    <Box width={width} mb={2}>
      <Text fontSize={'12px'} mb={1}>
        {title}
      </Text>
      <Input
        placeholder={placeholder}
        value={global}
        onChange={onChange}
        {...props}
        border={'lightGrey'}
      />
    </Box>
  )
}

TitledInput.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

TitledInput.defaultProps = {
  width: 352,
  title: 'please set title',
  placeholder: 'please set placeholder',
  value: '',
  onChange: () => {}
}

export default TitledInput
