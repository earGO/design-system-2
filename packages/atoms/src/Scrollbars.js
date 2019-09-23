import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactCustomScrollbars from 'react-custom-scrollbars'
import {flex, order, alignSelf} from 'styled-system'

const EnhancedScrollbars = styled(ReactCustomScrollbars)`
 ${flex}
 ${order}
 ${alignSelf};
`

/** Для корректной работы с ref создадим функциональный компонент-обёртку
 * над используемой библиотекой */

export function ScrollbarsWrapper(Component) {
  class ScrollbarsWithRef extends React.Component {
    render() {
      const {forwardedRef, ...rest} = this.props
      return <Component ref={forwardedRef} {...rest} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <ScrollbarsWithRef {...props} forwardedRef={ref} />
  })
}

/**
 * Добавляет вертикальный и горизинтальный скроллбар для блока.
 * Обеспечивает единое отоборажение скорллбара во всех баузерах и операционных системах.
 *
 * является обёрткой над https://malte-wessel.com/react-custom-scrollbars/
 *
 * Главное, зачем нужна обёртка - это передача в компонент внешнего ref, чтобы можно было
 * вызывать его внутренние методы и читать его внутренние статусы.
 */
export const Scrollbars = ScrollbarsWrapper(EnhancedScrollbars)

Scrollbars.propTypes = {
  tagName: PropTypes.string,
  thumbSize: PropTypes.number,
  thumbMinSize: PropTypes.number,
  hideTracksWhenNotNeeded: PropTypes.bool,
  autoHide: PropTypes.bool,
  autoHideTimeout: PropTypes.number,
  autoHideDuration: PropTypes.number,
  autoHeight: PropTypes.bool,
  autoHeightMin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoHeightMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  universal: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node
}

Scrollbars.defaultProps = {
  tagName: 'div',
  thumbMinSize: 30,
  hideTracksWhenNotNeeded: false,
  autoHide: false,
  autoHideTimeout: 1000,
  autoHideDuration: 200,
  autoHeight: false,
  autoHeightMin: 0,
  autoHeightMax: 200,
  universal: false
}

Scrollbars.displayName = 'Scrollbars'

/** @component */
export default Scrollbars
