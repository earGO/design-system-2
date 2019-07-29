import React from 'react'
import {storiesOf} from '@storybook/react'
import theme, {ThemeProvider} from '@design-system/theme'

import Table from '../src/Table'

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
        <ThemeProvider theme={theme}>
          <Table data={dataList} height={400}>
            <Table.Column width={160} sort fixed>
              <Table.HeaderCell style={{paddingLeft: '16px'}}>
                Тип
              </Table.HeaderCell>
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
        </ThemeProvider>
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
