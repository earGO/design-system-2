import React from 'react'

/** Component-stub for  a propTypes in stories.
 * I want to use info-addon to provide some info to each usecase in
 * generated olddocs.
 *
 * PropTypes are rendered in every doc page, so repeating them is redundant */

const TableComponent = ({propDefinitions}) => {
  const props = propDefinitions.map(
    ({property, propType, required, description, defaultValue}) => {
      if (propType !== undefined) {
        return (
          <tr key={property}>
            <td>
              {property}
              {required ? <div>*</div> : null}
            </td>
            <td>{propType.name}</td>
            <td>{defaultValue}</td>
            <td>{description}</td>
          </tr>
        )
      }
    }
  )

  return null
}
TableComponent.displayName = 'PropTable'

TableComponent.propTypes = {}

TableComponent.defaultProps = {}

export default TableComponent
