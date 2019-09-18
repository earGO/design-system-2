import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  space,
  color,
  width,
  height,
  minWidth,
  maxWidth,
  fontSize,
  flex,
  order,
  alignSelf
} from 'styled-system'

const BoxWrapper = styled.div`
  {
    boxSizing: border-box;
    position: relative;
  }
  ${space}
  ${color}
    ${width}
    ${height}
    ${fontSize}
    ${flex}
    ${order}
    ${alignSelf}
    ${minWidth}
    ${maxWidth}
    ${props => props.css};
  `
/** Базовый блок разметки. По сути обёртка для `<div/>`.
 *
 *  Принимает множество props для настройки отступов, фона, размера шрифтов и т.п.
 *
 *  Любой фрагмент должен быть обёрнут в Box, если он не обёрнут во Flex
 *  или другие "расширители" базового Box.
 *
 *  Для адаптивной верстки параметры в качестве значения могут принимать массивы, в котором каждый индекс соответсвует брейкпойнту из настроек темы.

 * Изменяйте ширину экрана для проверки работы брейкпоинтов. */

  export function Box({...props}){
  return(
      <BoxWrapper{...props}/>
  )
}

Box.propTypes = {
  /** Обьект с css-правилами */
  css: PropTypes.object,
  /** margin */
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** margin-top*/
  mt: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** margin-right*/
  mr: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** margin-bottom*/
  mb: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** margin-left*/
  ml: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** margin-left and margin-right */
  mx: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** margin-top and margin-bottom */
  my: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding */
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  /** padding-top*/
  pt: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding-right*/
  pr: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding-bottom*/
  pb: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding-left*/
  pl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding-left and padding-right */
  px: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** padding-top and padding-bottom */
  py: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Фоновый цвет блока */
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Цвет текста */
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** Ширина блока */
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Высота блока */
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Размер шрифта */
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Минимальная ширина */
  minWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  /** Максимальная ширина */
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
}

export default Box
