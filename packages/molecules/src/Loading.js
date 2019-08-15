import React from 'react'
import PropTypes from 'prop-types'
import {Icon, Overlay, Flex, Text, Box} from '@design-system/components'

function Spinner(props) {
  return <Icon spin name="cached" {...props} />
}

function Loading({overlay, color, children, size}) {
  if (overlay) {
    return (
      <Overlay bg="white" style={{zIndex: 2}}>
        <Flex flexDirection={'row'} alignItems={'center'}>
          <Spinner color={color} size={size} />
          {children && (
            <Box>
              <Text color={color} bold ml={2} fontSize={size}>
                {children}
              </Text>
            </Box>
          )}
        </Flex>
      </Overlay>
    )
  }

  return (
    <Flex flexDirection={'row'} alignItems={'center'}>
      <Spinner color={color} size={size} />
      {children && (
        <Box>
          <Text color={color} bold ml={2} fontSize={size}>
            {children}
          </Text>
        </Box>
      )}
    </Flex>
  )
}

Loading.propTypes = {
  /** Перекрывает ли компонент остальное */
  overlay: PropTypes.bool,
  /** Цвет иконки */
  color: PropTypes.string,
  /** Размер иконки */
  size: PropTypes.oneOf([0, 1, 2, 3, 4])
}

Loading.defaultProps = {
  overlay: false,
  color: 'primary',
  size: 2
}

export default Loading
