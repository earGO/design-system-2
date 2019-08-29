import React from 'react'
import renderer from 'react-test-renderer'
import Modal from '../src/Modal'
import Scrollbars from '../src/Scrollbars'
import Box from '../src/Box'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const id = 'fake-test-id'

class TestComponent extends React.Component {
  render() {
    return (
      <Scrollbars>
        <Box>One</Box>
        <Box>Two</Box>
        <Box>three</Box>
      </Scrollbars>
    )
  }
}

describe('Scrollbars', () => {
  test('it renders', () => {
    const json = renderer
      .create(<TestComponent id={id} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<TestComponent id={id} theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
