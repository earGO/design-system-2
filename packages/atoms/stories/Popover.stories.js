import React from 'react'
import {storiesOf} from '@storybook/react'
import Card from '../src/Card'
import Text from '../src/Text'
import Flex from '../src/Flex'
import Button from '../src/Button'
import Popover from '../src/Popover'
import theme from '@design-system/theme'
import styled from 'styled-components'
import Box from '../src/Box'

const PopoverMenuItem = styled(Box)`
  width: 120px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #34c3ff;
  }
`

const simpleContent = () => (
  <Card p={3} bg="#ebebeb">
    <Text color="info">
      Hi! I'm popover content. <br />I have no decorations and don't care
    </Text>
  </Card>
)

const arrowedContent = ({position, targetRect, popoverRect}) => (
  <Popover.ArrowContainer
    position={position}
    targetRect={targetRect}
    popoverRect={popoverRect}
    arrowColor={'blue'}
    arrowSize={10}
    arrowStyle={{opacity: 0.7}}
  >
    <Card p={3} bg="#ebebeb">
      <Text color="info">
        Hi! I'm popover content. <br />I have an arrow and quite awesome.
      </Text>
    </Card>
  </Popover.ArrowContainer>
)

const arrowedMenu = ({position, targetRect, popoverRect}) => (
  <Popover.ArrowContainer
    position={position}
    targetRect={targetRect}
    popoverRect={popoverRect}
    arrowColor={'blue'}
    arrowSize={10}
    arrowStyle={{opacity: 0.7}}
  >
    <Card p={3} bg="#ebebeb">
      <PopoverMenuItem>Item 1</PopoverMenuItem>
      <PopoverMenuItem>Item 2</PopoverMenuItem>
      <PopoverMenuItem>Item 3</PopoverMenuItem>
    </Card>
  </Popover.ArrowContainer>
)

class SingleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPopoverOpen: false,
      popoverPosition: 'top'
    }
  }

  render() {
    const {isPopoverOpen} = this.state
    return (
      <Flex
        width={400}
        height={420}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Popover
          isOpen={isPopoverOpen}
          position={this.state.popoverPosition} // preferred position
          content={this.props.content}
          contentLocation={({nudgedLeft, nudgedTop}) => ({
            top: nudgedTop + 0,
            left: nudgedLeft + 0
          })}
        >
          <Text
            align={'center'}
            onClick={() => this.setState({isPopoverOpen: !isPopoverOpen})}
          >
            Click me!
          </Text>
        </Popover>
        <Text mt={120}>Put container to:</Text>
        <Flex>
          <Button
            mr={2}
            onClick={() => this.setState({popoverPosition: 'top'})}
          >
            Top
          </Button>
          <Button
            mr={2}
            onClick={() => this.setState({popoverPosition: 'left'})}
          >
            Left
          </Button>
          <Button
            mr={2}
            onClick={() => this.setState({popoverPosition: 'bottom'})}
          >
            Bottom
          </Button>
          <Button
            mr={2}
            onClick={() => this.setState({popoverPosition: 'right'})}
          >
            Right
          </Button>
        </Flex>
      </Flex>
    )
  }
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
  .add(
    'Default',
    () => <SingleComponent theme={theme} content={simpleContent} />,
    {
      info: {
        text: `
          Всплывающий блок с контентом возле элемента. Используется для всплывающих подсказок, выпадающих меню и т.д.. 
        `
      }
    }
  )
  .add(
    'Arrowed',
    () => <SingleComponent theme={theme} content={arrowedContent} />,
    {
      info: {
        text: `
          Блок может быть со стрелкой. 
        `
      }
    }
  )
  .add(
    'Interactive',
    () => <SingleComponent theme={theme} content={arrowedMenu} />,
    {
      info: {
        text: `
          Блок может содержать меню. 
        `
      }
    }
  )
  .add(
    'Various position',
    () => <SingleComponent theme={theme} content={arrowedMenu} />,
    {
      info: {
        text: `
          Блок может содержать меню. 
        `
      }
    }
  )
