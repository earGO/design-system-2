import React from 'react'
import renderer from 'react-test-renderer'
import Absolute from '../src/Absolute'
import Icon from '../src/Icon'
import Text from '../src/Text'
import Relative from '../src/Relative'
import Box from '../src/Box'
import theme from '@design-system/theme'

describe('Relative', () => {
  test('renders with top, left and zIndex props', () => {
    const json = renderer
      .create(<Relative top={10} left={0} zIndex={2} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('top', '10px')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const json = renderer.create(
      <Relative top={10} left={0} theme={theme}>
        <Absolute top={10} right={0} zIndex={2}>
          <Icon name="error" />
          <Text>EXCLUSIVE</Text>
        </Absolute>
      </Relative>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
  test('renders without props', () => {
    const json = renderer.create(<Relative theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('width prop sets width', () => {
    const json = renderer
      .create(<Relative width={1 / 2} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '50%')
  })
  test('m prop sets margin', () => {
    const json = renderer.create(<Relative m={2} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2] + 'px')
  })
  test('recieves theme colors', () => {
    const json = renderer
      .create(
        <Relative width={1 / 2} bg="primary" color="white" theme={theme}>
          <Box>Hello Box</Box>
        </Relative>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.primary)
  })
  test('renders with wrong props', () => {
    const json = renderer
      .create(
        <Relative width={1 / 2} bg="unknown" color="wrongone" theme={theme}>
          Hello Box
        </Relative>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', 'unknown')
    expect(json).toHaveStyleRule('color', 'wrongone')
  })
})
