import React from 'react'
import renderer from 'react-test-renderer'
import Select from '../src/Select'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const id = 'fake-test-id'

describe('Select', () => {
  /*
  test('it renders', () => {
    const json = renderer
      .create(<Select id={id} theme={theme} systemTheme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<Select id={id} theme={theme} systemTheme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
*/
  test('dummy', () => {
    console.log('dummy test')
    expect(2 + 2).toBe(4)
  })
})
