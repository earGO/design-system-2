import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import propTypes from 'prop-types'
import Relative from './Relative'
import Absolute from './Absolute'
import {space, width} from 'styled-system'
import themeGet from '@styled-system/theme-get'
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
  border-color: ${props => props.border || props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.radii[1] + 'px'};
  padding-top: ${props => props.paddingTop + 'px'};
  transition: all ${props => props.theme.duration.fast};
  /* НИЖЕ УКАЗЫВАЕМ ШИРИНУ ЕСЛИ ИНПУТ RESIZABLE */
  width: ${props => (props.resizable ? props.shrinkWidth + 'px' : props.width)};
  :hover {
    border-color: ${themeGet('colors.primary', '#3a3a3a')}
  } 
  :focus {
    outline: none;
    background: ${themeGet('colors.white', '#ffffff')};
    border-color: ${themeGet('colors.lightBlue', '#0091ea')};
    /* НИЖЕ УКАЗЫВАЕМ ШИРИНУ ЕСЛИ ИНПУТ RESIZABLE */
    width: ${props => (props.resizable ? props.growWidth + 'px' : props.width)};
  }
  background: ${props => props.theme.colors.lightGrey};

	
  /* ${width} */
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

/** Получение данных от пользователя. */

export function Input({
                        value,
                        defaultValue,
                        prefix,
                        suffix,
                        width,
                        wrapperStyle,
                        resizable,
                        shrinkWidth,
                        growWidth,
                        onChange,
                        type,
                        ...props
                      }) {
  const [inputValue, setInputValue] = useState(value || defaultValue)
  const [inputOnFocus, setInputOnFocus] = useState(false)
  const [suffixOnFocus, setSuffixOnFocus] = useState(false)

  const handleChange = event => {
    const newValue = event.target.value
    setInputValue(newValue)
    typeof onChange === 'function' && onChange(newValue, event)
  }

  //#region handlers for Resizable Input
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
  //#endregion handlers for Resizable Input

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
            // width="100%"
            value={inputValue}
            resizable={resizable}
            onChange={handleChange}
            type={type || 'text'}
            //#region attributes for Resizable Input
            shrinkWidth={shrinkWidth}
            growWidth={growWidth}
            //#endregion attributes for Resizable Input
            onFocus={handleInputOnFocus}
            onBlur={handleInputOnBlur}
        />
        {suffix && inputValue && inputOnFocus && (
            <Adornment
                right={0}
                pr={2}
                style={{cursor: 'pointer'}}
                //#region attributes for Resizable Input
                onMouseEnter={handleSuffixOnFocus}
                onMouseLeave={handleSuffixOnBlur}
                //#endregion attributes for Resizable Input
            >
              {suffix}
            </Adornment>
        )}
      </InputWrapper>
  )
}

Input.propTypes = {
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

Input.defaultProps = {
  size: 'medium',
  border:'lightGrey'
}

Input.displayName = 'Input'

/** @component */
export default Input
