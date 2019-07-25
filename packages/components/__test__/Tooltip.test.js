import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from '../src/Toggle'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('Toggle', () => {
  test('renders', () => {
    const json = renderer.create(<Toggle theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('changes state on click', () => {
    const mockFunction = jest.fn() // In-built Jest function mocker
    const component = mount(<Toggle onClick={mockFunction} theme={theme} />)

    // Test before event
    expect(component.state().checked).toBe(false)
    // simulate the click event
    component.find('button').simulate('click')
    expect(component.state().checked).toBe(true)
  })
})
