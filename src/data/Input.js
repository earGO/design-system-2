import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import propTypes from 'prop-types'
import Relative from '../primitives/Relative'
import Absolute from '../primitives/Absolute'
import { space, width } from 'styled-system'
import omit from 'lodash/omit'


// #TBD: Input.TextArea + allowClear prop. Как будет работать c suffix?



const propsToOmit = ['suffix', 'prefix', 'width', 'value']

const disabled = props =>
  props.disabled &&
  css`
    color: ${props.theme.colors.Grey};
    background: ${props.theme.colors.semiLightGrey};
    cursor: not-allowed;
  `

const size = ({ size = 'medium', theme}) => {
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
  ${width}
  ${space}
  ${size}
  ${props => `background: ${props.theme.colors.lightGrey}`}
  ${disabled}
  border: 0;
`

const Wrapper = styled(Relative)({
  display: 'flex',
  alignItems: 'center',
})

const Adornment = styled(Absolute)({
  display: 'flex',
})

/** Получение данных от пользователя.*/
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: typeof props.value !== 'undefined' ? props.defaultValue : props.value
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      }
    }
    return null;
  }

  saveInput = (node) => {
    this.input = node;
  }

  focus = () => {
    this.input.focus();
  }

  blur = () => {
    this.input.blur();
  }

  render() {
    const { prefix, suffix, width } = this.props
    return (
      <Wrapper width={width}>
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
      </Wrapper>
    )
  }
}

Input.displayName = 'Input'
Input.propTypes = {
  /** Ширина враппера для инпута.*/
  width: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** Иконка в начале инпута. */
  prefix: propTypes.element,
   /** Иконка в конце инпута. */
  suffix: propTypes.element,
  /** Размер инпута: */
  size: propTypes.oneOf(['small', 'medium', 'large']),
}

Input.defaultProps = {
  size: 'medium',
}

/** @component */
export default Input
