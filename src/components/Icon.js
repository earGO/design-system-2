import React from 'react'
import PropTypes from 'prop-types'
import './icon-font/icon.css'

const sizes = {
  1: ' md-18',
  2: ' md-24',
  3: ' md-36',
  4: ' md-48',
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
  text: ' black',
}

const Icon = ({ name, size, color, ...props }) => {
  let nameForClass = ''
  if (sizes[size] !== undefined && colors[color] !== undefined) {
    nameForClass = 'material-icons' + sizes[size] + colors[color]
  } else {
    nameForClass = 'material-icons md-18 error'
  }
  if (props.hasOwnProperty('spin')) {
    nameForClass = nameForClass + ' spin'
  }
  if (props.hasOwnProperty('hidden')) {
    nameForClass = nameForClass + ' hidden'
  }
  return <i className={`${nameForClass}`}>{name}</i>
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
}
// rotate,

Icon.defaultProps = {
  name: 'live_help',
  size: 2,
  color: 'text',
}

/** @component */
export default Icon
