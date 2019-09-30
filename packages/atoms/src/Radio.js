import React, {useState, useEffect} from 'react'
import Flex from './Flex'
import Text from './Text'

import propTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {space} from 'styled-system'
import themeGet from '@styled-system/theme-get'
import Icon from './Icon'
import {FIELD_DATA_PROP} from './Form'
import RadioGroup from './RadioGroup'
import omit from 'lodash/omit'

const size = ({size = 'medium'}) => {
  const sizes = {
    small: css`
      width: 14px;
      height: 14px;
    `,
    medium: css`
      width: 16px;
      height: 16px;
    `,
    large: css`
      width: 20px;
      height: 20px;
    `
  }
  return css(sizes[size])
}

const RadioInput = styled.input.attrs({type: 'radio'})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledRadio = styled(Flex)`
  justify-content: center;
  align-items: center;
  transition: all ${themeGet('duration.fast', 300)};
  border-radius: 50%;
  ${size}
  background-color: ${({checked, disabled, ...rest}) => {
    const {colors} = rest.theme
    const {radio} = colors
    const bgColor = checked && disabled ? radio.disabled : colors.lightGrey
    return bgColor
  }};
  border: ${({checked, disabled, ...rest}) => {
    const {colors} = rest.theme
    const {radio} = colors
    if (disabled) {
      return `solid 3px ${radio.disabled}`
    } else if (checked) {
      return `solid 3px ${radio.checked}`
    }
    return `solid 3px ${colors.grey}`
  }};
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${space}
`

const RadioContainer = styled(Flex)`
  display: inline-flex;
  align-content: center;
`

export function Radio(props) {
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
    const {checked} = event.target
    setStateChecked(checked)
    typeof props.onChange === 'function' && props.onChange(checked, props.value)
  }

  return (
    <Label {...props}>
      <RadioContainer onChange={handleChange}>
        <RadioInput
          {...omit(props, ['onChange', 'value'])}
          checked={stateChecked}
          name={props.name}
          readOnly
        />
        <StyledRadio
          checked={stateChecked}
          size={props.size}
          disabled={props.disabled}
        >
          {/* Icon для выстраивания чекбоксов с разными border-width на base line  */}
          <Icon name="radio_button_unchecked" hidden />
        </StyledRadio>
      </RadioContainer>
      {/* this.props.children instead of text maybe? */}
      <Text inline regular ml={2} id={`radio-text-${props.label}`}>
        {props.label}
      </Text>
    </Label>
  )
}

Radio.propTypes = {
  /** Состояние радио баттона - выбран или нет. */
  checked: propTypes.bool,
  /** Возможность редактирования */
  disabled: propTypes.bool,
  /** Текст радио баттона */
  label: propTypes.string,
  /** Размер радио баттона */
  size: propTypes.oneOf(['small', 'medium', 'large']),
  /** Функция - хендлер, вызывается при клике на радио баттон */
  onChange: propTypes.func,
  /** margin */
  m: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-top*/
  mt: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** margin-right*/
  mr: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** margin-bottom*/
  mb: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** margin-left*/
  ml: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** margin-left and margin-right */
  mx: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** margin-top and margin-bottom */
  my: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding */
  p: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-top*/
  pt: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding-right*/
  pr: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding-bottom*/
  pb: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding-left*/
  pl: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding-left and padding-right */
  px: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** padding-top and padding-bottom */
  py: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array])
}

Radio.Group = RadioGroup

/** @component */
export default Radio
