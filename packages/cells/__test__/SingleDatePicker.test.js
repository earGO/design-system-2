import {mount} from 'enzyme/build'
import SingleDatePicker from '../src/SingleDatePicker'
import theme from '@design-system/theme'
import React from 'react'
import {formatDate} from '@design-system/utils'

const handlePick = value => {
  setDate(value)
  console.log(formatDate(value))
}

describe('SingleDatePicker DOM and snapshot', () => {
  test('mounts', () => {
    const wrapper = mount(
      <SingleDatePicker theme={theme} onChange={handlePick} />
    )
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
