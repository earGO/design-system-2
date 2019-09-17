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

;
  <Table data={dataList} height={400}>
    <Table.Column width={160} sort fixed>
      <Table.HeaderCell style={{ paddingLeft: '16px' }}>Тип</Table.HeaderCell>
      <Table.Cell dataKey="type" />
    </Table.Column>

    <Table.Column resizable width={128} sort>
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
        ? <Icon name="chevron-up" onClick={icon.props.onClick} />
        : <Icon name="chevron-down" onClick={icon.props.onClick} />
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

Примеры тонких настроек, в том числе полностью кастомизируемой таблицы, с кодом:
```
https://rsuitejs.com/en/components/table#Advanced
```
Название компонента <Cell></Cell> из документации по ссылке нужно заменить на  <Table.Cell></Table.Cell> при переносе кода. 

Для центрирования содержимого ячейки можно создать производный от неё компонент, возвращающий данные, обёрнутые во Flex. Верхнему контейнеру Flex нужно вручную задать ширину:

```js
const CenteredCell = ({rowData, dataKey, ...props}) => (
	<Table.Cell {...props} style={{padding: 0}}>
		<Flex justifyContent={'center'} width={160}>
			<Box>{rowData[dataKey]}</Box>
		</Flex>
	</Table.Cell>
);
```
Этот пример центрирует данные (параметр rowData[dataKey]) в ячейке шириной 160px. Внутри этого компонента с данными можно производить манипуляции, создавать кнопки - всё, что угодно. Обёртка в виде отдельного компонента нужна как раз чтобы получить доступ к данным ячейки (через её dataKey и массив данных всей строки таблицы rowData).


В целом кастомизация таблицы осуществляется созданием компонента, производного от <Table.Cell/>, работающего с доступными ему данными, предоставляемыми таблицей. Например, если нужно в одном из столбцов поместить кнопку с действиями, относящимися к данным из ряда, где находится ячейка, можно создать такой класс:

```js
/*  Компонент для отображения кнопки-действия */
const ActionButton = styled(Button)`
	position: relative;
	top: 3px;
	transition: all 0.15s ease-in-out;
	&:hover {
		transform: scale(1.15);
	}
`

/* контейнер для отображения кнопки в обычном состоянии */
const UnActionIcon = styled(Box)`
	display: block;
	${ActionButton}:hover & {
		display: none;
	}
`
/* кмопонент для отображения кнопки при наведении мышки */
const ActionIcon = styled(Box)`
	display: none;
	${ActionButton}:hover & {
		display: block;
	}
`

const ActionCell = ({rowData, dataKey, ...props}) => {
	function handleAction() {
		console.log(rowData[dataKey])
		console.log(theme.colors.blue)
	}
	return (
		<Table.Cell {...props} style={{padding: 0}}>
			<Flex justifyContent={'center'} width={96}> /* выравнивание контента */
				<ActionButton type={`flat`}> /* контейнер для кнопки, отображаемый по умолчанию */
					<UnActionIcon>
						<Icon name={'more_horiz'} onClick={handleAction} />
					</UnActionIcon>
					<ActionIcon> /* контейнер для кнопки, отображаемый при наведении мышки */
						<Icon
							name={'more_horiz'}
							onClick={handleAction}
							color={'primary'}
						/>
					</ActionIcon>
				</ActionButton>
			</Flex>
		</Table.Cell>
	)
}

``` 