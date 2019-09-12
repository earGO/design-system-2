import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Card,
  Box,
  Popover,
  FlexContainerBottomDivider,
  Icon,
  Relative
} from '@design-system/atoms'
import styled from 'styled-components'

/** В компонент нужно обернуть кнопку/иконку, при клике на которую должно появиться меню  */

const PopoverMenuItem = styled(Flex)`
  padding: 0;
  flex-direction: column;
  justify-content: center;
  z-index: 10000000000;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
  }
  font-size: 12px;
  font-family: ${props => props.theme.font.main};
  background-color: white;
`

function PopoverItemSmart({item, handleCloseOnItemClick, ...props}) {
  const handleClick = () => {
    handleCloseOnItemClick()
    item.HandleClick &&
      typeof item.HandleClick === 'function' &&
      item.HandleClick()
  }
  if (item.nested === undefined) {
    return (
      <PopoverMenuItem onClick={() => handleClick()} {...props}>
        {item.name}
      </PopoverMenuItem>
    )
  } else if (item.nested.length > 0) {
    const nestedProps = item.nestedProps
    const iconPositionProps = item.iconPositionProps
    return (
      <PopoverMenuItem onClick={() => handleClick()} {...props}>
        <DropdownMenu content={item.nested} {...nestedProps}>
          <Flex justifyContent={'space-between'}>
            {item.name}
            <Relative {...iconPositionProps}>
              <Icon name={'keyboard_arrow_right'} size={1} />
            </Relative>
          </Flex>
        </DropdownMenu>
      </PopoverMenuItem>
    )
  }
}

function DropdownMenu({
  content,
  position,
  children,
  shiftLeft,
  shiftTop,
  closeOnItemClick,
  ...props
}) {
  const [open, setOpen] = useState(false)

  const handleCloseOnItemClick = () => {
    if (closeOnItemClick) {
      setOpen(false)
    }
  }

  return (
    <Popover
      isOpen={open}
      onClickOutside={() => setOpen(false)}
      position={position} // preferred position
      content={({position, targetRect, popoverRect}) => (
        <Popover.ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor={'white'}
          arrowSize={0}
          arrowStyle={{opacity: 1.0, zIndex: 100}}
        >
          <Card bg={'white'}>
            {content.map((item, key) => {
              return (
                <FlexContainerBottomDivider key={key}>
                  <PopoverItemSmart
                    item={item}
                    handleCloseOnItemClick={handleCloseOnItemClick}
                    {...props}
                  />
                </FlexContainerBottomDivider>
              )
            })}
          </Card>
        </Popover.ArrowContainer>
      )}
      contentLocation={({nudgedLeft, nudgedTop}) => ({
        top: nudgedTop + shiftTop,
        left: nudgedLeft + shiftLeft
      })}
      {...props}
    >
      <Box onClick={() => setOpen(!open)}>{children}</Box>
    </Popover>
  )
}

DropdownMenu.propTypes = {
  /** ['top','left','bottom','right'], определяет где относительно иконки появляется менюшка */
  position: PropTypes.string,
  /** Массив с опциями, из которых состоит появляющееся меню. Каждая опция - объект с полями  "name" для выводимого названия пункта, и
   * HandleClick - содержит функцию со всеми параметрами, которую вызывает пункт меню по клику на него*/
  content: PropTypes.array,
  shiftLeft: PropTypes.number,
  shiftTop: PropTypes.number,
  closeOnItemClick: PropTypes.bool
}

DropdownMenu.defaultProps = {
  position: 'bottom',
  shiftLeft: 0,
  shiftTop: 0,
  content: [
    {
      name: 'Добавьте пункты',
      HandleClick: () => {}
    }
  ],
  width: 208,
  height: 32,
  pt: 2,
  closeOnItemClick: true
}

export default DropdownMenu
