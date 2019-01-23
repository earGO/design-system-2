import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import propTypes from 'prop-types'
import { Relative, Absolute } from '../index'
import { space, width } from 'styled-system'
import omit from 'lodash/omit'

const propsToOmit = ['suffix', 'prefix', 'width']
const disabled = props =>
  props.disabled &&
  css`
    color: ${props.theme.colors.Grey};
    background: ${props.theme.colors.semiLightGrey};
    cursor: not-allowed;
  `

const HTMLInput = styled('input')`
  ${width}
  ${space}
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

class Input extends Component {
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
          py={2}
          width="100%"
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
  /** Ширина инпута.*/
  width: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
  /** Иконка в начале инпута. */
  prefix: propTypes.element,
   /** Иконка в конце инпута. */
  suffix: propTypes.element,
  /** Размер инпута: #TBD */
  size: propTypes.oneOf(['small', 'medium', 'large']),
}

/** @component */
export default Input
