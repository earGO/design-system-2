import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from '../src/Textarea'
import theme from '@design-system/theme'
import {mount} from 'enzyme/build'

describe('Text', () => {
  test('renders', () => {
    const json = renderer
      .create(<Textarea theme={theme}>Test text</Textarea>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  /*  test('disabled blocks textarea', () => {
    const wrapper = renderer
      .create(
        <Textarea disabled theme={theme}>
          Test text
        </Textarea>
      )
      .toJSON()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule(
      'background-color',
      theme.colors.input.disabled
    )
  })*/
})
