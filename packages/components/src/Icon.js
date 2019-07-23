import React from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react'

const Icon = ({name, size, ...props}) => {
  return <MaterialIcon icon={name} size={size} {...props} />
}

export default Icon
