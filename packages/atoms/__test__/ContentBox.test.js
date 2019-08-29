import React from 'react'
import renderer from 'react-test-renderer'
import ContentBox from '../src/ContentBox'
import theme from '@design-system/theme'

describe('ContentBox', () => {
  test('renders', () => {
    const flex = renderer.create(<ContentBox theme={theme} />).toJSON()
    expect(flex).toMatchSnapshot()
  })
  test('alignItems prop', () => {
    const flex = renderer
      .create(<ContentBox alignItems={'center'} theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'center')
  })

  test('justifyContent prop', () => {
    const flex = renderer
      .create(<ContentBox justifyContent="space-between" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('justify-content', 'space-between')
  })

  test('flexWrap prop', () => {
    const flex = renderer
      .create(<ContentBox flexWrap="wrap" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('flex-wrap', 'wrap')
  })
  test('alignItems prop', () => {
    const flex = renderer
      .create(<ContentBox alignItems="stretch" theme={theme} />)
      .toJSON()
    expect(flex).toMatchSnapshot()
    expect(flex).toHaveStyleRule('align-items', 'stretch')
  })
  test('recieves wrap prop', () => {
    const json = renderer
      .create(<ContentBox flexWrap={'wrap'} theme={theme} />)
      .toJSON()
    const nowrapjson = renderer
      .create(<ContentBox flexWrap={'nowrap'} theme={theme} />)
      .toJSON()
    expect(json).toHaveStyleRule('flex-wrap', 'wrap')
    expect(nowrapjson).toHaveStyleRule('flex-wrap', 'nowrap')
  })
  test('renders with wrong props', () => {
    const json = renderer
      .create(
        <ContentBox width={1 / 2} bg="unknown" color="wrongone" theme={theme}>
          Hello Box
        </ContentBox>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', 'unknown')
    expect(json).toHaveStyleRule('color', 'wrongone')
  })
  test('recieves theme props and theming', () => {
    const json = renderer
      .create(<ContentBox flexWrap={'wrap'} theme={theme} bg={'primary'} />)
      .toJSON()
    expect(json).toHaveStyleRule('background-color', theme.colors.primary)
  })
})
