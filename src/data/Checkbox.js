import React, { Component } from 'react'
import Flex from '../primitives/Flex'
import Icon from '../elements/Icon'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, themeGet } from 'styled-system'
import { FIELD_DATA_PROP } from './Form'
import omit from 'lodash/omit'

const size = ({ size = 'medium' }) => {
  const sizes = {
    small: {
      width: '16px',
      height: '16px',
    },
    medium: {
      width: '20px',
      height: '20px',
    },
    large: {
      width: '24px',
      height: '24px',
    },
  }
  return css(sizes[size])
}

const iconSize = ({ size = 'medium' }) => {
  const scales = {
    small: 0.8,
    medium: 1,
    large: 1.2,
  }
  return `transform: scale(${scales[size]});`
}

const background = ({ checked, disabled, ...rest }) => {
  const { checkbox } = rest.theme.colors
  const getColor = (checked, disabled) => {
    if (disabled) {
      return checkbox.disabled
    }
    return checked
      ? checkbox.checked
      : checkbox.unchecked
  }
  return `background: ${getColor(checked, disabled)}`
}

const border = ({ checked, disabled, ...rest }) => {
  const { colors } = rest.theme
  return !(checked || disabled) && `border: 1px solid ${colors.black}`
}

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
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

export const StyledCheckbox = styled(Flex)`
  justify-content: center;
  align-items: center;
  border-radius: ${themeGet('radii[1]', 4)}px;
  transition: all ${themeGet('duration.fast', 300)};
  ${size}
  ${background}
  ${border}
  ${Icon} {
    ${iconSize}
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
  ${CheckboxInput}:focus + & {
    box-shadow: 0 0 0 1px ${props => props.theme.colors.blue};
  }
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  ${space}
`

const CheckboxContainer = styled(Flex)`
  display: inline-flex;
  align-content: center;
`

/** Используется для выбора одного или нескольких значений из представленных вариантов */
class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: typeof props.checked !== 'undefined' ? props.checked : false,
    }
  }

  handleChange = ({ target: { checked } }) => {
    this.setState({ checked })
    this.props.onChange && this.props.onChange(checked)
  }

  getCheckedValue = () => {
    if (this.props[FIELD_DATA_PROP]) {
      // Controlled by rc-form, use value prop
      return this.props.value;
    }
    // If controlled (not by rc-form), props value > state.value
    return typeof this.props.checked !== 'undefined' 
      ? this.props.checked 
      : this.state.checked
  }

  render() {
    return (
      <Label {...this.props}>
        <CheckboxContainer onChange={this.handleChange}>
          <CheckboxInput {...omit(this.props, ['onChange'])} checked={this.getCheckedValue()} value={this.props.value} readOnly/>
          <StyledCheckbox checked={this.getCheckedValue()} size={this.props.size} disabled={this.props.disabled} value={this.props.value}>
            <Icon name="check" color="white" />
          </StyledCheckbox>
        </CheckboxContainer>
        {/* this.props.children instead of text maybe? */}
        <Text.span ml={2} regular>
          {this.props.label}
        </Text.span>
      </Label>
    )
  }
}

Checkbox.propTypes = {
  /** Состояние чекбокса - выбран или нет. */
  checked: propTypes.bool,
  /** Возможность редактирования */
  disabled: propTypes.bool,
  /** Текст чекбокса. */
  label: propTypes.string,
  /** Размер чекбокса */
  size: propTypes.oneOf(['small', 'medium', 'large']),
  /** Функция - хендлер, вызывается при клике на чекбокс */
  onChange: propTypes.func,
  /** margin */
  m: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-top*/
  mt: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-right*/
  mr: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-bottom*/
  mb: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-left*/
  ml: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-left and margin-right */
  mx: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** margin-top and margin-bottom */
  my: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding */
  p: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-top*/
  pt: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-right*/
  pr: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-bottom*/
  pb: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-left*/
  pl: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-left and padding-right */
  px: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** padding-top and padding-bottom */
  py: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
}

/** @component */
export default Checkbox
