import React from 'react'

const TableComponent = ({ propDefinitions }) => {
    const props = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <Red>*</Red> : null}
                    </td>
                    <td>{propType.name}</td>
                    <td>{defaultValue}</td>
                    <td>{description}</td>
                </tr>
            );
        }
    );

    return (
        null
    );
};
TableComponent.displayName = 'PropTable';

TableComponent.propTypes = {}

TableComponent.defaultProps = {}

export default TableComponent
