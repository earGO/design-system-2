import React from 'react'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, Icon, Flex } from '../../index'

const noop = () => {}

const disabled = props => {
  return (
    props.disabled &&
    css`
      background: ${props.theme.colors.disabled};
      cursor: not-allowed;
    `
  )
}

const PanelContent = styled(Box)`
  ${props => `transition: height ${props.theme.duration.normal};`}
  overflow: hidden;
`

const AnimatedScaledIcon = styled(Icon)`
  ${props => `transition: transform ${props.theme.duration.normal}`};
  ${props => props.isOpen && `transform: rotate(180deg)`};
`

const PanelHeaderWrapper = styled(Flex)`
  ${props => (props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')}
`

const PanelWrapper = styled(Flex)`
  overflow: hidden;
  ${disabled}
`

const PanelHeader = ({ title, togglePanel, isOpen, panelKey, disabled }) => (
  <PanelHeaderWrapper
    disabled={disabled}
    justifyContent="space-between"
    onClick={disabled ? noop : () => togglePanel(panelKey)}
  >
    {title}
    <AnimatedScaledIcon
      isOpen={isOpen}
      name="chevron-down"
    />
  </PanelHeaderWrapper>
)

class Panel extends React.Component {
  state = {
    contentHeight: 0,
  }

  componentDidMount() {
    this.setState({
      contentHeight: this.measure && this.measure.clientHeight,
    })
  }

  render() {
    return (
      <PanelWrapper flexDirection="column" disabled={this.props.disabled}>
        <PanelHeader {...this.props} />
        <PanelContent style={{ height: this.props.isOpen ? this.state.contentHeight : 0 }}>
          <Box ref={measure => (this.measure = measure)}>{this.props.children}</Box>
        </PanelContent>
      </PanelWrapper>
    )
  }
}

Panel.propTypes = {
  /** Возможность скрыть-раскрыть панель */
  disabled: propTypes.bool,
  /** Заголовок панели. */
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
}

Panel.defaultProps = {
  disabled: false,
  title: '',
}

// Оставить для доков?
// Panel.displayName = 'Collapse.Panel'

/** @component */
export default Panel
