import React from 'react'
import PropTypes from 'prop-types'
import './iconfonts/icon.css'
import styled, {keyframes, css} from 'styled-components'
import {Flex} from './index'

const sizes = {
  0: ' md-14',
  1: ' md-18',
  2: ' md-24',
  3: ' md-36',
  4: ' md-48',
  14: ' md-14',
  18: ' md-18',
  24: ' md-24',
  36: ' md-36',
  48: ' md-48'
}

const wrapperSizes = {
  0: 14,
  1: 18,
  2: 24,
  3: 36,
  4: 48,
  14: 14,
  18: 18,
  24: 24,
  36: 36,
  48: 48
}

const colors = {
  primary: ' blue',
  hover: ' lightBlue',
  success: ' green',
  warning: ' orange',
  error: ' red',
  border: ' semiLightGrey',
  disabled: ' grey',
  highlight: ' lightGrey',
  onclick: ' darkBlue',
  scrollbar: ' grey',
  black: ' black',
  white: ' white',
  text: ' black'
}

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`
const spinanimation = css`
  animation: ${rotate} 2s linear infinite;
`

const IconBordered = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  ${props => props.spin && spinanimation};
`

const Icon = ({name, size, color, ...props}) => {
  let nameForClass = 'material-icons '
  let iconWrapperSize = 24
  if (sizes[size] !== undefined) {
    nameForClass = nameForClass + sizes[size]
  } else {
    nameForClass = nameForClass + 'md-18 '
  }
  if (colors[color] !== undefined) {
    nameForClass = nameForClass + colors[color]
  } else {
    nameForClass = nameForClass + 'black '
  }
  if (props.hasOwnProperty('hidden')) {
    nameForClass = nameForClass + ' hidden'
  }
  if (wrapperSizes[size] !== undefined) {
    iconWrapperSize = wrapperSizes[size]
  }
  return (
    <IconBordered size={iconWrapperSize} {...props}>
      <i className={`${nameForClass}`}>{name}</i>
    </IconBordered>
  )
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  spin: PropTypes.bool
}

Icon.defaultProps = {
  name: 'live_help',
  size: 2,
  color: 'text',
  spin: false
}

/** @component */
export default Icon
