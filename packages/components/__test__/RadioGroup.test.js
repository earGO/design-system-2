import React from 'react'
import renderer from 'react-test-renderer'
import Radio from '../src/Radio'
import RadioGroup from '../src/RadioGroup'
import theme, {ThemeProvider} from '@design-system/theme'
import {mount} from 'enzyme'

class TestComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'one'
    }
  }
  handleChange = activeValue => {
    console.log(activeValue)
    this.setState({value: activeValue})
  }
  render() {
    return (
      <RadioGroup
        onChange={this.handleChange}
        value={this.state.value}
        defaultValue="one"
        id={'radio-group'}
        key={'0'}
      >
        <Radio id="radio-one" label="One" value="one" key={'1'} />
        <Radio id="radio-two" label="Two" value="two" ml={2} key={'2'} />
        <Radio id="radio-three" label="Three" value="three" ml={2} key={'3'} />
        <p key={'4'}>{this.state.value}</p>
      </RadioGroup>
    )
  }
}

describe('RadioGroup', () => {
  test('it renders', () => {
    const json = renderer.create(<TestComponent theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it mounts', () => {
    const wrapper = mount(<TestComponent theme={theme} />)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
  test('it changes state', () => {
    const wrapper = mount(<TestComponent theme={theme} />)
    expect(wrapper.state().value).toBe('one')
    const instance = wrapper.instance()
    instance.handleChange('two')
    expect(wrapper.state('value')).toEqual('two')
    wrapper.unmount()
  })
})
