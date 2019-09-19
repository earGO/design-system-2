import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'

/** Стандартный  error boundary из документации к Реакту.
 *
 * Принимает на вход сообщение, выдаваемое при ошибке, и пропсы
 * для настройки внешнего вида текста, по формату компонента `<Heading/>` */

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <Heading {...this.props.headingProps}>{this.props.message}</Heading>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  /** Обьект с пропсами для Heading */
  headingProps: PropTypes.object,
  /** Содержимое сообщения об ошибке */
  message: PropTypes.string
}

ErrorBoundary.defaultProps = {
  /** Обьект с пропсами для Heading */
  headingProps: {
    tag: 'h2'
  },
  /** Содержимое сообщения об ошибке */
  message: 'Что-то пошло не так'
}

export default ErrorBoundary
