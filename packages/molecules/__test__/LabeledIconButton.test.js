import React from 'react'
import LabeledIconButton from '../src/LabeledIconButton'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('LabeledIconButton', () => {
  test('mounts', () => {
    const wrapper = mount(<LabeledIconButton theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('has default props', () => {
    const wrapper = mount(<LabeledIconButton theme={theme} />)
    expect(wrapper.props().iconName).toBe('error')
    expect(wrapper.props().color).toBe('black')
    expect(wrapper.props().caption).toBe('Default text')
    expect(wrapper.props().size).toBe(24)
    expect(wrapper.props().fontSize).toBe(2)
    wrapper.unmount()
  })
  test('recieves props', () => {
    const wrapper = mount(
      <LabeledIconButton
        theme={theme}
        iconName={'help'}
        color={'blue'}
        caption={'test'}
        size={36}
        fontSize={5}
      />
    )
    expect(wrapper.props().iconName).toBe('help')
    expect(wrapper.props().color).toBe('blue')
    expect(wrapper.props().caption).toBe('test')
    expect(wrapper.props().size).toBe(36)
    expect(wrapper.props().fontSize).toBe(5)
    wrapper.unmount()
  })
})
