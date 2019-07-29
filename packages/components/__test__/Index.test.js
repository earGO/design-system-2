import React from 'react'
import renderer from 'react-test-renderer'
import * as index from '../src/index'
import theme from '@design-system/theme'
import {mount} from 'enzyme'
import Collapse from '../src/Collapse'
import Text from '../src/Text'

describe('Index exports components', () => {
  test('exports Box', () => {
    const container = renderer.create(<index.Box theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Flex', () => {
    const container = renderer.create(<index.Flex theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Card', () => {
    const container = renderer.create(<index.Card theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Relative', () => {
    const container = renderer.create(<index.Relative theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Absolute', () => {
    const container = renderer.create(<index.Absolute theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Overlay', () => {
    const {Overlay} = index
    const container = renderer
      .create(
        <Overlay>
          <div>
            <p>Heading</p>
          </div>
        </Overlay>
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Positional', () => {
    const container = renderer
      .create(
        <index.Positional theme={theme}>
          <div>caboom</div>
        </index.Positional>
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Text', () => {
    const container = renderer.create(<index.Text theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Heading', () => {
    const container = renderer.create(<index.Heading theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Button', () => {
    const container = renderer.create(<index.Button theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Divider', () => {
    const container = renderer.create(<index.Divider theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Collapse', () => {
    const {Collapse} = index
    const container = renderer
      .create(
        <Collapse theme={theme}>
          <Collapse.Panel key="key1" title="Title number 1" theme={theme}>
            <Text p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse.Panel>
          <Collapse.Panel key="key2" title="Title number 2" theme={theme}>
            <Text p={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse.Panel>
        </Collapse>
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })

  test('exports Form', () => {
    const container = renderer.create(<index.Form theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Input', () => {
    const container = renderer.create(<index.Input theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Textarea', () => {
    const container = renderer.create(<index.Textarea theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Checkbox', () => {
    const container = renderer.create(<index.Checkbox theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Toggle', () => {
    const container = renderer.create(<index.Toggle theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Radio', () => {
    const container = renderer.create(<index.Radio theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Popover', () => {
    const {Popover, Button} = index
    const container = renderer
      .create(
        <Popover>
          <Button type="dashed">Popover</Button>
        </Popover>
      )
      .toJSON()
    expect(container).toMatchSnapshot()
  })
  /*  test('exports Select', () => {
    const {Select} = index
    const options = [
      {value: 'template1', label: `Шаблон ИМ многоквартирного дома`},
      {value: 'template2', label: `Шаблон ИМ производственного помещения`},
      {value: 'template3', label: `Шаблон ИМ образовательного учреждения`},
      {value: 'template4', label: `Шаблон ИМ складского помещения`},
      {value: 'template5', label: `Шаблон ИМ торгового центра`}
    ]

    const container = renderer
      .create(<Select theme={theme} options={options} />)
      .toJSON()
    expect(container).toMatchSnapshot()
  })*/
  test('exports Scrollbars', () => {
    const container = renderer
      .create(<index.Scrollbars theme={theme} />)
      .toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Modal', () => {
    const container = renderer.create(<index.Modal theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports ResizableInput', () => {
    const container = renderer
      .create(<index.ResizableInput theme={theme} />)
      .toJSON()
    expect(container).toMatchSnapshot()
  })
  test('exports Icon', () => {
    const container = renderer.create(<index.Icon theme={theme} />).toJSON()
    expect(container).toMatchSnapshot()
  })
})
