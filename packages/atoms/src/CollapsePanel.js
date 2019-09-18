import React from 'react'
import propTypes from 'prop-types'
import styled, {css} from 'styled-components'
import Box from './Box'
import Flex from './Flex'
import Relative from './Relative'
import Icon from './Icon'
import themeGet from '@styled-system/theme-get'
import theme from '@design-system/theme'

const noop = () => {}

const disabled = props => {
  return (
    props.disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `
  )
}

const PanelContent = styled(Box)`
  ${props => `transition: height ${props.theme.duration.normal};`}
`

// To fix warning because of passing isOpen prop to <svg />
const AnimatedScaledIcon = styled(Relative)`
  top: 2px;
  color: ${themeGet('color.black', '#080808')};
  transition: transform ${themeGet('duration.normal', '300ms')};
  ${props => props.isOpen && `transform: rotate(180deg);`}
`

const PanelWrapper = styled(Flex)`
  font-size: ${props => props.theme.fontSizes[1] + 'px'};
  color: ${props => props.theme.colors.black};
  ${props => !props.isOpen && `overflow: hidden;`}
  ${disabled}
`

const PanelHeaderWrapper = styled(Flex)`
  justify-content: ${props => props.titleAlignment};
  align-items: center;
  border-bottom: 1px solid ${themeGet('colors.border', '#ecebeb')};
  border-width: ${props => (props.divided ? '1px' : '0px')};
  ${props => (props.disabled ? 'cursor: not-allowed;' : 'cursor: pointer;')};
`

const PanelHeader = ({
  title,
  togglePanel,
  isOpen,
  panelKey,
  disabled,
  titleAlignment,
  flex,
  titleFirst,
  divided,
  iconPositionProps,
  headerProps
}) => (
  <PanelHeaderWrapper
    disabled={disabled}
    titleAlignment={titleAlignment}
    onClick={disabled ? noop : () => togglePanel(panelKey)}
    divided={divided}
    {...headerProps}
  >
    {titleFirst ? (
      <>
        <Box
          style={{
            cursor: typeof title === 'object' ? 'default' : 'pointer'
          }}
          flex={flex}
          id={title + '-id'}
          px={3}
          onClick={
            typeof title === 'object' ? e => e.stopPropagation() : e => e
          }
        >
          {title}
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          width={16}
          height={16}
        >
          <AnimatedScaledIcon isOpen={isOpen} {...iconPositionProps}>
            <Icon name={'keyboard_arrow_down'} size={18} />
          </AnimatedScaledIcon>
        </Flex>{' '}
      </>
    ) : (
      <>
        <Flex
          justifyContent="center"
          alignItems="center"
          width={18}
          height={18}
        >
          <AnimatedScaledIcon isOpen={isOpen} {...iconPositionProps}>
            <Icon name={'keyboard_arrow_down'} size={18} />
          </AnimatedScaledIcon>
        </Flex>
        <Box
          style={{
            cursor: typeof title === 'object' ? 'default' : 'pointer'
          }}
          flex={flex}
          id={title + '-id'}
          px={3}
          onClick={
            typeof title === 'object' ? e => e.stopPropagation() : e => e
          }
        >
          {title}
        </Box>
      </>
    )}
  </PanelHeaderWrapper>
)

/** Отвечает за вывод содержимого */
class CollapsePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentHeight: 0
    }
  }

  componentDidMount() {
    this.setState({
      contentHeight: this.measure && this.measure.clientHeight
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.measure) {
      if (prevState.contentHeight !== this.measure.clientHeight)
        this.setState({
          contentHeight: this.measure.clientHeight
        })
    }
  }

  render() {
    const mergedStyle = {
      ...this.props.style,
      height: this.props.isOpen ? this.state.contentHeight : 0
    }
    return (
      <PanelWrapper
        flexDirection="column"
        disabled={this.props.disabled}
        isOpen={this.props.isOpen}
      >
        <PanelHeader
          titleAlignment={this.props.titleAlignment}
          {...this.props}
        />
        <PanelContent {...this.props.contentProps} style={mergedStyle}>
          <Box ref={measure => (this.measure = measure)}>
            {this.props.children}
          </Box>
        </PanelContent>
      </PanelWrapper>
    )
  }
}

CollapsePanel.propTypes = {
  /** Возможность скрыть-раскрыть панель */
  disabled: propTypes.bool,
  /** Заголовок панели. */
  title: propTypes.oneOfType([propTypes.string, propTypes.element]),
  /** Есть ли разделитель между заголовком и контентом панели */
  divided: propTypes.bool,
  /** Тонкое позиционирование иконки-стрелочки (сигнатура как у компонента Relative */
  iconPositionProps: propTypes.object,
  /** Props для настройки заголовка выпадающей панели, доступные props такие же
   * как для компонента Flex*/
  headerProps: propTypes.object,
  /** Props для настройки свойств блока контента, интерфейс как у Box */
  contentProps: propTypes.object
}

CollapsePanel.defaultProps = {
  disabled: false,
  title: '',
  titleAlignment: 'flex-start',
  divided: true,
  iconPositionProps: {},
  headerProps: {height: '63px'},
  contentProps: {},
  theme
}

CollapsePanel.displayName = 'Collapse.Panel'

/** @component */
export default CollapsePanel
