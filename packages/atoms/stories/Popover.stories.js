import React, {useState} from 'react'

import {Popover} from '../src/Popover'
import {Box, Card, Text, Radio, Button, Input, Flex} from '../src/index'

export default {
  title: 'Design System|Popover',
  parameters: {
    component: Popover
  }
}

export const basic = () => {
  /** Управление открытием и закрытием Popover'a */
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  const togglePopover = () => setPopoverOpen(!isPopoverOpen)
  const closePopover = () => setPopoverOpen(false)

  /** Управление положением Popover'a */
  const [position, setPopoverPosition] = useState('top')

  const setPosition = position => setPopoverPosition(position)

  /** Управление смещением по оси Y*/
  const [shiftTop, setShiftTop] = useState(0)

  const handleShiftTopChange = value => {
    setShiftTop(parseInt(value))
  }

  /** Управление смещением по оси Х */
  const [shiftLeft, setShiftLeft] = useState(0)

  const handleShiftLeftChange = value => {
    setShiftLeft(parseInt(value))
  }

  /** Вёрстка компонента, отображаемого в качестве Popover'a */
  const popoverContent = ({position, targetRect, popoverRect}) => (
    <Popover.ArrowContainer
      position={position}
      targetRect={targetRect}
      popoverRect={popoverRect}
      arrowColor={'#ebebeb'} /** цвет стрелки прямоугольника Popover'a*/
      arrowSize={7} /** размер стрелки Popover'a */
    >
      <Card boxShadowSize="sm" p={2} bg="#ebebeb">
        <Text color="info">
          Hi! I'm popover content. <br />
          Here's my position: {position}.
        </Text>
      </Card>
    </Popover.ArrowContainer>
  )

  return (
    <Flex
      height={200}
      justifyContent={'center'}
      alignItems={'center'}
      contentwidth={550}
      m={3}
    >
      <Card p={3}>
        <Text mb={2} bold>
          Popover position
        </Text>
        <Box mb={4}>
          <Radio.Group defaultValue="top" onChange={setPosition}>
            <Radio label="Top" value="top" />
            <Radio label="Right" value="right" ml={2} />
            <Radio label="Bottom" value="bottom" ml={2} />
            <Radio label="Left" value="left" ml={2} />
          </Radio.Group>
        </Box>
        <Flex
          mb={4}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <Box width={150} m={2}>
            <Text>Shift popover top</Text>
            <Input
              value={shiftTop}
              type={'number'}
              onChange={handleShiftTopChange}
            />
          </Box>
          <Box width={150} m={2}>
            <Text>Shift popover right</Text>
            <Input
              value={shiftLeft}
              type={'number'}
              onChange={handleShiftLeftChange}
            />
          </Box>
        </Flex>
        <Popover
          isOpen={isPopoverOpen}
          position={position}
          content={popoverContent}
          onClickOutside={closePopover}
          /* Параметр contentLocation позволяет управлять положением Popover'a */
          contentLocation={({nudgedLeft, nudgedTop}) => ({
            top: nudgedTop + shiftTop,
            left: nudgedLeft + shiftLeft
          })}
        >
          <Button type="dashed" onClick={togglePopover}>
            Popover
          </Button>
        </Popover>
      </Card>
    </Flex>
  )
}
basic.story = {
  parameters: {
    info: {
      text: `
         Пример применения. 
         
          Можно управлять позиционированием Popover'а, передавая в компонент дополнительные параметры. 
          Обычно же Popover появляется прямо на границе вызывающего его компонента. 
          Для целей иллюстрации влияния параметра Popover был сильно отнесён вправо. 
          
          nudgedTop - исходное положение Popover'a по координате Top
          
          nudgedLeft - исходное положение Popover'a по координате Left

          Желательно делать параметры смещения Popover'a зависимыми от его положения на странице и размера пунктов его меню.
        `
    }
  }
}
