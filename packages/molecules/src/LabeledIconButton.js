import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Icon, Text, Flex} from '@design-system/atoms'

const Container = styled(Flex)`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all;
  transition-timing-function: ${props => props.theme.timingFunctions.easeInOut};
  transition-duration: ${props => props.theme.duration.fast};
  &:hover {
    transform: scale(1.0005);
    opacity: 0.75;
  }
`

const TextBordered = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  height: ${props => props.size + 'px'};
  padding-left: ${props => props.size / 4 + 'px'};
`
/** Комбинация иконки и заголовка для кнопки */
export function LabeledIconButton({
  iconName,
  caption,
  color,
  size,
  fontSize,
  onClick,
  ...props
}) {
  return (
    <Container onClick={onClick} {...props}>
      <Icon name={iconName} color={color} size={size} {...props.theme} />
      <TextBordered size={size} {...props}>
        <Text color={color} fontSize={fontSize}>
          {caption}
        </Text>
      </TextBordered>
    </Container>
  )
}

LabeledIconButton.propTypes = {
  /** Имя иконки отсюда https://material.io/resources/icons/?style=baseline */
  iconName: PropTypes.string,
  /** Размер иконки согласно требованиям компонента Icon */
  size: PropTypes.number,
  /** Цвет иконки согласно требованиям компонента Icon */
  color: PropTypes.string,
  /** Текст заголовка */
  caption: PropTypes.string,
  /** Размер текста заголовка */
  fontSize: PropTypes.number
}

LabeledIconButton.defaultProps = {
  iconName: 'error',
  size: 24,
  color: 'black',
  caption: 'Default text',
  fontSize: 2
}

export default LabeledIconButton
