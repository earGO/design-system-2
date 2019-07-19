import React from 'react'
import ThemeProvider from '../src/theme/ThemeProvider'
import theme from '../src/theme'

function Wrapper(props) {
  return <ThemeProvider {...props} theme={theme} />
}

export default Wrapper
