import React, {useState} from 'react'
import renderer from 'react-test-renderer'
import Input from '../src/Input'
import ResizableInput from '../src/ResizableInput'
import theme from '@design-system/theme'
import {mount} from 'enzyme'
import Icon from '../src/Icon'

const prefix = <Icon name="search" />
const suffix = <Icon name="times" />

const id = 'fake-test-id'

describe('Resizable Input', () => {
  test('it mounts', () => {
    const wrapper = mount(<ResizableInput id={id} theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = renderer
      .create(<ResizableInput id={id} color="red" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = renderer
      .create(<ResizableInput id={id} p={4} m={4} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = renderer
      .create(<ResizableInput id={id} fontSize={4} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders with prefix icon', () => {
    const wrapper = mount(
      <ResizableInput id={id} prefix={prefix} theme={theme} />
    )
    expect(wrapper.find('i')).toHaveLength(1)
    wrapper.unmount()
  })
  test('it renders with suffix icon', () => {
    const wrapper = mount(
      <ResizableInput id={id} suffix={suffix} theme={theme} />
    )
    expect(wrapper.find('i')).toHaveLength(1)
    wrapper.unmount()
  })
  test('it renders with both suffix and prefix icons', () => {
    const wrapper = mount(
      <ResizableInput prefix={prefix} suffix={suffix} theme={theme} id={id} />
    )
    expect(wrapper.find('i')).toHaveLength(2)
    wrapper.unmount()
  })
})

/* Since here I use actual instance of Input, and control it's value
 * Jest will fire warning in cosole about it. But I had to test handleChange */

describe('ResizableInput with outside methods and stuff', () => {
  test('has handleChange method and keeps changes in state', () => {
    const wrapper = mount(
      <ResizableInput prefix={prefix} suffix={suffix} theme={theme} id={id} />
    )
    const instance = wrapper.instance()
    instance.handleChange({target: {value: 'hello'}})
    expect(wrapper.state('value')).toEqual('hello')
    wrapper.unmount()
  })
})
