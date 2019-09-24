import React, {useState} from 'react'
import Box from './Box'

export function RadioGroup(props) {
  const [activeValue, setActiveValue] = useState(
    props.value || props.defaultValue || ''
  )

  const handleChange = newActiveValue => {
    setActiveValue(newActiveValue)
    typeof props.onChange === 'function' && props.onChange(newActiveValue)
  }

  const onRadioChange = (checked, value) => {
    if (checked && value) {
      handleChange(value)
    }
  }

  const getChildren = () => {
    const {children} = props

    return children.map(child => {
      const value = child.props.value
      const props = {
        key: value,
        checked: activeValue === value,
        onChange: onRadioChange
      }
      return React.cloneElement(child, props)
    })
  }

  return <Box>{getChildren()}</Box>
}

/** @component */
export default RadioGroup
