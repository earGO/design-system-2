import React from 'react'
import renderer from 'react-test-renderer'
import Positional from '../src/Positional'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const SingleComponent = ({...props}) => (
  <Positional id={id} theme={theme} {...props}>
    <p>Test content</p>
  </Positional>
)
const id = 'fake-test-id'

describe('Positional', () => {
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
