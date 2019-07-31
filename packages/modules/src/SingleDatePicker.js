import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Box} from '@design-system/components'
import moment from 'moment'
import 'moment/locale/ru'
import ru_RU from 'antd/lib/locale-provider/ru_RU'
import {DatePicker, LocaleProvider} from 'antd'

import styled from 'styled-components'

const Wrapper = styled(Box)`
  input:hover:not(:focus) {
    border: 1px solid #3a3a3a !important;
    background: #ffffff !important;
  }
  input:not(:focus) {
    background: #f5f5f5 !important;
  }
`

moment.locale('ru')

function SingleDatePicker({onChange, id, value, dateFormat, ...rest}) {
  const [localValue, setLocalValue] = useState(moment('2015/01/01', dateFormat))

  const handleChange = newDate => {
    setLocalValue(newDate)
    onChange && onChange(newDate)
  }

  return (
    <Wrapper>
      <LocaleProvider locale={ru_RU}>
        <DatePicker
          block // 100% ширины
          // required props
          id={id}
          value={localValue} // momentPropTypes.momentObj or null
          onChange={handleChange} // PropTypes.func.isRequired
          format={dateFormat}
          {...rest}
        />
      </LocaleProvider>
    </Wrapper>
  )
}
SingleDatePicker.propTypes = {
  id: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string
}

SingleDatePicker.defaultProps = {
  id: 'useSomeId',
  value: [],
  onChange: () => {},
  dateFormat: 'DD/MM/YYYY'
}

SingleDatePicker.displayName = 'SingleDatePicker'

export default SingleDatePicker
