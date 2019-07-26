import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Flex,
  Text,
  Card,
  Box,
  Popover,
  FlexContainerBottomDivider
} from '@design-system/components'
import styled from 'styled-components'
import theme from '@design-system/theme'

const PopoverMenuItem = styled(Box)`
  width: 208px;
  height: 32px;

  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.lightGrey};
  }
`

function DropdownMenu({
  content,
  position,
  children,
  shiftLeft,
  shiftTop,
  ...props
}) {
  const [open, setOpen] = useState(false)
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
          arrowSize={10}
          arrowStyle={{opacity: 1.0, zIndex: 6}}
        >
          <Card p={3} bg={'white'} boxShadowSize={'md'}>
            {content.map((item, key) => {
              return (
                <FlexContainerBottomDivider key={key}>
                  <PopoverMenuItem>item</PopoverMenuItem>
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
      <Box onClick={() => setOpen(true)}>{children}</Box>
    </Popover>
  )
}

DropdownMenu.propTypes = {
  position: PropTypes.string,
  content: PropTypes.string,
  shiftLeft: PropTypes.number,
  shiftTop: PropTypes.number
}

DropdownMenu.defaultProps = {
  position: 'bottom',
  shiftLeft: 0,
  shiftTop: 0
}

export default DropdownMenu
