import React from 'react'
import renderer from 'react-test-renderer'
import Text from '../src/Text'
import theme from '@design-system/theme'

describe('Text', () => {
  test('renders', () => {
    const json = renderer.create(<Text theme={theme}>Test text</Text>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('textAlign prop sets text-align', () => {
    const json = renderer
      .create(
        <Text align="center" theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
  })

  test('regular prop sets font-weight', () => {
    const json = renderer
      .create(
        <Text regular theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'font-weight',
      theme.fontWeights.regular.toString()
    )
  })

  test('bold prop sets font-weight', () => {
    const json = renderer
      .create(
        <Text bold theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'font-weight',
      theme.fontWeights.bold.toString()
    )
  })

  test('caps prop sets text-transform', () => {
    const json = renderer
      .create(
        <Text caps theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
  })

  test('fontSize prop sets font-size', () => {
    const f0 = renderer
      .create(
        <Text fontSize={0} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f1 = renderer
      .create(
        <Text fontSize={1} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f2 = renderer
      .create(
        <Text fontSize={2} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f3 = renderer
      .create(
        <Text fontSize={3} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f4 = renderer
      .create(
        <Text fontSize={4} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f5 = renderer
      .create(
        <Text fontSize={5} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    const f6 = renderer
      .create(
        <Text fontSize={6} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(f0).toHaveStyleRule('font-size', theme.fontSizes[0] + 'px')
    expect(f1).toHaveStyleRule('font-size', theme.fontSizes[1] + 'px')
    expect(f2).toHaveStyleRule('font-size', theme.fontSizes[2] + 'px')
    expect(f3).toHaveStyleRule('font-size', theme.fontSizes[3] + 'px')
    expect(f4).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
    expect(f5).toHaveStyleRule('font-size', theme.fontSizes[5] + 'px')
    expect(f6).toHaveStyleRule('font-size', theme.fontSizes[6] + 'px')
  })

  test('mt prop sets margin-top', () => {
    const json = renderer
      .create(
        <Text mt={2} theme={theme}>
          Test text
        </Text>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin-top', theme.space[2] + 'px')
  })

  describe('deprecated props', () => {
    test('shims deprecated align prop', () => {
      const json = renderer
        .create(
          <Text align="center" theme={theme}>
            Test text
          </Text>
        )
        .toJSON()
      expect(json).toHaveStyleRule('text-align', 'center')
    })
  })
})
