import React from 'react'
import renderer from 'react-test-renderer'
import Overlay from '../src/Overlay'
import theme from '@design-system/theme'
import {mount} from 'enzyme'

const SingleComponent = ({...props}) => (
  <Overlay id={id} theme={theme} {...props}>
    <p>Test content</p>
  </Overlay>
)
const id = 'fake-test-id'

describe('Overlay', () => {
  test('it renders', () => {
    const json = renderer.create(<SingleComponent />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<SingleComponent />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('it inherits Flex', () => {
    const flex = renderer
      .create(<SingleComponent alignItems={'center'} theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })
})
