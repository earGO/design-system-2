import React, {useState, useRef, createRef} from 'react'
import PropTypes from 'prop-types'
import {
  Icon,
  Flex,
  Text,
  Popover,
  Card,
  Button,
  Box
} from '@design-system/components'
import styled from 'styled-components'

/* Styling component with grow animation for clickable Icon of hint */
const ClickableIcon = styled.div`
cursor: pointer;
transition: all;
transition-duration: {$props=>props.theme.duration.fast};
transition-timing-function: {$props=>props.theme.timingFunction.easeInOut};
&:hover{
  transform: scale(1.0015);
  color:  {$props=>props.theme.colors.primary};
}
`

const ClickableParent = styled.div`
cursor: pointer;
transition: all;
transition-duration: {$props=>props.theme.duration.fast};
transition-timing-function: {$props=>props.theme.timingFunction.easeInOut};
&:hover{
  transform: scale(1.0015);
  color:  {$props=>props.theme.colors.primary};
}
`
/* Z-index adjustment for hint card */
const HintCard = styled(Card)`
  z-index: 3;
  border-width: 0;
`

const Hint = React.forwardRef((props, ref) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const {
    size,
    arrowColor,
    bgColor,
    shiftLeft,
    shiftTop,
    hintText,
    color,
    position
  } = props
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
        onClickOutside={() => setPopoverOpen(false)}
        position={position} // popover position from ['top','left','right','bottom']
        contentDestination={ref.current}
        /* Content of a hint */
        content={({position, targetRect, popoverRect}) => (
          <Popover.ArrowContainer
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor={arrowColor}
            arrowSize={10}
            arrowStyle={{opacity: 1.0, zIndex: 6}}
          >
            <HintCard p={3} bg={bgColor} boxShadowSize={'md'}>
              <Text color={color}>{hintText}</Text>
            </HintCard>
          </Popover.ArrowContainer>
        )}
        /* Hint card adjustment related to Hint icon */
        contentLocation={({nudgedLeft, nudgedTop}) => ({
          top: nudgedTop + shiftTop,
          left: nudgedLeft + shiftLeft
        })}
      >
        <ClickableIcon
          type={'flat'}
          onClick={() => {
            setPopoverOpen(!isPopoverOpen)
          }}
        >
          <Icon name={'help_outline'} size={size} color={color} />
        </ClickableIcon>
      </Popover>
      <ClickableParent
        type={'flat'}
        onClick={() => {
          console.log(ref)
          setPopoverOpen(!isPopoverOpen)
        }}
        ref={ref}
      >
        <Icon name={'help_outline'} size={size} color={color} />
      </ClickableParent>
    </Flex>
  )
})

const HintParent = React.forwardRef((props, ref) => {
  return (
    <div id="popoverFather" ref={ref}>
      {props.children}
    </div>
  )
})

const HintWrapper = ({...props}) => {
  let PopupParent = React.createRef()

  return (
    <Flex>
      <Hint ref={PopupParent} />
    </Flex>
  )
}

HintWrapper.propTypes = {
  arrowColor: PropTypes.string
}

HintWrapper.defaultProps = {
  arrowColor: 'white'
}

export default HintWrapper
