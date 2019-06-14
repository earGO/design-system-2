import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../Icon'
import Flex from '../../../Flex'
import Box from '../../../Box'

function isDescendant(older, younger) {
  return (
    !!older.children &&
    typeof older.children !== 'function' &&
    older.children.some(child => child === younger || isDescendant(child, younger))
  )
}

// eslint-disable-next-line react/prefer-stateless-function
class NodeContentRenderer extends Component {
  render() {
    const {
      scaffoldBlockPxWidth,
      toggleChildrenVisibility,
      connectDragPreview,
      connectDragSource,
      isDragging,
      canDrop,
      canDrag,
      node,
      title,
      draggedNode,
      path,
      treeIndex,
      isSearchMatch,
      isSearchFocus,
      icons,
      buttons,
      className,
      style,
      didDrop,
      lowerSiblingCounts,
      listIndex,
      swapFrom,
      swapLength,
      swapDepth,
      treeId, // Not needed, but preserved for other renderers
      isOver, // Not needed, but preserved for other renderers
      parentNode, // Needed for dndManager
      rowDirection,
      ...otherProps
    } = this.props
    const nodeTitle = title || node.title

    const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node)
    const isLandingPadActive = !didDrop && isDragging

    // Construct the scaffold representing the structure of the tree
    const scaffold = []
    lowerSiblingCounts.forEach((lowerSiblingCount, i) => {
      scaffold.push(<div key={`pre_${1 + i}`} style={{ width: scaffoldBlockPxWidth }} />)

      if (treeIndex !== listIndex && i === swapDepth) {
        scaffold.push(
          <div
            key={`highlight_${1 + i}`}
            style={{
              width: scaffoldBlockPxWidth,
              left: scaffoldBlockPxWidth * i,
            }}
          />,
        )
      }
    })

    const renderToggleIcon = () => (
      <Box>
        <Icon
          name={node.expanded ? 'chevron-down' : 'chevron-up'}
          aria-label={node.expanded ? 'Collapse' : 'Expand'}
          style={{
            left: (lowerSiblingCounts.length - 0.7) * scaffoldBlockPxWidth,
            cursor: 'pointer',
          }}
          onClick={() =>
            toggleChildrenVisibility({
              node,
              path,
              treeIndex,
            })
          }
        />
      </Box>
    )

    const nodeContent = (
      <div style={{ height: '100%' }} {...otherProps}>
        {toggleChildrenVisibility && node.children && node.children.length > 0 && renderToggleIcon()}

        <div>
          {/* Set the row preview to be used during drag and drop */}
          {connectDragPreview(
            <div style={{ display: 'flex' }}>
              {scaffold}
              <div
                style={{
                  opacity: isDraggedDescendant ? 0.5 : 1,
                  ...style,
                }}
              >
                <div>
                  <div>
                    {icons.map((icon, index) => (
                      <div
                        key={index} // eslint-disable-line react/no-array-index-key
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div>
                    <span>
                      {typeof nodeTitle === 'function'
                        ? nodeTitle({
                            node,
                            path,
                            treeIndex,
                          })
                        : nodeTitle}
                    </span>
                  </div>

                  <div>
                    {buttons.map((btn, index) => (
                      <div
                        key={index} // eslint-disable-line react/no-array-index-key
                      >
                        {btn}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>,
          )}
        </div>
      </div>
    )

    return canDrag ? connectDragSource(nodeContent, { dropEffect: 'copy' }) : nodeContent
  }
}

NodeContentRenderer.defaultProps = {
  buttons: [],
  canDrag: false,
  canDrop: false,
  className: '',
  draggedNode: null,
  icons: [],
  isSearchFocus: false,
  isSearchMatch: false,
  parentNode: null,
  style: {},
  swapDepth: null,
  swapFrom: null,
  swapLength: null,
  title: null,
  toggleChildrenVisibility: null,
}

NodeContentRenderer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.node),
  canDrag: PropTypes.bool,
  className: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.node),
  isSearchFocus: PropTypes.bool,
  isSearchMatch: PropTypes.bool,
  listIndex: PropTypes.number.isRequired,
  lowerSiblingCounts: PropTypes.arrayOf(PropTypes.number).isRequired,
  node: PropTypes.shape({}).isRequired,
  path: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  scaffoldBlockPxWidth: PropTypes.number.isRequired,
  style: PropTypes.shape({}),
  swapDepth: PropTypes.number,
  swapFrom: PropTypes.number,
  swapLength: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  toggleChildrenVisibility: PropTypes.func,
  treeIndex: PropTypes.number.isRequired,
  treeId: PropTypes.string.isRequired,
  rowDirection: PropTypes.string.isRequired,

  // Drag and drop API functions
  // Drag source
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  didDrop: PropTypes.bool.isRequired,
  draggedNode: PropTypes.shape({}),
  isDragging: PropTypes.bool.isRequired,
  parentNode: PropTypes.shape({}), // Needed for dndManager
  // Drop target
  canDrop: PropTypes.bool,
  isOver: PropTypes.bool.isRequired,
}

export default NodeContentRenderer
