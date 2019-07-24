import React from 'react'
import renderer from 'react-test-renderer'
import Popover from '../src/Popover'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const SingleComponent = ({...props}) => (
  <Popover id={id} theme={theme} {...props}>
    <p>Test content</p>
  </Popover>
)
const id = 'fake-test-id'

describe('Popover', () => {
  test('it renders', () => {
    const json = renderer.create(<SingleComponent />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<SingleComponent />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
