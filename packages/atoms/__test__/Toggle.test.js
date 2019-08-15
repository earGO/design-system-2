import React from 'react'
import renderer from 'react-test-renderer'
import Toggle from '../src/Toggle'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('Toggle', () => {
  test('renders', () => {
    const json = renderer
      .create(<Toggle theme={theme} text={'Toggle '} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
