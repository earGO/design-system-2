import React from 'react'
import {Box, Table, Icon, Flex} from '@design-system/atoms'
import DropdownMenu from './DropdownMenu'
import styled from 'styled-components'

const ActionHover = styled(Box)`
  transition: all;
  transition-duration: ${props => props.theme.duration.fast};
  transition-timing-function: ${props => props.theme.timingFunctions.easeInOut};
  cursor: pointer;
  i {
    color: black;
  }
  :hover {
    i {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const ActionCell = ({rowData, dataKey, content, ...props}) => {
  return (
    <Table.Cell {...props} style={{padding: 0}}>
      <Flex justifyContent={'center'} width={96}>
        <ActionHover>
          <DropdownMenu content={content} shiftLeft={-80}>
            <Icon name={'more_horiz'} />
          </DropdownMenu>
        </ActionHover>
      </Flex>
    </Table.Cell>
  )
}

ActionCell.displayName = 'ActionCell'

/** @component */
export default ActionCell
