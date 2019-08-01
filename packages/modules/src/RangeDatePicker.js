import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {Flex, Button, Box, Icon} from '@design-system/components'
import moment from 'moment'
import 'moment/locale/ru'
import ru_RU from 'antd/lib/locale-provider/ru_RU'
import {DatePicker, LocaleProvider} from 'antd'
import styled from 'styled-components'

const {RangePicker} = DatePicker

const Wrapper = styled(Flex)`
  flex-direction: row;
.ant-input{
  padding: 0;
   background: #f5f5f5 !important;
}
  .ant-calendar-picker {
    width: ${props => props.width + 'px'};!important;
    height: ${props => props.height + 'px'};!important;
  }
    .ant-calendar-picker-icon {
    position: absolute;
    top:15px;
    left:${props => props.width - 20 + 'px'};!important;    
  }
  .ant-calendar-range-picker-separator{
    margin-top: 3px;
    margin-left: 3px;
  }
  .ant-calendar-picker-clear{
    position: relative;
    top:0px;
    left:3px;
    transform: scale(1.05);
  }
   input {
   padding-left:5px ;
    width: ${props => props.width / 2.48 + 'px'};!important;
  }
  input:hover:not(:focus) {
    cursor: pointer;
  }
  input:not(:focus) {
    background: #f5f5f5 !important;
  }
`

const IconCorrector = styled(Box)`
  margin-left: 2px;
`

moment.locale('ru')

function RangeDatePicker({
  onChange,
  id,
  value,
  dateFormat,
  width,
  height,
  placeholder,
  ...rest
}) {
  const datePickerRef = useRef(null)

  const handleChange = (dates, dateStrings) => {
    onChange && onChange(dates, dateStrings)
  }

  return (
    <Wrapper width={width} height={height}>
      <LocaleProvider locale={ru_RU}>
        <RangePicker
          ref={datePickerRef}
          // required props
          id={id} // momentPropTypes.momentObj or null
          onChange={handleChange} // PropTypes.func.isRequired
          format={dateFormat}
          placeholder={placeholder}
          separator={'-'}
          {...rest}
        />
      </LocaleProvider>
    </Wrapper>
  )
}
RangeDatePicker.propTypes = {
  id: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  dateFormat: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  placeholder: PropTypes.array
}

RangeDatePicker.defaultProps = {
  id: 'useSomeId',
  value: [],
  dateFormat: 'DD/MM/YYYY',
  width: 192,
  height: 40,
  placeholder: ['дд/мм/гггг', 'дд/мм/гггг']
}

RangeDatePicker.displayName = 'RangeDatePicker'

export default RangeDatePicker
