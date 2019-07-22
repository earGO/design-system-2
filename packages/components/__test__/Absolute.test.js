import React from 'react'
import renderer from 'react-test-renderer'
import {Absolute, Icon} from '../src'
import Box from '../src/Box'
import theme from '@design-system/theme'

describe('Absolute', () => {
  test('renders with top, left and zIndex props', () => {
    const json = renderer
      .create(<Absolute top={10} left={-30} zIndex={2} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('position', 'absolute')
    expect(json).toHaveStyleRule('top', '10px')
    expect(json).toHaveStyleRule('left', '-30px')
    expect(json).toHaveStyleRule('z-index', '2')
  })
  test('renders Child', () => {
    const json = renderer.create(
      <Absolute top={10} left={0}>
        <Icon
          name="Flights"
          color={'blue'}
          size={56}
          title={'test'}
          titleId={'testid'}
          desc={'desc'}
          descId={'descId'}
        />
      </Absolute>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
  test('color prop sets color', () => {
    const json = renderer
      .create(<Absolute color={theme.colors.blue} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })
  test('recieves theme props prop sets color', () => {
    const json = renderer
      .create(<Absolute color="primary" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.primary)
  })
})
