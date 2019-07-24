import React from 'react'
import renderer from 'react-test-renderer'
import Heading from '../src/Heading'
import theme from '@design-system/theme'

describe('Heading', () => {
  test('renders', () => {
    const json = renderer.create(<Heading theme={theme}>Blah</Heading>).toJSON()
    expect(json).toMatchSnapshot()
  })

  const defaultFontSizeTestCase =
    'Heading component with default theme font size, when "fontSize" prop not used'
  test(defaultFontSizeTestCase, () => {
    const json = renderer.create(<Heading theme={theme}>Blah</Heading>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
  })

  const selectedTagTestCase =
    'Heading component with selected tag sets theme font size'
  test(selectedTagTestCase, () => {
    const json = renderer
      .create(
        <Heading theme={theme} tag={'h2'}>
          Blah
        </Heading>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', theme.fontSizes[5] + 'px')
  })
  const usingTextPropsTestCase =
    'Heading component using <Text> component properties'
  test(usingTextPropsTestCase, () => {
    const json = renderer
      .create(
        <Heading align="center" tag={'h2'} color="primary" theme={theme}>
          Blah
        </Heading>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-align', 'center')
    expect(json).toHaveStyleRule('color', theme.colors.primary)
  })
})
