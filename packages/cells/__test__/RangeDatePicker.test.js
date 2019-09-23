import {mount} from 'enzyme/build'
import RangeDatePicker from '../src/RangeDatePicker'
import theme from '@design-system/theme'
import React from 'react'

describe('RangeDatePicker DOM and snapshot', () => {
  test('mounts', () => {
    const wrapper = mount(<RangeDatePicker theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
