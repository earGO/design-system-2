import React from 'react'
import renderer from 'react-test-renderer'
import Hint from '../src/Hint'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('Hint', () => {
  test('mounts', () => {
    const wrapper = mount(<Hint theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('has default props', () => {
    const wrapper = mount(<Hint theme={theme} />)
    expect(wrapper.props().arrowColor).toBe('white')
    expect(wrapper.props().bgColor).toBe('white')
    expect(wrapper.props().hintText).toBe('Enter hint text')
    expect(wrapper.props().position).toBe('top')
    expect(wrapper.props().color).toBe('black')
    expect(wrapper.props().size).toBe(18)
    expect(wrapper.props().shiftTop).toBe(5)
    expect(wrapper.props().shiftLeft).toBe(-10)
    wrapper.unmount()
  })
  test('recieves props', () => {
    const wrapper = mount(
      <Hint
        theme={theme}
        color={'yellow'}
        arrowColor={'blue'}
        bgColor={'blue'}
        hintText={'test'}
        position={'bottom'}
        size={36}
        shiftTop={24}
        shiftLeft={60}
      />
    )
    expect(wrapper.props().arrowColor).toBe('blue')
    expect(wrapper.props().bgColor).toBe('blue')
    expect(wrapper.props().hintText).toBe('test')
    expect(wrapper.props().position).toBe('bottom')
    expect(wrapper.props().color).toBe('yellow')
    expect(wrapper.props().size).toBe(36)
    expect(wrapper.props().shiftTop).toBe(24)
    expect(wrapper.props().shiftLeft).toBe(60)
    wrapper.unmount()
  })

  //react-tiny-popover-container
})
