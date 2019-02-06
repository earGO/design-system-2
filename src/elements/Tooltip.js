import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Positional from '../primitives/Positional'
import PropTypes from 'prop-types'
import theme from '../theme'

const Body = styled.div.attrs(props => ({
  font: props.font,
  placement: props.placement,
}))`
  position: relative;
  font-family: ${props => props.font};
  background-color: #373a43;
  border-radius: 15px;
  opacity: 0.85;
  padding: 1px 10px;
  animation: all 0.5s;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  min-width: 75px;
  text-align: center;

  & p {
    color: #ffffff;
  }

  &:after {
    position: absolute;
    width: 10px;
    height: 10px;
    content: "";
    transform: rotate(45deg);
    background-color: #373a43;
    margin: -5px 0 0 -5px;

    ${props =>
      props.placement === 'top' &&
      css`
        left: 50%;
        top: 100%;
      `}

      ${props =>
        props.placement === 'topLeft' &&
        css`
          left: 25%;
          top: 100%;
        `}
      ${props =>
        props.placement === 'topRight' &&
        css`
          left: 75%;
          top: 100%;
        `}
      ${props =>
        props.placement === 'bottom' &&
        css`
          left: 50%;
          top: 0%;
        `}
      ${props =>
        props.placement === 'bottomLeft' &&
        css`
          left: 25%;
          top: 0%;
        `}
      ${props =>
        props.placement === 'bottomRight' &&
        css`
          left: 75%;
          top: 0%;
        `}
      ${props =>
        props.placement === 'left' &&
        css`
          left: 100%;
          top: 50%;
        `}
      ${props =>
        props.placement === 'right' &&
        css`
          left: 0%;
          top: 50%;
        `}
  }
`

const getAlign = placement => {
  switch (placement) {
    case 'left':
      return {
        offsetX: -8,
        offsetY: 0,
      }
    case 'right':
      return {
        offsetX: 8,
        offsetY: 0,
      }
    case 'bottom':
    case 'bottomRight':
    case 'bottomLeft':
      return {
        offsetX: 0,
        offsetY: 8,
      }
    case 'topRight':
    case 'topLeft':
    case 'top':
      return {
        offsetX: 0,
        offsetY: -8,
      }
    default:
      return {
        offsetX: 0,
        offsetY: 0,
      }
  }
}

/** Применяется для вывода уточняющей информации во всплывающем окне */
class Tooltip extends Component {
  render() {
    const { children, events, font, placement, text, transitionName } = this.props

    const popupComponent = (
      <Body font={font} placement={placement}>
        <p>{text}</p>
      </Body>
    )

    return (
      <Positional
        align={getAlign(placement)}
        events={events}
        placement={placement}
        popupComponent={popupComponent}
        transitionName={transitionName}
      >
        {children}
      </Positional>
    )
  }
}

Tooltip.propTypes = {
  /** Элемент, относительно которого будет позиционироваться тултип */
  children: PropTypes.element,
  /** Ивенты, вызывающие появляение тултипа. Возможные ивенты - click, contextMenu, focus, hover */
  events: PropTypes.arrayOf(PropTypes.string),
  /** Шрифт, используемый в тултипе */
  font: PropTypes.string,
  /** Позиционирование компонента относительно родительского компонента. Аргументы формируются исходя из параметра builtinPlacements */
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  /** Текст в тултипе */
  text: PropTypes.string,
  /** Имя класса для анимаций. Например, rc-trigger-popup-zoom. Стандартная анимация убирается передачей null */
  transitionName: PropTypes.string,
}

Tooltip.defaultProps = {
  children: <div>Default Tooltip Div</div>,
  events: ['hover'],
  font: theme.font.main,
  placement: 'top',
  text: 'Полезный тултип',
  transitionName: 'rc-trigger-popup-fade',
}

Tooltip.displayName = 'Tooltip'

/** @component */
export default Tooltip
