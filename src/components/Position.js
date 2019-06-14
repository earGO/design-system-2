import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Manager, Reference, Popper } from 'react-popper'
import Card from './Card'

const Wrapper = styled(Card)`
  position: relative;

  &::after {
    position: absolute;
    content: '';
    transform-origin: 0 0;
    border: 6px solid transparent;
    border-color: transparent transparent red red;
    box-shadow: -1px 1px 0px 0 rgba(0, 0, 0, 0.06);
    ${props =>
      props.placement === 'top' &&
      css`
        left: 50%;
        margin-left: -8px;
        transform: rotate(-45deg);
      `}

      ${props =>
        props.placement === 'topLeft' &&
        css`
          left: 25%;
          top: 100%;
          margin-left: -0.3em;
          transform: rotate(-45deg);
        `}
      ${props =>
        props.placement === 'topRight' &&
        css`
          left: 75%;
          top: 100%;
          transform: rotate(-45deg);
          margin-left: -0.8em;
        `}
      ${props =>
        props.placement === 'bottom' &&
        css`
          left: 50%;
          top: 0;
          bottom: inherit;
          margin-left: 8px;
          transform: rotate(135deg);
          box-shadow: -1px 1px 0px 0 rgba(0, 0, 0, 0.03);
        `}
      ${props =>
        props.placement === 'bottomLeft' &&
        css`
          left: 25%;
          top: 0;
          bottom: inherit;
          margin-left: 0.8em;
          transform: rotate(135deg);
          box-shadow: -1px 1px 0px 0 rgba(0, 0, 0, 0.03);
        `}
      ${props =>
        props.placement === 'bottomRight' &&
        css`
          left: 75%;
          top: 0;
          bottom: inherit;
          margin-left: 0.3em;
          transform: rotate(135deg);
          box-shadow: -1px 1px 0px 0 rgba(0, 0, 0, 0.03);
        `}
      ${props =>
        props.placement === 'left' &&
        css`
          right: 0;
          top: 50%;
          margin-top: -0.5em;
          transform: rotate(-135deg);
        `}
      ${props =>
        props.placement === 'right' &&
        css`
          left: 0%;
          top: 50%;
          transform: rotate(45deg);
          margin-top: -8px;
        `}
  }
`

function Position(props) {
  const [isOpen, setOpen] = useState(false)
  const handleReferenceClick = () => setOpen(true)
  const handleOutsideClick = () => setOpen(false)

  const renderReference = ({ ref }) =>
    React.cloneElement(React.Children.only(props.children), {
      ref,
      onClick: handleReferenceClick,
    })

  const renderPopper = ({ ref, style, placement, arrowProps }) => (
    <div ref={ref} style={style} data-placement={placement}>
      <Wrapper bg="white" placement={placement}>
        {props.content}
      </Wrapper>
    </div>
  )

  return (
    <Manager>
      <Reference>{renderReference}</Reference>
      {isOpen && <Popper placement={props.placement}>{renderPopper}</Popper>}
    </Manager>
  )
}

Position.propTypes = {}

Position.defaultProps = {
  placement: 'top',
  arrow: true,
  children: <span>triggrer</span>,
  content: <div>content</div>,
}

Position.displayName = 'Position'

export default Position
