import React from 'react'
import {Box, Select, Text} from '@design-system/atoms'
import PropTypes from 'prop-types'
import ActionCell from './ActionCell'

function TitledSelect({
  width,
  title,
  options,
  global,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <Box width={width} mb={1} mt={1} p={1}>
      <Text fontSize={'12px'} color={'darkGray'} mb={1}>
        {title}
      </Text>
      <Select
        options={options}
        placeholder={placeholder}
        value={global}
        onChange={onChange}
        size="medium"
        closeMenuOnScroll
        {...props}
      />
    </Box>
  )
}

TitledSelect.propTypes = {
  width: PropTypes.number,
  title: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func
}

TitledSelect.defaultProps = {
  width: 352,
  title: 'please set title',
  placeholder: 'Выбор из списка',
  options: [{value: 'please give options', label: 'please give options'}],
  value: '',
  onChange: () => {}
}

TitledSelect.displayName = 'TitledSelect'

/** @component */
export default TitledSelect
