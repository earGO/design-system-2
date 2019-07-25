import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Flex, Text, Card, Box, Popover} from '@design-system/components'
import styled from 'styled-components'

const PopoverMenuItem = styled(Box)`
  width: 120px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #34c3ff;
  }
`

function DropdownMenu({content, position, children, ...props}) {
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
              return <PopoverMenuItem key={key}>item</PopoverMenuItem>
            })}
          </Card>
        </Popover.ArrowContainer>
      )}
      contentLocation={({nudgedLeft, nudgedTop}) => ({
        top: nudgedTop + 0,
        left: nudgedLeft + 0
      })}
    >
      <Flex onClick={() => setOpen(true)}>{children}</Flex>
    </Popover>
  )
}

DropdownMenu.propTypes = {
  position: PropTypes.string
}

DropdownMenu.defaultProps = {
  position: 'bottom'
}

export default DropdownMenu
