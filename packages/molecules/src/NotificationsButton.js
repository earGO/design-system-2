import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Flex,
  Text,
  NotificationsCounter,
  Box
} from '@design-system/atoms'

const Hoverer = styled(Flex)`
  width: 120px;
  height: 32px;
  flex-direction: row;
  transition: scale;
  transition-timing-function: ${props => props.theme.timingFunctions.easeInOut};
  transition-duration: ${props => props.theme.duration.fast};
  :hover {
    transform: scale(1.025);
  }
`

function NotificationsButton({counterSize, count, caption, color, ...props}) {
  if (count > 0) {
    return (
      <Hoverer alignItems={'center'} justifyContent={'center'}>
        <NotificationsCounter size={counterSize} count={count} />
        <Button type={'flat'}>
          <Text color={color}>{caption}</Text>
        </Button>
      </Hoverer>
    )
  } else
    return (
      <Hoverer alignItems={'center'} justifyContent={'flex-end'}>
        <Text color={color}>{caption}</Text>
      </Hoverer>
    )
}

NotificationsButton.propTypes = {
  /** Размер счётчика уведомлений*/
  counterSize: PropTypes.number,
  /** Количество уведомлений */
  count: PropTypes.number,
  /** Текст кнопки */
  caption: PropTypes.string,
  /** Цвет текста кнопки */
  color: PropTypes.string
}

NotificationsButton.defaultProps = {
  counterSize: 8,
  count: 0,
  caption: 'Уведомления',
  color: 'primary'
}

export default NotificationsButton
