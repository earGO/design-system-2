import React from 'react'

import PropTypes from 'prop-types'
import MaterialIcon, {colorPalette} from 'material-icons-react'
import theme from '@design-system/theme'

const Icon = ({name, size, color, ...props}) => {
  const iconColor = theme.colors[color]
  console.log(iconColor)
  return <MaterialIcon icon={name} size={size} color={iconColor} {...props} />
}

Icon.defaultProps = {
  name: 'error',
  size: 24
}
export default Icon
