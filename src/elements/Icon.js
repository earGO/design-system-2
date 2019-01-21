import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { space, color, top, bottom, left, right } from 'styled-system'
import PropTypes from 'prop-types'
import theme from '../theme'
import icons from '../theme/icons'

const Base = ({ name, ...props }) => {
  const SvgIcon = icons[name] || icons.beer
  return <SvgIcon {...props} />
}

const scale = props => ({ transform: `scale(${props.scale})` })

const spin = scale => {
  const rotate = keyframes`
  from {
    transform: scale(${scale}) rotate(360deg);
  }
  to {
    transform: scale(${scale}) rotate(0deg);
  }`

  return css`
    ${rotate} 1s linear infinite
  `
}

/**
 * SVG иконка.
 */
const Icon = styled(Base)`
  animation: ${props => props.spin && spin(props.scale)};
  position: relative;
  flex: none;

  ${space}
  ${color}
  ${scale}
  ${top}
  ${right}
  ${bottom}
  ${left};
`

Icon.displayName = 'Icon'

Icon.propTypes = {
  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top*/
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-right*/
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-bottom*/
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left*/
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top*/
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-right*/
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-bottom*/
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left*/
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-left and padding-right */
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** Смещение сверху */
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** Смещение снизу */
  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** Смещение слева */
  left: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** Смещение справа */
  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** Анимация вращения */
  spin: PropTypes.bool,
  /** Скейлинг. сss transform scale */
  scale: PropTypes.number,
  /** Цвет иконки */
  color: PropTypes.string,
  /** @ignore */
  theme: PropTypes.any,
}

Icon.defaultProps = {
  scale: 1,
  spin: false,
  theme: theme,
}

/** @component */
export default Icon
