import React, { useEffect, useState, useRef } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Absolute from './Absolute'
import Relative from './Relative'
import Box from './Box'
import Flex from './Flex'
import Icon from './Icon'
import { themeGet } from 'styled-system'

const ModalBackdrop = styled(Relative)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  overflow: auto;
`

const ModalWrapper = styled(Absolute)`
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  display: flex;
  flex-direction: column;
`

// Крест 16x16, поэтому сама кнопка 16x3
const CloseButton = styled(Absolute)`
  top: 0px;
  right: 0px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: ${themeGet('colors.lightGrey', 'f5f5f5')};
  }
`

const ContentWrapper = styled(Box)``
const ModalFooter = styled(Flex)`
  justify-content: flex-end;
`

const blockScroll = () => {
  const [bodyStyle, _] = useState(document.body.style)
  useEffect(() => {
    // чтобы не двигался контент, добавим паддинг справа вместо скроллбара.
    document.body.style = 'padding-right: 17px; overflow: hidden;'
    return () => {
      document.body.style = bodyStyle
    }
  }, [])
}

const handleClickOutside = (elementRef, handler, closeOnBackdropClick) => {
  const handleClick = event => {
    if (elementRef && !elementRef.current.contains(event.target)) {
      handler()
    }
  }
  useEffect(() => {
    if (closeOnBackdropClick) {
      document.addEventListener('mousedown', handleClick)
      return () => {
        document.removeEventListener('mousedown', handleClick)
      }
    }
  }, [])
}

/** Используется для взаимодействия пользователя с системой без отрыва от текущего контекста. */
const Modal = ({ children, closeModal, title, footer, closeOnBackdropClick }) => {
  const wrapperRef = useRef(null)
  blockScroll()
  handleClickOutside(wrapperRef, closeModal, closeOnBackdropClick)
  return (
    <ModalBackdrop>
      <ModalWrapper ref={wrapperRef} px={4}>
        <CloseButton onClick={closeModal}>
          <Icon name="times" style={{ cursor: 'pointer' }} />
        </CloseButton>
        <Box className="header" pt={4} pb={3}>
          <Text fontSize={2}>{title}</Text>
        </Box>
        <ContentWrapper pt={3} pb={footer ? 3 : 4}>
          {children}
        </ContentWrapper>
        {footer && (
          <ModalFooter pt={3} pb={4}>
            {footer}
          </ModalFooter>
        )}
      </ModalWrapper>
    </ModalBackdrop>
  )
}

Modal.propTypes = {
  /** Содержимое модального окна */
  children: propTypes.element,
  /** Заголовок модального окна */
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  /** Функция, вызывающаяся при клике за модальным окном либо на кнопку закрытия */
  closeModal: propTypes.func,
  /** Футер модального окна */
  footer: propTypes.oneOfType([propTypes.string, propTypes.element]),
  /** Закрывать ли окно при клике на бэкдроп */
  closeOnBackdropClick: propTypes.bool,
}

Modal.defaultProps = {
  closeOnBackdropClick: true,
}

/** @component */
export default Modal
