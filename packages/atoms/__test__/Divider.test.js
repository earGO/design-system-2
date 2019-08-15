import React from 'react'
import renderer from 'react-test-renderer'
import Divider from '../src/Divider'
import theme from '@design-system/theme'

describe('Divider', () => {
  test('renders', () => {
    const json = renderer.create(<Divider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('m prop sets margin', () => {
    const json = renderer.create(<Divider m={2} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2] + 'px')
  })

  test('color prop sets borderColor from theme', () => {
    const json = renderer
      .create(<Divider color="primary" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.primary)
  })
  test('default divider has default color from theme', () => {
    const json = renderer.create(<Divider theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.border)
  })
  test('vertical prop makes divider vertical', () => {
    const json = renderer.create(<Divider theme={theme} vertical />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-left', '16px')
    expect(json).toHaveStyleRule('margin-right', '16px')
  })
})
