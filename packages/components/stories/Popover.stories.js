import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import Card from '../src/Card'
import Text from '../src/Text'
import Button from '../src/Button'
import Popover from '../src/Popover'
import theme from '@design-system/theme'

function SingleComponent({theme, ...props}) {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [PopoverPosition, setPopoverPopover] = useState('top')

  const togglePopover = () => setPopoverOpen(!isPopoverOpen)
  const closePopover = () => setPopoverOpen(false)
  const setPosition = position => setPopoverPopover(position)
  const popoverContent = ({position, targetRect, popoverRect}) => (
    <Popover.ArrowContainer
      position={PopoverPosition}
      targetRect={targetRect}
      popoverRect={popoverRect}
      arrowColor={'#ebebeb'}
      arrowSize={7}
    >
      <Card p={3} bg="#ebebeb" theme={theme}>
        <Text color="info" theme={theme}>
          Hi! I'm popover content. <br />
          Here's my position: {position}.
        </Text>
      </Card>
    </Popover.ArrowContainer>
  )

  return (
    <Card p={3} theme={theme}>
      <Text mb={2} bold theme={theme}>
        Popover position
      </Text>

      <Popover
        isOpen={isPopoverOpen}
        position={PopoverPosition}
        content={popoverContent}
        onClickOutside={closePopover}
        theme={theme}
        {...props}
      >
        <Button type="dashed" onClick={togglePopover} theme={theme}>
          Popover
        </Button>
      </Popover>
    </Card>
  )
}

storiesOf(`Popover`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add('Default', () => <SingleComponent theme={theme} />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })
