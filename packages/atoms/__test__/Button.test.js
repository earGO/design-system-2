import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../src/Button'
import theme from '@design-system/theme'
import {mount, simulate} from 'enzyme'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('size small sets height and font-size', () => {
    const json = renderer.create(<Button size="small" theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('size medium sets height and font-size', () => {
    const json = renderer
      .create(<Button size="medium" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('size large sets height and font-size', () => {
    const json = renderer.create(<Button size="large" theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('width prop sets width to 100%', () => {
    const json = renderer.create(<Button block theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<Button disabled theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.disabled)
  })
  test('without disabled prop sets', () => {
    const json = renderer.create(<Button theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.primary, {
      modifier: ':hover'
    })
  })
  test('recieves positioning props', () => {
    const json = renderer.create(<Button mr={1} p={1} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-right', '4px')
    expect(json).toHaveStyleRule('padding', '10px 8px')
  })
  test('recieves positioning props', () => {
    const json = renderer
      .create(<Button m={1} p={1} pt={3} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', '4px')
    expect(json).toHaveStyleRule('padding', '10px 8px')
  })
  test('can have circle shape', () => {
    const json = renderer.create(<Button circle theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-radius', '50%')
  })
})

describe('testing methods of Button', () => {
  it('should call props.onChange when button is clicked', () => {
    const mockFunction = jest.fn() // In-built Jest function mocker
    const component = mount(
      <Button theme={theme} onClick={mockFunction}>
        Do Something
      </Button>
    )

    // Test before event
    expect(mockFunction).not.toHaveBeenCalled()

    // simulate the click event
    component.find('button').simulate('click')

    // Test after event
    expect(mockFunction).toHaveBeenCalled()

    // Can also test inner text of button
    expect(component.find('button').text()).toContain('Do Something')
  })
})
