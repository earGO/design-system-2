import React, {useState} from 'react'
import styled from 'styled-components'
import {Table} from '../src/Table'
import Components from '../src/Table'
import {Box, Icon, Input, Flex, Button} from '../src'

const {Column, HeaderCell, Cell} = Components

const dataList = [
  {
    id: 1,
    type: 'BIM-проект',
    number: '107/18',
    object: 'г. Москва, ААБ. Тестовый объект №107',
    status: 'Проектирование',
    dateUpdated: '05.02.2019'
  },
  {
    id: 2,
    type: 'BIM-проект',
    number: '107/19',
    object: 'г. Москва, ААБ. Тестовый объект №108',
    status: 'Проектирование',
    dateUpdated: '06.02.2019'
  },
  {
    id: 3,
    type: 'BIM-проект',
    number: '107/20',
    object: 'г. Москва, ААБ. Тестовый объект №109',
    status: 'Проектирование',
    dateUpdated: '07.02.2019'
  },
  {
    id: 4,
    type: 'BIM-проект',
    number: '107/21',
    object: 'г. Москва, ААБ. Тестовый объект №110',
    status: 'Проектирование',
    dateUpdated: '08.02.2019'
  },
  {
    id: 5,
    type: 'BIM-проект',
    number: '107/22',
    object: 'г. Москва, ААБ. Тестовый объект №111',
    status: 'Проектирование',
    dateUpdated: '09.02.2019'
  },
  {
    id: 6,
    type: 'BIM-проект',
    number: '107/23',
    object: 'г. Москва, ААБ. Тестовый объект №112',
    status: 'Проектирование',
    dateUpdated: '10.02.2019'
  }
]

export default {
  title: 'Design System|Table',
  parameters: {
    component: Table
  }
}

export const basic = () => (
  <Table data={dataList} height={400}>
    <Column width={160} sort fixed>
      <HeaderCell style={{paddingLeft: '16px'}}>Тип</HeaderCell>
      <Cell dataKey="type" />
    </Column>

    <Column resizable width={128} sort>
      <HeaderCell>Номер</HeaderCell>
      <Cell dataKey="number" />
    </Column>

    <Column width={352} sort>
      <HeaderCell>Объект</HeaderCell>
      <Cell dataKey="object" />
    </Column>

    <Column width={192}>
      <HeaderCell>Статус</HeaderCell>
      <Cell dataKey="status" />
    </Column>

    <Column width={160}>
      <HeaderCell>Дата изменения</HeaderCell>
      <Cell dataKey="dateUpdated" />
    </Column>
  </Table>
)
basic.story = {
  parameters: {
    info: {
      text: `
          Таблица позволяет "сопоставлятЬ" столбцы соответствующим полям каждого объекта в массиве. 
           Например, в базовом случае мы передали в таблицу массив, состоящий из объектов
            ~~~ 
            {
              id: 1,
               type: 'BIM-проект',
               number: '107/18',
              object: 'г. Москва, ААБ. Тестовый объект №107',
               status: 'Проектирование',
                dateUpdated: '05.02.2019'
             } 
             ~~~
             
             Каждый столбец таблицы "вынимает" из каждого объекта в массиве указанное в пропсе компонента **<Cell/>**  поле и отображает его.
        `
    }
  }
}

export const customizable = () => {
  const EditableCell = props => {
    const {rowData, dataKey, editRowId, handleCellChange, updatedItem} = props
    return (
      <Cell {...props}>
        {editRowId === rowData.id ? (
          <Input
            size="small"
            value={updatedItem[dataKey]}
            onChange={handleCellChange}
          />
        ) : (
          rowData[dataKey]
        )}
      </Cell>
    )
  }

  const EditCell = props => {
    const {onEditClick, handleSave, rowData, editRowId} = props
    return (
      <Cell {...props}>
        {editRowId === rowData.id ? (
          <Icon name="save" onClick={() => handleSave(rowData.id)} />
        ) : (
          <Icon name="edit" onClick={() => onEditClick(rowData.id)} />
        )}
      </Cell>
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
            dateUpdated: '05.02.2019'
          },
          {
            id: 2,
            type: 'BIM-проект №2',
            number: '107/19',
            object: 'г. Москва, ААБ. Тестовый объект №108',
            status: 'Проектирование',
            dateUpdated: '06.02.2019'
          },
          {
            id: 3,
            type: 'BIM-проект №3',
            number: '107/20',
            object: 'г. Москва, ААБ. Тестовый объект №109',
            status: 'Проектирование',
            dateUpdated: '07.02.2019'
          },
          {
            id: 4,
            type: 'BIM-проект №4',
            number: '107/21',
            object: 'г. Москва, ААБ. Тестовый объект №110',
            status: 'Проектирование',
            dateUpdated: '08.02.2019'
          },
          {
            id: 5,
            type: 'BIM-проект №5',
            number: '107/22',
            object: 'г. Москва, ААБ. Тестовый объект №111',
            status: 'Проектирование',
            dateUpdated: '09.02.2019'
          },
          {
            id: 6,
            type: 'BIM-проект №6',
            number: '107/23',
            object: 'г. Москва, ААБ. Тестовый объект №112',
            status: 'Проектирование',
            dateUpdated: '10.02.2019'
          }
        ]
      }
      this.handleOnEditClick = this.handleOnEditClick.bind(this)
      this.handleCellChange = this.handleCellChange.bind(this)
      this.handleSave = this.handleSave.bind(this)
    }

    handleOnEditClick(rowId) {
      const initialValues = this.state.data.find(item => item.id === rowId)
      this.setState({
        editRowId: rowId,
        updatedItem: initialValues
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
            [dataKey]: value
          }
        })
      }
      return handleWithDataKey.bind(this)
    }

    handleSave() {
      const {updatedItem, data} = this.state
      console.log('Data to save:', this.state.updatedItem)
      this.setState({
        editRowId: null,
        updatedItem: {},
        data: data.map(proj =>
          proj.id === updatedItem.id ? updatedItem : proj
        )
      })
    }

    render() {
      return (
        <Box width={900}>
          <Table data={this.state.data} height={350}>
            <Column width={160}>
              <HeaderCell style={{paddingLeft: '16px'}}>Тип</HeaderCell>
              <EditableCell
                dataKey="type"
                editRowId={this.state.editRowId}
                updatedItem={this.state.updatedItem}
                handleCellChange={this.handleCellChange('type')}
              />
            </Column>

            <Column width={128}>
              <HeaderCell>Номер</HeaderCell>
              <EditableCell
                dataKey="number"
                editRowId={this.state.editRowId}
                updatedItem={this.state.updatedItem}
                handleCellChange={this.handleCellChange('number')}
              />
            </Column>

            <Column width={352}>
              <HeaderCell>Объект</HeaderCell>
              <EditableCell
                dataKey="object"
                editRowId={this.state.editRowId}
                updatedItem={this.state.updatedItem}
                handleCellChange={this.handleCellChange('object')}
              />
            </Column>

            <Column width={160}>
              <HeaderCell>Дата изменения</HeaderCell>
              <Cell dataKey="dateUpdated" />
            </Column>

            <Column width={96}>
              <HeaderCell>Действия</HeaderCell>
              <EditCell
                onEditClick={this.handleOnEditClick}
                handleSave={this.handleSave}
                editRowId={this.state.editRowId}
              />
            </Column>
          </Table>
        </Box>
      )
    }
  }

  return <EditableRowExample />
}

customizable.story = {
  parameters: {
    info: {
      text: `
          "Рецепт" таблицы с возможностью построчного редактирования
        `
    }
  }
}

export const nested = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([])

  const handleExpandedRowsChange = (expanded, rowData) => {
    expanded
      ? setExpandedRowKeys([...expandedRowKeys, rowData.id])
      : setExpandedRowKeys(expandedRowKeys.filter(id => id !== rowData.id))
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
          dateUpdated: '06.02.2019'
        },
        {
          id: 3,
          type: 'BIM-проект',
          number: '107/20',
          object: 'г. Москва, ААБ. Тестовый объект №109',
          status: 'Проектирование',
          dateUpdated: '07.02.2019'
        }
      ]
    },
    {
      id: 4,
      type: 'BIM-проект',
      number: '107/21',
      object: 'г. Москва, ААБ. Тестовый объект №110',
      status: 'Проектирование',
      dateUpdated: '08.02.2019'
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
          dateUpdated: '10.02.2019'
        }
      ]
    }
  ]

  return (
    <Box width={800}>
      <Table
        data={dataList}
        height={350}
        isTree
        rowKey="id"
        renderTreeToggle={(icon, rowData) => {
          return expandedRowKeys.includes(rowData.id) ? (
            <Icon name="keyboard_arrow_up" onClick={icon.props.onClick} />
          ) : (
            <Icon name="keyboard_arrow_down" onClick={icon.props.onClick} />
          )
        }}
        expandedRowKeys={expandedRowKeys}
        onExpandChange={handleExpandedRowsChange}
      >
        <Table.Column width={160}>
          <Table.HeaderCell style={{paddingLeft: '16px'}}>Тип</Table.HeaderCell>
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
  )
}

nested.story = {
  parameters: {
    info: {
      text: `
         Данные с вложенностями
        `
    }
  }
}
