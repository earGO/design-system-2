import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import baseTheme from '.'
console.log(normalize)

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
}

${normalize};
`

export const Base = styled.div`
  font-family: ${props => props.theme.font.main};
  line-height: 1.4;
  height: 100%;

  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = ({ customBreakpoints, ...props }) => {
  const breakpoints = customBreakpoints || baseTheme.breakpoints
  const theme = {
    ...baseTheme,
    ...props.theme,
    breakpoints,
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>
        <Base {...props} />
      </StyledThemeProvider>
    </React.Fragment>
  )
}

ThemeProvider.propTypes = {
  /**
   * Массив значений в пикселях для кастмизации дефолтных брейкпоинтов
   */
  customBreakpoints: PropTypes.arrayOf(PropTypes.number),
}

export default ThemeProvider
