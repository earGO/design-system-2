import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import {Table as RSTable, Column, HeaderCell, Cell} from 'rsuite-table'
import 'rsuite-table/lib/less/index.less'
import themeGet from '@styled-system/theme-get'

const StyledTable = styled(RSTable)`
  & .rs-table-cell-content {
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.fontSizes[1] + 'px'};
    padding-left: ${props => props.theme.space[3] + 'px'};
    /* Expand-collapse icon */
    & > span {
      padding: 0 4px;
    }
  }
  &.rs-table {
    border: none;
  }
  & .rs-table-cell-wrap {
    flex: 1;
  }
  &.rs-table-hover .rs-table-body-row-wrapper {
    .rs-table-row:hover {
      background: ${themeGet('colors.highlightss', '#fbfbfb')};
    }

    .rs-table-row:hover .rs-table-cell-group {
      background: ${themeGet('colors.highlightss', '#fbfbfb')};
    }

    .rs-table-row:hover .rs-table-cell {
      background: ${themeGet('colors.highlightss', '#fbfbfb')};
    }
  }
`

const StyledHeader = styled(HeaderCell)`
  background: ${themeGet('colors.lightGrey', '#f5f5f5')};
  /* font-size: ${props => props.theme.fontSizes[1]}; */
`

const CustomHeaderCell = props => <StyledHeader {...props} />

/** Используется для отображения структурированной информации.
 * Полный список пропсов:
 [https://github.com/rsuite/rsuite-table](https://github.com/rsuite/rsuite-table)

 В целях генерации документов, в сторибук отдельно импортируются компоненты `<Column/>`, `<HeaderCell/>` и `<Cell/>`.

 Однако в приложении-потребителе они будут "включены" в сам компонент `<Table/>`, и должны быть вызваны
 как `<Table.Column/>`, `<Table.HeaderCell/>` и `<Table.Cell/>`.

 Примеры тонких настроек, в том числе полностью кастомизируемой таблицы, с кодом:
 ```
 https://rsuitejs.com/en/components/table#Advanced
 ```

 Название компонента `<Cell></Cell>` из документации по ссылке нужно заменить на  `<Table.Cell></Table.Cell>` при переносе кода.

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

 Этот пример центрирует данные (параметр` rowData[dataKey]`) в ячейке шириной 160px.
 Внутри этого компонента с данными можно производить манипуляции, создавать кнопки -
 всё, что угодно. Обёртка в виде отдельного компонента нужна как раз чтобы получить
 доступ к данным ячейки (через её dataKey и массив данных всей строки таблицы `rowData`).


 В целом кастомизация таблицы осуществляется созданием компонента,
 производного от `<Table.Cell/>`, работающего с доступными ему данными,
 предоставляемыми таблицей.


 */
export function Table(props) {
  return <StyledTable {...props} />
}

Table.Column = Column
Table.HeaderCell = CustomHeaderCell
Table.Cell = Cell

Table.propTypes = {
  /** Данные для отображения в таблице. */
  data: propTypes.array.isRequired,
  /** Высота хедера таблицы */
  headerHeight: propTypes.number,
  /** Высота ряда */
  rowHeight: propTypes.number,
  /** Режим "дерева" - таблица с вложенными данными */
  isTree: propTypes.bool,
  /** В режиме дерева, функция-рендерер иконки "раскрыть-закрыть" ряд. Сигнатура: (icon: node, rowData: Object) => React.node */
  renderTreeToggle: propTypes.func,
  /** Указатель на поле ключ. Должно быть уникальным. */
  rowKey: propTypes.string,
  /** Виртуализация */
  virtualized: propTypes.bool,
  /** Ширина таблицы */
  width: propTypes.number,
  /** Высота таблицы */
  height: propTypes.number,
  /** Минимальная высота таблицы */
  minHeight: propTypes.number
}

Table.defaultProps = {
  headerHeight: 48,
  rowHeight: 48,
  rowKey: 'key',
  locale: {
    emptyMessage: 'Нет данных',
    loading: 'Загрузка...'
  }
}

export default Table
