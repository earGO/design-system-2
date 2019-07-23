import React from 'react'
import renderer from 'react-test-renderer'
import Collapse from '../src/Collapse'
import Text from '../src/Text'
import theme from '@design-system/theme'
import {render, fireEvent, cleanup} from '@testing-library/react'
import {mount} from 'enzyme/build'

const TestPanel = theme => (
  <Collapse theme={theme}>
    <Collapse.Panel key="key1" title="Title number 1" theme={theme}>
      <Text p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Collapse.Panel>
    <Collapse.Panel key="key1" title="Title number 2" theme={theme}>
      <Text p={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
    </Collapse.Panel>
  </Collapse>
)

const TestPanelControllable = (activeKeys, onChange, theme) => (
  <Collapse activeKeys={activeKeys} onChange={onChange} theme={theme}>
    <Collapse.Panel key="key1" title="Title number 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Collapse.Panel>
    <Collapse.Panel key="key2" title="Title number 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Collapse.Panel>
    <Collapse.Panel key="key3" title="Title number 3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Collapse.Panel>
  </Collapse>
)

afterEach(cleanup)

describe('Collapse', () => {
  test('renders children with no props', () => {
    const {getByTestId} = render(
      <Collapse.Panel
        key="key1"
        title="Title number 1"
        theme={theme}
        data-testid={'test-text'}
      >
        <Text p={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse.Panel>
    )
    const FirstTable = getByTestId('test-text')
    expect(FirstTable.text()).toContain('Lorem ipsum dolor sit')
  })
})
