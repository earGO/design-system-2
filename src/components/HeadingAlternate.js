import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

const sizes = {
  h1: 6,
  h2: 5,
  h3: 4,
  h4: 3,
  h5: 2,
  h6: 1,
}

function HeadingAlternate({ tag, ...props }) {
  return <Text fontSize={sizes[tag]} caps={tag == 'h6'} bold={!(tag == 'h3') && !(tag == 'h4')} {...props} />
}

HeadingAlternate.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

HeadingAlternate.defaultProps = {
  tag: 'h3',
  m: 0,
}

HeadingAlternate.displayName = 'HeadingAlternate'

/** @component */
export default HeadingAlternate
