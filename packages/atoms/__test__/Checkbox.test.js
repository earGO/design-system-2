import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from '../src/Checkbox'
import theme from '@design-system/theme'
import {render, fireEvent, cleanup} from '@testing-library/react'

afterEach(cleanup)

describe('Checkbox', () => {
  test('renders without the theme passed specifically', () => {
    const onChange = jest.fn()
    const json = renderer
      .create(<Checkbox id="check-box" onChange={onChange} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const json = renderer
      .create(<Checkbox id="check-box" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders checked and disabled with checked and disabled prop', () => {
    const onChange = jest.fn()
    const json = renderer
      .create(<Checkbox id="check-box" checked disabled onChange={onChange} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders disabled with disabled prop', () => {
    const onChange = jest.fn()
    const json = renderer
      .create(<Checkbox id="check-box" disabled={true} onChange={onChange} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders disabled with defaultChecked', () => {
    const onChange = jest.fn()
    const json = renderer
      .create(
        <Checkbox
          id="check-box"
          disabled={true}
          checked={true}
          onChange={onChange}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('calls onChange when clicked', () => {
    const onChange = jest.fn()
    const {container} = render(<Checkbox id="check-box" onChange={onChange} />)
    const checkbox = container.querySelector('[type=checkbox]')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
