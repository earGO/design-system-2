import React from 'react'
import PropTypes from 'prop-types'
import './iconfonts/icon.css'
import styled, {keyframes, css} from 'styled-components'
import {Flex} from './index'
import Relative from './Relative'
import omit from 'lodash/omit'

const sizes = {
  0: ' md-14',
  1: ' md-18',
  2: ' md-24',
  3: ' md-36',
  4: ' md-48',
  14: ' md-14',
  18: ' md-18',
  24: ' md-24',
  36: ' md-36',
  48: ' md-48'
}

const wrapperSizes = {
  0: 14,
  1: 18,
  2: 24,
  3: 36,
  4: 48,
  14: 14,
  18: 18,
  24: 24,
  36: 36,
  48: 48
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
  text: ' black'
}

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const spinanimation = css`
  animation: ${rotate} 2s linear infinite;
`

// Create the keyframes
const rotateCCW = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`
const spinanimationCCW = css`
  animation: ${rotateCCW} 2s linear infinite;
`

const IconBordered = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
  ${props => props.spin && spinanimation};
  ${props => props.spinCCW && spinanimationCCW};
  user-select: none;
`

/** Компонент для иконок. Принимает как параметр имя иконки, взятое отсюда
 *  https://material.io/resources/icons/?style=baseline.
 *
 *  Сама иконка внутри компонента обёрнута во `<Relative/>`, в противном случае разные иконки
 *  некорректно отображаются в вёрстке. Соответственно можно передавать любые параметры,
 *  принимаемые `<Relative/>` для выравнивания иконки "по месту" в случае, например, стрелок. */
export function Icon({name, size, color, spin, spinCCW, ...props}) {
  let nameForClass = 'material-icons '
  let iconWrapperSize = 24
  if (sizes[size] !== undefined) {
    nameForClass = nameForClass + sizes[size]
  } else {
    nameForClass = nameForClass + 'md-24 '
  }
  if (colors[color] !== undefined) {
    nameForClass = nameForClass + colors[color]
  } else {
    nameForClass = nameForClass + 'black '
  }
  if (props.hasOwnProperty('hidden')) {
    nameForClass = nameForClass + ' hidden'
  }
  if (wrapperSizes[size] !== undefined) {
    iconWrapperSize = wrapperSizes[size]
  }
  return (
    <Relative {...omit(props, ['hidden'])}>
      <IconBordered size={iconWrapperSize} {...{spin, spinCCW}}>
        <i className={`${nameForClass}`}>{name}</i>
      </IconBordered>
    </Relative>
  )
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  /** название иконки, взятое из каталога Material icons */
  name: PropTypes.string,
  /** Один из системных цветов. Если передан цвет,
   * не включённый в словарь системных цветов, иконка будет чёрной */
  color: PropTypes.string,
  /** Один из размеров [0,1,2,3,4], или в пикселях [14,18,24,36,48] */
  size: PropTypes.number,
  /** Если передать spin=true, иконка будет вращаться по часовой стрелке */
  spin: PropTypes.bool,
  /** Если передать spinCCW=true, иконка будет вращаться против часовой стрелки */
  spinCCW: PropTypes.bool,
  /** Параметр позволяет "спрятать" иконку и не отображать её на странице.  */
  hidden: PropTypes.any
}

Icon.defaultProps = {
  name: 'live_help',
  size: 2,
  color: 'text',
  spin: false,
  spinCCW: false
}

/** @component */
export default Icon
