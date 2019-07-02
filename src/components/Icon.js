import React from 'react'
import PropTypes from 'prop-types'
import './icon-font/icon.css'

const sizes = {
  1: ' md-18',
  2: ' md-24',
  3: ' md-36',
  4: ' md-48',
}

const Icon = ({ name, size, color }) => {
  const nameForClass = 'material-icons' + sizes[size]
  return <i className={`${nameForClass}`}>{name}</i>
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  name: PropTypes.string,
}
// rotate,

Icon.defaultProps = {
  name: 'live_help',
  size: 2,
  color: 'primary',
}

/** @component */
export default Icon
