import React from 'react'
import PropTypes from 'prop-types'
import {Box, Text, Input} from '@design-system/atoms'

/** Инпут с дополнительным заголовком для использования в формах */
export function TitledInput({
  width,
  title,
  placeholder,
  global,
  onChange,
  ...props
}) {
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
  /** Ширина инпута */
  width: PropTypes.number,
  /** Заголовок */
  title: PropTypes.string,
  /** Плейсхолдер */
  placeholder: PropTypes.string,
  /** Внешнее значение, передаваемое в инпут */
  global: PropTypes.any,
  /** Внешняя функция изменения инпута */
  onChange: PropTypes.func
}

TitledInput.defaultProps = {
  width: 352,
  title: 'Введите заголовое',
  placeholder: 'Введите placeholder',
  global: '',
  onChange: () => {}
}

TitledInput.displayName = 'TitledInput'

/** @component */
export default TitledInput
