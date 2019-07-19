
https://github.com/alexkatz/react-tiny-popover

```js
initialState = {
  isPopoverOpen: false,
  position: 'top',
}

const togglePopover = () => setState({ isPopoverOpen: !state.isPopoverOpen })
const closePopover = () => setState({ isPopoverOpen: false })
const setPosition = position => setState({ position })

const popoverContent = ({ position, targetRect, popoverRect }) => (
    <Popover.ArrowContainer
        position={position}
        targetRect={targetRect}
        popoverRect={popoverRect}
        arrowColor={'#ebebeb'}
        arrowSize={7}
    >
      <Card p={3} bg="#ebebeb">
        <Text color="info">
            Hi! I'm popover content. <br />
            Here's my position: {position}.
        </Text>
      </Card>
    </Popover.ArrowContainer>
);

<Card p={3}>
  <Text mb={2} bold>Popover position</Text>
  <Box mb={4}>
    <Radio.Group defaultValue="top" onChange={setPosition}>
      <Radio label="Top" value="top" />
      <Radio label="Right" value="right" ml={2} />
      <Radio label="Bottom" value="bottom" ml={2} />
      <Radio label="Left" value="left" ml={2} />
    </Radio.Group>
  </Box>
  <Popover 
    isOpen={state.isPopoverOpen} 
    position={state.position}
    content={popoverContent}
    onClickOutside={closePopover}
  >
    <Button type="dashed" onClick={togglePopover}>
      Popover
    </Button>
  </Popover>
</Card>
```

