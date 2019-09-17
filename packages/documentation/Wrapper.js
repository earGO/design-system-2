import React from 'react'
import theme, {ThemeProvider} from '@design-system/theme'

function Wrapper(props) {
  return <ThemeProvider {...props} theme={theme} />
}

export default Wrapper
