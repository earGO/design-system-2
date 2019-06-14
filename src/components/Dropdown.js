import React from 'react'
import RcDropdown from 'rc-dropdown'

class Dropdown extends React.PureComponent {
  getTransitionName() {
    const { placement = '', transitionName } = this.props
    if (transitionName !== undefined) {
      return transitionName
    }
    if (placement.indexOf('top') >= 0) {
      return 'slide-down'
    }
    return 'slide-up'
  }

  render() {
    const { children } = this.props

    return (
      <RcDropdown
        // alignPoint={alignPoint}
        {...this.props}
        // prefixCls={prefixCls}
        // getPopupContainer={getPopupContainer || getContextPopupContainer}
        transitionName={this.getTransitionName()}
        // trigger={triggerActions}
        // overlay={() => this.renderOverlay(prefixCls)}
      >
        {React.Children.only(children)}
      </RcDropdown>
    )
  }
}

export default Dropdown
