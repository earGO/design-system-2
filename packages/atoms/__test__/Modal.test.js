import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../src/Modal'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const id = 'fake-test-id'

describe('Input', () => {
  test('it renders', () => {
    const json = renderer.create(<Modal id={id} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<Modal id={id} theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('it mounts closed', () => {
    const wrapper = mount(<Modal id={id} theme={theme} />)
    expect(wrapper.props().isOpen).toEqual(false)
    wrapper.unmount()
  })
  test('it opens if isOpen=true passed ', () => {
    const wrapper = mount(<Modal id={id} isOpen={true} theme={theme} />)
    expect(wrapper.props().isOpen).toEqual(true)
    wrapper.unmount()
  })
  test('it closes if isOpen=false passed ', () => {
    const wrapper = mount(<Modal id={id} isOpen={false} theme={theme} />)
    expect(wrapper.props().isOpen).toEqual(false)
    wrapper.unmount()
  })
})
