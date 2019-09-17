import React, {useState} from 'react'
import {storiesOf} from '@storybook/react'
import Table from '../src/Table'
import Flex from '../src/Flex'
import Button from '../src/Button'

const tableData = [
  {
    objectNumber: 1,
    objectName: 'test1',
    objectValue: '1,000,000 $'
  },
  {
    objectNumber: 2,
    objectName: 'test2',
    objectValue: '1,500,000 $'
  },
  {
    objectNumber: 3,
    objectName: 'test3',
    objectValue: '1,250,000 $'
  },
  {
    objectNumber: 4,
    objectName: 'test5',
    objectValue: '1,150,000 $'
  }
]

const Expandable = () => {
  const [tableExpanded, setTableExpanded] = useState(false)

  let tableHeight = 144
  {
    tableExpanded ? (tableHeight = 288) : (tableHeight = 144)
  }
  const handleClick = () => {
    setTableExpanded(!tableExpanded)
  }

  return (
    <Flex flexDirection={'column'}>
      <Table
        virtualized
        bordered
        data={tableData}
        disabledScroll={tableExpanded}
        height={tableHeight}
        sortType={'asc'}
      >
        <Table.Column width={80}>
          <Table.HeaderCell>Number</Table.HeaderCell>
          <Table.Cell dataKey="objectNumber" />
        </Table.Column>
        <Table.Column width={150}>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.Cell dataKey="objectName" />
        </Table.Column>
        <Table.Column width={150}>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.Cell dataKey="objectValue" />
        </Table.Column>
      </Table>
      <Button onClick={handleClick} s>
        ExpandTable
      </Button>
    </Flex>
  )
}

storiesOf(`Table`, module)
  .addParameters({
    info: {
      inline: true,
      header: false,
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      }
    }
  })
  .add(
    'Default',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Table
          virtualized
          bordered
          data={tableData}
          height={150}
          sortType={'asc'}
        >
          <Table.Column width={80}>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.Cell dataKey="objectNumber" />
          </Table.Column>
          <Table.Column width={150}>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.Cell dataKey="objectName" />
          </Table.Column>
          <Table.Column width={150}>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.Cell dataKey="objectValue" />
          </Table.Column>
        </Table>
      </ThemeProvider>
    ),
    {
      info: {
        text: `
          По умолчанию таблица выводится с полосой прокрутки если данных больше, чем её размер. 
        `
      }
    }
  )
  .add(
    'Expandable',
    () => (
      <ThemeProvider theme={theme}>
        {' '}
        <Expandable />
      </ThemeProvider>
    ),
    {
      info: {
        text: `
                    По умолчанию без параметров иконка выводится в виде знака вопроса. 
        `
      }
    }
  )
