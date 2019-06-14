import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, color, fontSize, top, bottom, left, right } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme'

function Base({ name, ...props }) {
  return <FontAwesomeIcon {...props} icon={name} />
}

/**
 * SVG иконка.
 */
const Icon = styled(Base)`
  position: relative;
  flex: none;

  ${fontSize}
  ${space}
  ${color}
  ${top}
  ${right}
  ${bottom}
  ${left};
`

Icon.displayName = 'Icon'

Icon.propTypes = {
  /** Размер шрифта */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
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
  /** Плавная анимация вращения */
  spin: PropTypes.bool,
  /** Ступенчатая анимация вращения */
  pulse: PropTypes.bool,
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
  pulse: false,
  theme: theme,
}

/** @component */
export default Icon
