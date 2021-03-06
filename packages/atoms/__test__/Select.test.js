import React from 'react'
import renderer from 'react-test-renderer'
import Select from '../src/Select'
import theme, {ThemeProvider} from '@design-system/theme'
import {mount} from 'enzyme'

const id = 'fake-test-id'

describe('Select', () => {
  test('it renders', () => {
    const json = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Select id={id} />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Select id={id} />
      </ThemeProvider>
    )
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  test('dummy', () => {
    console.log('dummy test')
    expect(2 + 2).toBe(4)
  })
})
