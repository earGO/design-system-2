import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import propTypes from 'prop-types'
import Relative from '../primitives/Relative'
import Absolute from '../primitives/Absolute'
import { space, width } from 'styled-system'
import omit from 'lodash/omit'

// #TBD: Input.TextArea + allowClear prop. Как будет работать c suffix?

const propsToOmit = ['suffix', 'prefix', 'width', 'value', 'wrapperStyle']

const disabled = props =>
  props.disabled &&
  css`
    opacity: 0.4;
    /* color: ${props.theme.colors.Grey};
    background: ${props.theme.colors.semiLightGrey}; */
    cursor: not-allowed;
  `

const size = ({ size = 'medium', theme }) => {
  const sizes = {
    // Same as button heights, but with height, instead of paddings.
    small: {
      fontSize: theme.fontSizes[0],
      height: 30,
    },
    medium: {
      fontSize: theme.fontSizes[1],
      height: 38,
    },
    large: {
      fontSize: theme.fontSizes[2],
      height: 46,
    },
  }
  return sizes[size]
}

const HTMLInput = styled('input')`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii[1] + 'px'};
  background: ${props => props.theme.colors.white};

  ${width}
  ${space}
  ${size}
  ${disabled};
`

export const InputWrapper = styled(Relative)({
  display: 'flex',
  alignItems: 'center',
})

const Adornment = styled(Absolute)({
  display: 'flex',
})

/** Получение данных от пользователя.*/
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: typeof props.value !== 'undefined' ? props.defaultValue : props.value,
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      }
    }
    return null
  }

  saveInput = node => {
    this.input = node
  }

  focus = () => {
    this.input.focus()
  }

  blur = () => {
    this.input.blur()
  }

  render() {
    const { prefix, suffix, width, wrapperStyle } = this.props
    return (
      <InputWrapper width={width} style={wrapperStyle}>
        {prefix && (
          <Adornment left={0} pl={2}>
            {prefix}
          </Adornment>
        )}
        <HTMLInput
          {...omit(this.props, propsToOmit)}
          pl={prefix ? 4 : 2}
          pr={suffix ? 4 : 2}
          width="100%"
          value={this.state.value}
          ref={this.saveRef}
        />
        {suffix && (
          <Adornment right={0} pr={2}>
            {suffix}
          </Adornment>
        )}
      </InputWrapper>
    )
  }
}

Input.propTypes = {
  /** Ширина враппера для инпута.*/
  width: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** Иконка в начале инпута. */
  prefix: propTypes.element,
  /** Иконка в конце инпута. */
  suffix: propTypes.element,
  /** Размер инпута: */
  size: propTypes.oneOf(['small', 'medium', 'large']),
  /** Стили враппера */
  wrapperStyle: propTypes.object,
}

Input.defaultProps = {
  size: 'medium',
}

Input.displayName = 'Input'

/** @component */
export default Input
