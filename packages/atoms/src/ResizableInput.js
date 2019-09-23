import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import propTypes from 'prop-types'
import {space} from 'styled-system'
import themeGet from '@styled-system/theme-get'
import Absolute from './Absolute'
import Relative from './Relative'
import omit from 'lodash/omit'

// #TBD: Input.TextArea + allowClear prop. Как будет работать c suffix?

const propsToOmit = [
  'suffix',
  'prefix',
  'width',
  'value',
  'wrapperStyle',
  'onChange'
]

const disabled = props =>
    props.disabled &&
    css`
    background: ${themeGet('colors.input.disabled', '#b5b5b5')};
    cursor: not-allowed;
  `

const size = ({size = 'medium', theme}) => {
  const sizes = {
    // Same as button heights, but with height, instead of paddings.
    small: {
      fontSize: theme.fontSizes[0],
      height: 32
    },
    medium: {
      fontSize: theme.fontSizes[1],
      height: 40
    },
    large: {
      fontSize: theme.fontSizes[2],
      height: 48
    }
  }
  return sizes[size]
}

const inline = ({inline}) => Boolean(inline) && {display: 'inline-block'}

const HTMLInput = styled.input`
  font-family: ${themeGet('font.main', "'PT Sans'")};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: ${props => props.theme.radii[1] + 'px'};
  transition: all ${props => props.theme.duration.fast};
  width:${props => props.shrinkWidth + 'px'};
  :hover {
    border-color: ${themeGet('colors.black', '#3a3a3a')}
  }
  :focus {
    outline: none;
    background: ${themeGet('colors.white', '#ffffff')};
    border-color: ${themeGet('colors.lightBlue', '#0091ea')};
    width:${props => props.growWidth + 'px'};
  }
  background: ${props => props.theme.colors.lightGrey};

  ${space}
  ${size}
  ${disabled}
  ${inline};
`

export const InputWrapper = styled(Relative)({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center'
})

const Adornment = styled(Absolute)({
  display: 'flex'
})

/** Получение данных от пользователя.*/

export function ResizableInput({
                                 value,
                                 defaultValue,
                                 prefix,
                                 suffix,
                                 width,
                                 wrapperStyle,
                                 shrinkWidth,
                                 growWidth,
                                 onChange,
                                 ...props
                               }) {
  const [inputValue, setInputValue] = useState(value || defaultValue)
  const [inputOnFocus, setInputOnFocus] = useState(false)
  const [suffixOnFocus, setSuffixOnFocus] = useState(false)

  const handleChange = event => {
    const newValue = event.target.value
    setInputValue(newValue)
    onChange && onChange(newValue, event)
  }

  const suffixOnClick = () => {
    typeof onChange === 'function' && onChange('')
    setSuffixOnFocus(false)
    setInputValue('')
  }

  const handleInputOnFocus = () => {
    setInputOnFocus(true)
  }

  const handleInputOnBlur = () => {
    if (suffixOnFocus) {
      suffixOnClick()
      setInputOnFocus(false)
    } else {
      setInputOnFocus(false)
    }
  }

  const handleSuffixOnFocus = () => {
    setSuffixOnFocus(true)
  }
  const handleSuffixOnBlur = () => {
    setSuffixOnFocus(false)
  }

  return (
      <InputWrapper width={width} style={wrapperStyle}>
        {prefix && (
            <Adornment left={0} pl={2}>
              {prefix}
            </Adornment>
        )}
        <HTMLInput
            {...omit(props, propsToOmit)}
            pl={prefix ? 4 : 3}
            pr={suffix ? 4 : 2}
            width="100%"
            /* Строчка снизу - в старой версии где class-based component висел этот проп с рефом,
            но он там не использовался.
            Оставил на всякий случай как маркер, что возможно он может понадобиться в будущем */
            // ref={this.saveRef}
            value={inputValue}
            onChange={handleChange}
            shrinkWidth={shrinkWidth}
            growWidth={growWidth}
            onFocus={handleInputOnFocus}
            onBlur={handleInputOnBlur}
        />
        {suffix && inputValue && inputOnFocus && (
            <Adornment
                style={{cursor: 'pointer'}}
                onMouseEnter={handleSuffixOnFocus}
                onMouseLeave={handleSuffixOnBlur}
                right={0}
                pr={2}
            >
              {suffix}
            </Adornment>
        )}
      </InputWrapper>
  )
}

ResizableInput.propTypes = {
  /** Ширина враппера для инпута.*/
  width: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.array
  ]),
  /** Иконка в начале инпута. */
  prefix: propTypes.element,
  /** Иконка в конце инпута. */
  suffix: propTypes.element,
  /** Размер инпута: */
  size: propTypes.oneOf(['small', 'medium', 'large']),
  /** Стили враппера */
  wrapperStyle: propTypes.object
}

ResizableInput.defaultProps = {
  size: 'medium'
}

ResizableInput.displayName = 'ResizableInput'

/** @component */
export default ResizableInput
