import React from 'react'
import PropTypes from 'prop-types'
import ReactTinyPopover, {ArrowContainer} from 'react-tiny-popover'
import Box from './Box'

const DefaultComponent = () => {
  return (
    <Box bg={'warning'} color={'white'}>
      Ima popover!
    </Box>
  )
}

/**
 * Всплывающий блок с контентом возле элемента.
 * Используется для всплывающих подсказок, выпадающих меню и т.д.
 * Обёртка над https://github.com/alexkatz/react-tiny-popover
 *
 * Для применения нужно составить компонент, являющийся содержимым Popover'а, и
 * обернуть компонентом элемент интерфейса, относительно которого должен появиться
 * Popover
 */
export function Popover(props) {
  return <ReactTinyPopover {...props} />
}

Popover.propTypes = {
  /** Показать или скрыть поповер */
  isOpen: PropTypes.bool,
  /** Позиция появления Popover'a относительно обернутого им объекта */
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Элемент, отображаемый в качестве Popover'a */
  content: PropTypes.element,
  /** Событие, происходящее по клику вне Popover'a */
  onClickOutside: PropTypes.func,
  /** Тонкая настройка местоположения Popover'a */
  contentLocation: PropTypes.func
}

Popover.defaultProps = {
  isOpen: false,
  position: 'top',
  content: <DefaultComponent />,
  onClickOutside: () => {}
}

Popover.displayName = 'Popover'

Popover.ArrowContainer = ArrowContainer

/** @component */
export default Popover
