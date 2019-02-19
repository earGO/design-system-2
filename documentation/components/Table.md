Таблица.
Полный список пропсов:
[https://github.com/rsuite/rsuite-table](https://github.com/rsuite/rsuite-table)

```js
const dataList = [
  {
    id: 1,
    type: 'BIM-проект',
    number: '107/18',
    object: 'г. Москва, ААБ. Тестовый объект №107',
    status: 'Проектирование',
    dateUpdated: '05.02.2019',
  },
  {
    id: 2,
    type: 'BIM-проект',
    number: '107/19',
    object: 'г. Москва, ААБ. Тестовый объект №108',
    status: 'Проектирование',
    dateUpdated: '06.02.2019',
  },
  {
    id: 3,
    type: 'BIM-проект',
    number: '107/20',
    object: 'г. Москва, ААБ. Тестовый объект №109',
    status: 'Проектирование',
    dateUpdated: '07.02.2019',
  },
  {
    id: 4,
    type: 'BIM-проект',
    number: '107/21',
    object: 'г. Москва, ААБ. Тестовый объект №110',
    status: 'Проектирование',
    dateUpdated: '08.02.2019',
  },
  {
    id: 5,
    type: 'BIM-проект',
    number: '107/22',
    object: 'г. Москва, ААБ. Тестовый объект №111',
    status: 'Проектирование',
    dateUpdated: '09.02.2019',
  },
  {
    id: 6,
    type: 'BIM-проект',
    number: '107/23',
    object: 'г. Москва, ААБ. Тестовый объект №112',
    status: 'Проектирование',
    dateUpdated: '10.02.2019',
  },
]

;<Box width={900}>
  <Table data={dataList} height={400}>
    <Table.Column width={160} sort>
      <Table.HeaderCell style={{ paddingLeft: '16px' }}>Тип</Table.HeaderCell>
      <Table.Cell dataKey="type" />
    </Table.Column>

    <Table.Column width={128} sort>
      <Table.HeaderCell>Номер</Table.HeaderCell>
      <Table.Cell dataKey="number" />
    </Table.Column>

    <Table.Column width={352} sort>
      <Table.HeaderCell>Объект</Table.HeaderCell>
      <Table.Cell dataKey="object" />
    </Table.Column>

    <Table.Column width={192}>
      <Table.HeaderCell>Статус</Table.HeaderCell>
      <Table.Cell dataKey="status" />
    </Table.Column>

    <Table.Column width={160}>
      <Table.HeaderCell>Дата изменения</Table.HeaderCell>
      <Table.Cell dataKey="dateUpdated" />
    </Table.Column>
  </Table>
</Box>
```

"Рецепт" таблицы с возможностью построчного редактирования :

```js
const EditableCell = props => {
  const { rowData, dataKey, editRowId, handleCellChange, updatedItem } = props
  return (
    <Table.Cell {...props}>
      {editRowId === rowData.id ? (
        <Input size="small" value={updatedItem[dataKey]} onChange={handleCellChange} />
      ) : (
        rowData[dataKey]
      )}
    </Table.Cell>
  )
}

const EditCell = props => {
  const { onEditClick, handleSave, rowData, editRowId } = props
  return (
    <Table.Cell {...props}>
      {editRowId === rowData.id ? (
        <Icon name="save" onClick={() => handleSave(rowData.id)} />
      ) : (
        <Icon name="edit" onClick={() => onEditClick(rowData.id)} />
      )}
    </Table.Cell>
  )
}

class EditableRowExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editRowId: null,
      data: [
        {
          id: 1,
          type: 'BIM-проект №1',
          number: '107/18',
          object: 'г. Москва, ААБ. Тестовый объект №107',
          status: 'Проектирование',
          dateUpdated: '05.02.2019',
        },
        {
          id: 2,
          type: 'BIM-проект №2',
          number: '107/19',
          object: 'г. Москва, ААБ. Тестовый объект №108',
          status: 'Проектирование',
          dateUpdated: '06.02.2019',
        },
        {
          id: 3,
          type: 'BIM-проект №3',
          number: '107/20',
          object: 'г. Москва, ААБ. Тестовый объект №109',
          status: 'Проектирование',
          dateUpdated: '07.02.2019',
        },
        {
          id: 4,
          type: 'BIM-проект №4',
          number: '107/21',
          object: 'г. Москва, ААБ. Тестовый объект №110',
          status: 'Проектирование',
          dateUpdated: '08.02.2019',
        },
        {
          id: 5,
          type: 'BIM-проект №5',
          number: '107/22',
          object: 'г. Москва, ААБ. Тестовый объект №111',
          status: 'Проектирование',
          dateUpdated: '09.02.2019',
        },
        {
          id: 6,
          type: 'BIM-проект №6',
          number: '107/23',
          object: 'г. Москва, ААБ. Тестовый объект №112',
          status: 'Проектирование',
          dateUpdated: '10.02.2019',
        },
      ],
    }
    this.handleOnEditClick = this.handleOnEditClick.bind(this)
    this.handleCellChange = this.handleCellChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleOnEditClick(rowId) {
    const initialValues = this.state.data.find(item => item.id === rowId)
    this.setState({
      editRowId: rowId,
      updatedItem: initialValues,
    })
  }
  /* Выглядит страшно, потому что styleguidist не умеет в class-properties
    На деле это просто handleCellChange = (dataKey) => (value) => {
    // do stuff
  }
  */
  handleCellChange(dataKey) {
    let handleWithDataKey = function(value) {
      this.setState({
        updatedItem: {
          ...this.state.updatedItem,
          [dataKey]: value,
        },
      })
    }
    return handleWithDataKey.bind(this)
  }

  handleSave() {
    const { updatedItem, data } = this.state
    console.log('Data to save:', this.state.updatedItem)
    this.setState({
      editRowId: null,
      updatedItem: {},
      data: data.map(proj => (proj.id === updatedItem.id ? updatedItem : proj)),
    })
  }

  render() {
    return (
      <Box width={900}>
        <Table data={this.state.data} height={350}>
          <Table.Column width={160}>
            <Table.HeaderCell style={{ paddingLeft: '16px' }}>Тип</Table.HeaderCell>
            <EditableCell
              dataKey="type"
              editRowId={this.state.editRowId}
              updatedItem={this.state.updatedItem}
              handleCellChange={this.handleCellChange('type')}
            />
          </Table.Column>

          <Table.Column width={128}>
            <Table.HeaderCell>Номер</Table.HeaderCell>
            <EditableCell
              dataKey="number"
              editRowId={this.state.editRowId}
              updatedItem={this.state.updatedItem}
              handleCellChange={this.handleCellChange('number')}
            />
          </Table.Column>

          <Table.Column width={352}>
            <Table.HeaderCell>Объект</Table.HeaderCell>
            <EditableCell
              dataKey="object"
              editRowId={this.state.editRowId}
              updatedItem={this.state.updatedItem}
              handleCellChange={this.handleCellChange('object')}
            />
          </Table.Column>

          <Table.Column width={160}>
            <Table.HeaderCell>Дата изменения</Table.HeaderCell>
            <Table.Cell dataKey="dateUpdated" />
          </Table.Column>

          <Table.Column width={96}>
            <Table.HeaderCell>Действия</Table.HeaderCell>
            <EditCell
              onEditClick={this.handleOnEditClick}
              handleSave={this.handleSave}
              editRowId={this.state.editRowId}
            />
          </Table.Column>
        </Table>
      </Box>
    )
  }
}

;<EditableRowExample />
```

Данные с вложенностями:

```js
initialState = {
  expandedRowKeys: [],
}

const handleExpandedRowsChange = (expanded, rowData) => {
  setState({
    expandedRowKeys: expanded
      ? [...state.expandedRowKeys, rowData.id ]
      : state.expandedRowKeys.filter(id => id !== rowData.id)
  })
}

const dataList = [
  {
    id: 1,
    type: 'BIM-проект',
    number: '107/18',
    object: 'г. Москва, ААБ. Тестовый объект №107',
    status: 'Проектирование',
    dateUpdated: '05.02.2019',
    children: [
      {
        id: 2,
        type: 'BIM-проект',
        number: '107/19',
        object: 'г. Москва, ААБ. Тестовый объект №108',
        status: 'Проектирование',
        dateUpdated: '06.02.2019',
      },
      {
        id: 3,
        type: 'BIM-проект',
        number: '107/20',
        object: 'г. Москва, ААБ. Тестовый объект №109',
        status: 'Проектирование',
        dateUpdated: '07.02.2019',
      },
    ],
  },
  {
    id: 4,
    type: 'BIM-проект',
    number: '107/21',
    object: 'г. Москва, ААБ. Тестовый объект №110',
    status: 'Проектирование',
    dateUpdated: '08.02.2019',
  },
  {
    id: 5,
    type: 'BIM-проект',
    number: '107/22',
    object: 'г. Москва, ААБ. Тестовый объект №111',
    status: 'Проектирование',
    dateUpdated: '09.02.2019',
    children: [
      {
        id: 6,
        type: 'BIM-проект',
        number: '107/23',
        object: 'г. Москва, ААБ. Тестовый объект №112',
        status: 'Проектирование',
        dateUpdated: '10.02.2019',
      },
    ],
  },
]

;<Box width={800}>
  <Table
    data={dataList}
    height={350}
    isTree
    rowKey="id"
    renderTreeToggle={(icon, rowData) => {
      return state.expandedRowKeys.includes(rowData.id)
        ? <Icon name="minus-circle" onClick={icon.props.onClick} />
        : <Icon name="plus-circle" onClick={icon.props.onClick} />
    }}
    expandedRowKeys={state.expandedRowKeys}
    onExpandChange={handleExpandedRowsChange}
  >
    <Table.Column width={160}>
      <Table.HeaderCell style={{ paddingLeft: '16px' }}>Тип</Table.HeaderCell>
      <Table.Cell dataKey="type" />
    </Table.Column>

    <Table.Column width={128}>
      <Table.HeaderCell>Номер</Table.HeaderCell>
      <Table.Cell dataKey="number" />
    </Table.Column>

    <Table.Column width={352}>
      <Table.HeaderCell>Объект</Table.HeaderCell>
      <Table.Cell dataKey="object" />
    </Table.Column>

    <Table.Column width={160}>
      <Table.HeaderCell>Дата изменения</Table.HeaderCell>
      <Table.Cell dataKey="dateUpdated" />
    </Table.Column>
  </Table>
</Box>
```
