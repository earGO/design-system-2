import React from 'react'
import PropTypes from 'prop-types'
import {Icon, Overlay, Flex} from '@design-system/atoms'

export function Loading({overlay, color, children, size}) {
  const clickOverlay = () => {
    alert('content is loading!')
  }

  if (overlay) {
    return (
      <Flex
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {overlay && (
          <Overlay onClick={clickOverlay}>
            <Icon spin color="white" name="autorenew" />
          </Overlay>
        )}
        {children}
      </Flex>
    )
  }

  return (
    <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
      {children}
    </Flex>
  )
}

Loading.propTypes = {
  /** Загружаются ли данные */
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

Loading.displayName = 'Loading'

/** @component */
export default Loading
