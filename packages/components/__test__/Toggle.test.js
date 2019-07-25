import React from 'react'
import renderer from 'react-test-renderer'
import Tooltip from '../src/Tooltip'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('Toggle', () => {
  test('renders', () => {
    const json = renderer
      .create(<Tooltip theme={theme} text={'Tooltip popup'} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
