import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from './Text'
import Relative from './Relative'

const Counter = styled.div`
  display: flex;
  width: ${props => props.size * 3 + 'px'};
  height: ${props => props.size * 2 + 'px'};
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: ${props => props.size + 'px'};
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1px;
`
/** Иконка счётчика событий/уведомлений
 * Обёрнут в компонент `<Relative/>` для точного позиционирования "по месту" */
export function NotificationsCounter({color, count, size, ...props}) {
  return (
    <Relative {...props}>
      <Counter size={size} color={color}>
        <Text color={'white'} fontSize={'12px'}>
          {count}
        </Text>
      </Counter>
    </Relative>
  )
}

NotificationsCounter.propTypes = {
  /** Количество уведомлений внутри счётчика */
  count: PropTypes.number,
  /** Цвет фона счётчика */
  color: PropTypes.string,
  /** Размер счётчика */
  size: PropTypes.number
}

NotificationsCounter.defaultProps = {
  count: 30,
  size: 8,
  color: 'error'
}

export default NotificationsCounter
