import React from 'react'
import renderer from 'react-test-renderer'
import Radio from '../src/Radio'
import theme, {ThemeProvider} from '@design-system/theme'
import {mount} from 'enzyme'

let checked = false

const handleChange = checked => {
  setState({
    checked: !state.checked
  })
}

describe('Radio', () => {
  test('it renders', () => {
    const json = renderer
      .create(
        <Radio
          mr={2}
          label="Yes"
          checked={checked}
          onChange={handleChange}
          theme={theme}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders with no props', () => {
    const json = renderer.create(<Radio />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Radio checked />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Radio />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Radio disabled />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('renders with wrong props with warning', () => {
    console.error = jest.fn()
    const json = renderer.create(<Radio checked={'wrong'} />).toJSON()

    expect(json).toMatchSnapshot()

    expect(console.error.mock.calls.toString().length !== 0)

    console.error.mockRestore()
  })
  test('it mounts', () => {
    const wrapper = mount(
      <Radio
        mr={2}
        label="Yes"
        checked={checked}
        onChange={handleChange}
        theme={theme}
      />
    )
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})

describe('Radio DOM and integration', () => {
  test('it has input', () => {
    const wrapper = mount(
      <Radio
        mr={2}
        label="Yes"
        checked={checked}
        onChange={handleChange}
        theme={theme}
      />
    )
    const input = wrapper.find('input')
    expect(input).toHaveLength(1)
    const children = wrapper.children().get(0).props.children
    const labelText = children[1].props.children
    const radioInputDiv = children[0].props.children[0].props
    const radioIconDiv = children[0].props.children[1].props
    const radioIcon = radioIconDiv.children
    const radionInput = radioInputDiv.children

    console.log(radionInput)
    expect(labelText).toBe('Yes')
    wrapper.unmount()
  })
})
