import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Text,
  Button,
  Icon,
  Popover,
  Relative,
  Box,
  Flex
} from '@design-system/atoms'

const Item = styled(Text)`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding: ${props => `${props.theme.space[2]}px ${props.theme.space[2]}px`};
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
  }
  &:last-child {
    border: 0;
  }
`

const IconPositioner = styled(Relative)`
  top: 4px;
`

function DropdownMenuButton({children, items, iconName, tableIcon, ...props}) {
  const [visible, setDropdownVisibility] = React.useState(false)
  const handleButtonClick = () => setDropdownVisibility(!visible)
  const closeDropdown = () => setDropdownVisibility(false)
  const popoverContent = () => (
    <Card
      bg="white"
      style={{
        whiteSpace: 'nowrap'
      }}
    >
      {items.map((item, index) => (
        <Item
          key={index}
          onClick={() => {
            closeDropdown()
            item.onClick && typeof item.onClick === 'function' && item.onClick()
          }}
        >
          {item.name}
        </Item>
      ))}
    </Card>
  )

  return (
    <Popover
      disableReposition={false}
      isOpen={visible}
      position="bottom"
      content={popoverContent}
      onClickOutside={closeDropdown}
      contentLocation={({nudgedLeft, nudgedTop}) => ({
        top: nudgedTop - 10,
        left: nudgedLeft - 90
      })}
    >
      <Button
        type={
          iconName === 'ellipsis-v' || iconName === 'ellipsis-h'
            ? 'flat'
            : 'primary'
        }
        size="small"
        onClick={handleButtonClick}
        {...props}
        tableIcon={tableIcon}
      >
        <Flex>
          <Box>{children}</Box>
          <Icon
            name={
              iconName
                ? iconName
                : visible
                ? 'keyboard_arrow_up'
                : 'keyboard_arrow_down'
            }
          />
        </Flex>
      </Button>
    </Popover>
  )
}

DropdownMenuButton.defaultProps = {
  items: []
}

export default DropdownMenuButton
