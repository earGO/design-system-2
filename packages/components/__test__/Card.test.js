import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../src/Card'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="sm" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)'
    )
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.border}`)
    expect(json).toHaveStyleRule('border-radius', theme.radii[1] + 'px')
  })
  test('renders medium box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="md" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`
    )
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.border}`)
    expect(json).toHaveStyleRule('border-radius', theme.radii[1] + 'px')
  })
  test('renders large box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="lg" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`
    )
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.border}`)
    expect(json).toHaveStyleRule('border-radius', theme.radii[1] + 'px')
  })
  test('renders xtra-large box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="xl" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
    )
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.border}`)
    expect(json).toHaveStyleRule('border-radius', theme.radii[1] + 'px')
  })
  test('recieves margin and padding props', () => {
    const json = renderer
      .create(
        <Card boxShadowSize="sm" p={4} mb={4} theme={theme}>
          <div bold>sm-shadow</div>
        </Card>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', `32px`)
    expect(json).toHaveStyleRule('margin-bottom', '32px')
  })

  test('renders children', () => {
    const component = mount(
      <Card boxShadowSize="sm" p={4} mb={4} theme={theme}>
        <p>sm-shadow</p>
      </Card>
    )
    expect(component.find('p').text()).toContain('sm-shadow')
  })
  test('renders children with no props', () => {
    const component = mount(
      <Card theme={theme}>
        <p>sm-shadow</p>
      </Card>
    )
    expect(component.find('p').text()).toContain('sm-shadow')
  })
  test('recieves Box specific props', () => {
    const json = renderer
      .create(
        <Card bg={'primary'} theme={theme}>
          <div bold>sm-shadow</div>
        </Card>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.primary)
  })
  test('renders wrong boxShadowSize with warning', () => {
    console.error = jest.fn()
    const json = renderer.create(<Card boxShadowSize={'ugly'} />).toJSON()

    expect(json).toMatchSnapshot()
    expect(
      console.error.mock.calls
        .toString()
        .indexOf(
          ` Warning: Failed prop type: Invalid prop \`boxShadowSize\` of value \`biggest\` supplied to \`Card\`, expected one of ["sm","md","lg","xl"].`
        ) === 0
    )

    console.error.mockRestore()
  })
})
