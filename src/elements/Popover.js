import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Positional from '../primitives/Positional'
import PropTypes from 'prop-types'
import theme from '../theme'


const arrowTransform = ({ placement }) => {
  // #Todo.
  if (['right', 'top'].includes(placement)) {
    return css`
      transform: rotate(45deg);
    `
  }
  if (['left', 'bottom'].includes(placement)) {
    return css`
      transform: rotate(315deg);
    `
  }
}

const Body = styled.div.attrs(props => ({
  font: props.font,
  placement: props.placement,
}))`
  position: relative;
  font-family: ${props => props.font};
  font-size: ${props => props.theme.fontSizes[0] + 'px'};
  padding: ${props => `${props.theme.space[2]}px ${props.theme.space[3]}px`};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii[2] + 'px'};
  animation: all 0.5s;
  min-width: 50px;
  text-align: center;
  box-shadow: 0 1px 4px 0 rgba(58, 58, 58, 0.2), 0 8px 20px 0 rgba(58, 58, 58, 0.06);

  & p {
    color: #ffffff;
    margin: 0;
  }

  &:after {
    position: absolute;
    width: 8px;
    height: 8px;
    content: '';
    ${arrowTransform}
    background-color: ${props => props.theme.colors.white};
    margin: -4px 0 0 -4px;
    box-shadow: 0 1px 0px 0 rgba(58,58,58,0.2), 0 8px 20px 0 rgba(58,58,58,0.06);

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

const Wrapper = styled.span`
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
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

/** Применяется для меню в всплывающем окне */
class Popover extends Component {
  render() {
    const { children, events, font, placement, content, transitionName } = this.props

    const popupComponent = (
      <Body font={font} placement={placement}>
        {typeof content === 'string' 
          ?<p>{content}</p>
          : content }
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
        <Wrapper>{children}</Wrapper>
      </Positional>
    )
  }
}

Popover.propTypes = {
  /** Элемент, относительно которого будет позиционироваться тултип */
  children: PropTypes.element,
  /** Ивенты, вызывающие появляение тултипа. Возможные ивенты - click, contextMenu, focus, hover */
  events: PropTypes.arrayOf(PropTypes.string),
  /** Шрифт, используемый в тултипе */
  font: PropTypes.string,
  /** Позиционирование компонента относительно родительского компонента. Аргументы формируются исходя из параметра builtinPlacements */
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  /** Содержимое */
  content: PropTypes.string,
  /** Имя класса для анимаций. Например, rc-trigger-popup-zoom. Стандартная анимация убирается передачей null */
  transitionName: PropTypes.string,
}

Popover.defaultProps = {
  children: <span>Default Popover</span>,
  events: ['hover'],
  font: theme.font.main,
  placement: 'top',
  text: 'help',
  transitionName: 'rc-trigger-popup-fade',
  theme,
}

Popover.displayName = 'Popover'

/** @component */
export default Popover