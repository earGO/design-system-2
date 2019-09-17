import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Trigger from 'rc-trigger'
import 'rc-trigger/assets/index.css'
import styled from 'styled-components'
import {Card, Text} from '@design-system/atoms'
import ActionCell from './ActionCell'

/** Preset for fast hint popover alignment when passed in builtinPlacement prop*/
const builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
}

/** saves ref to component that'll be popover parent */
function saveRef(name, component) {
  this[name] = component
}

/** Extracts popup align correctives from align-prop */
function getPopupAlign(align) {
  return {
    offset: [align.offsetX, align.offsetY],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
}
/** Обертка для карточки-подсказки*/

const HintCard = styled(Card)`
  padding: 8px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
  max-width: 136px;
`

const PopupComponent = caption => {
  return (
    <HintCard key={'hintCard'}>
      <Text key={'hintCaption'}>{caption.caption}</Text>
    </HintCard>
  )
}

class HintBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mask: false,
      maskClosable: false,
      trigger: {
        hover: 1
      },
      offsetX: undefined,
      offsetY: undefined,
      stretch: ''
    }

    this.saveContainerRef = saveRef.bind(this, 'containerInstance')
  }

  render() {
    const {
      align,
      children,
      destroyPopupOnHide,
      events,
      placement,
      animated,
      caption,
      popupStyle
    } = this.props

    return (
      <div>
        <div ref={this.saveContainerRef} />
        <Trigger
          popupPlacement={placement}
          popupAlign={getPopupAlign(align)}
          action={events}
          destroyPopupOnHide={destroyPopupOnHide}
          builtinPlacements={builtinPlacements}
          getPopupContainer={() => this.containerInstance}
          popup={<PopupComponent caption={caption} />}
          popupTransitionName={animated ? 'rc-trigger-popup-zoom' : ''}
          popupStyle={popupStyle}
        >
          <div href="#">{children}</div>
        </Trigger>
      </div>
    )
  }
}

HintBlock.propTypes = {
  /** Отступы от родительского контейнера в пикселях */
  align: PropTypes.shape({
    offsetX: PropTypes.number,
    offsetY: PropTypes.number
  }),
  /** Настройки позиционирования компонента относительно родительского контейнера */
  builtinPlacements: PropTypes.object,
  /** Элемент, относительно которого будет позиционироваться наш компонент */
  children: PropTypes.element,
  /** Уничтожать ли попап когда он скрыт */
  destroyPopupOnHide: PropTypes.bool,
  /** Ивенты, вызывающие появляение компонента. Возможные ивенты - click, contextMenu(реагирует на right click), focus, hover */
  events: PropTypes.arrayOf(PropTypes.string),
  /** Задержка перед появлением компонента (в секундах) */
  mouseEnterDelay: PropTypes.number,
  /** Задержка перед исчезанием компонента (в секундах) */
  mouseLeaveDelay: PropTypes.number,
  /** Позиционирование компонента относительно родительского компонента. Аргументы формируются исходя из параметра builtinPlacements */
  placement: PropTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight'
  ]),
  /** Компонент для отображения */
  popupComponent: PropTypes.element,
  /** Дает возможность попап элементу растягиваться относительно родительского контейнера. Варианты - 'width', 'minWidth', 'height', 'minHeight' и их вариации, напр. 'height minWidth' */
  stretch: PropTypes.string,
  /** Триггер анимации при возникновении поповера, по умолчанию false */
  animated: PropTypes.bool,
  /** Содержимое подсказки */
  caption: PropTypes.string,
  /** Дополнительные стили для подсказки в виде  */
  popupStyle: PropTypes.object
}

HintBlock.defaultProps = {
  align: {
    offsetX: 0,
    offsetY: 0
  },
  builtinPlacements: {
    left: {
      points: ['cr', 'cl']
    },
    right: {
      points: ['cl', 'cr']
    },
    top: {
      points: ['bc', 'tc']
    },
    bottom: {
      points: ['tc', 'bc']
    },
    topLeft: {
      points: ['bl', 'tl']
    },
    topRight: {
      points: ['br', 'tr']
    },
    bottomRight: {
      points: ['tr', 'br']
    },
    bottomLeft: {
      points: ['tl', 'bl']
    }
  },
  destroyPopupOnHide: false,
  events: ['click'],
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  placement: 'bottom',
  stretch: null,
  animated: false,
  caption: 'Ima popover'
}

HintBlock.displayName = `HintBlock`

/** @component */
export default HintBlock
