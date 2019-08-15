import React from 'react'
import {storiesOf} from '@storybook/react'

import RadioGroup from '../src/RadioGroup'
import Radio from '../src/Radio'

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
      >
        <Radio id="radio-one" label="One" value="one" key={'1'} />
        <Radio id="radio-two" label="Two" value="two" ml={2} key={'2'} />
        <Radio id="radio-three" label="Three" value="three" ml={2} key={'3'} />
        <p key={'4'}>{this.state.value}</p>
      </RadioGroup>
    )
  }
}

storiesOf(`RadioGroup`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add('Default', () => <TestComponent />, {
    info: {
      text: `
          По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
    }
  })
