import React from 'react'
import renderer from 'react-test-renderer'
import Flex from '../src/Flex'
import theme from '@design-system/theme'

describe('Flex', () => {
  test('renders', () => {
    const flex = renderer.create(<Flex theme={theme} />).toJSON()
    expect(flex).toMatchSnapshot()
  })
  test('alignItems prop', () => {
    const flex = renderer
      .create(<Flex alignItems={'center'} theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent prop', () => {
    const flex = renderer
      .create(<Flex justifyContent="space-between" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'space-between')
  })

  test('flexWrap prop', () => {
    const flex = renderer
      .create(<Flex flexWrap="wrap" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })
  test('alignItems prop', () => {
    const flex = renderer
      .create(<Flex alignItems="stretch" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'stretch')
  })
  test('recieves wrap prop', () => {
    const json = renderer
      .create(<Flex flexWrap={'wrap'} theme={theme} />)
      .toJSON()
    const nowrapjson = renderer
      .create(<Flex flexWrap={'nowrap'} theme={theme} />)
      .toJSON()
    expect(json).toHaveStyleRule('flex-wrap', 'wrap')
    expect(nowrapjson).toHaveStyleRule('flex-wrap', 'nowrap')
  })
  test('renders with wrong props', () => {
    const json = renderer
      .create(
        <Flex width={1 / 2} bg="unknown" color="wrongone" theme={theme}>
          Hello Box
        </Flex>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', 'unknown')
    expect(json).toHaveStyleRule('color', 'wrongone')
  })
  test('recieves theme props and theming', () => {
    const json = renderer
      .create(<Flex flexWrap={'wrap'} theme={theme} bg={'primary'} />)
      .toJSON()
    expect(json).toHaveStyleRule('background-color', theme.colors.primary)
  })
})
