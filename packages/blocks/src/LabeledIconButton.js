import React from 'react'
import theme from '@design-system/theme'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Icon, Text, Flex, Box, Relative} from '@design-system/components'

const Container = styled(Flex)`
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all;
  transition-timing-function: ${theme.timingFunctions.easeInOut};
  transition-duration: ${theme.duration.fast};
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

const IconBordered = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
`

const LabeledIconButton = ({
  iconName,
  caption,
  color,
  size,
  fontSize,
  onClick,
  ...props
}) => {
  return (
    <Container onClick={onClick}>
      <Icon name={iconName} color={color} size={size} />
      <TextBordered size={size} {...props}>
        <Text color={color} fontSize={fontSize}>
          {caption}
        </Text>
      </TextBordered>
    </Container>
  )
}

LabeledIconButton.propTypes = {
  iconName: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  caption: PropTypes.string,
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
