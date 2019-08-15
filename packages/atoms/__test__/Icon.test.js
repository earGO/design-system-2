import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../src/Icon'
import theme from '@design-system/theme'
import {mount, shallow} from 'enzyme'

describe('Icon', () => {
  test('renders with no props', () => {
    const icon = renderer.create(<Icon theme={theme} />).toJSON()
    expect(icon).toMatchSnapshot()
  })
  test('renders with custom name', () => {
    const icon = renderer.create(<Icon name={'plane'} theme={theme} />).toJSON()
    expect(icon).toMatchSnapshot()
  })
  test('accepts size', () => {
    const icon = shallow(<Icon name={'error'} theme={theme} size={36} />)
    expect(icon.get(0).props).toHaveProperty('size', 36)
  })
})
