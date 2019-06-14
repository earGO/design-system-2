import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SortableTree from 'react-sortable-tree'
import theme from '../theme'
// import treeDefaultTheme from './Tree/themes/default'
import 'react-sortable-tree/style.css'

/** Древовидное представление данных */
function Tree({ theme, ...props }) {
  return <SortableTree {...props} />
}

Tree.displayName = 'Tree'

Tree.propTypes = {
  /** @ignore */
  theme: PropTypes.any,
}

Tree.defaultProps = {
  theme,
}

/** @component */
export default Tree
