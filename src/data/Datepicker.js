import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { space, width, themeGet } from 'styled-system'

import { DatePickerInput } from 'rc-datepicker'
import 'rc-datepicker/lib/style.css'

// const MyDatepicker = styled(DatePickerInput)`
//   input {
//     border-width: 1px;
//     border-style: solid;
//     border-color: ${props => props.theme.colors.border};
//     border-radius: ${props => props.theme.radii[1] + 'px'};
//     background: ${props => props.theme.colors.lightGrey};
//     &:hover {
//       border-color: ${themeGet('colors.black', '#3a3a3a')};
//     }
//     &:focus {
//       outline: none;
//       background: ${themeGet('colors.white', '#ffffff')};
//       border-color: ${themeGet('colors.lightBlue', '#0091ea')};
//     }
//   }
// `

const MyDatepicker = styled(DatePickerInput)`
  .react-datepicker-input {
    background: ${props => props.theme.colors.lightGrey} !important;
    border: 1px solid ${props => props.theme.colors.border} !important;
    border-radius: ${props => props.theme.radii[1] + 'px'} !important;

    &:hover {
      border-color: ${themeGet('colors.black', '#3a3a3a')} !important;
    }
    &:focus {
      outline: none !important;
      background: ${themeGet('colors.white', '#ffffff')} !important;
      border-color: ${themeGet('colors.lightBlue', '#0091ea')} !important;
    }

    input {
      font: ${props => props.theme.font} !important;
      font-size: $input-font-size;
      color: $input-color;
      font-weight: 400 !important;

      @include placeholder() {
        color: $input-placeholder-color;
        font-weight: 400 !important;
      }
    }

    .button-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;

      .input-button {
        margin: 0 10px;
        background: $input-button-background;
        font-size: $input-button-icon-size;
        border-radius: 0 $input-border-radius $input-border-radius 0;
        cursor: pointer;
        color: $input-button-icon-color;

        &:hover {
          background: $input-button-background-hover;
          color: $input-button-icon-color-hover;
        }
      }

      .clear-button {
        cursor: pointer;
        font-size: $input-clear-button-icon-size;
        color: $input-clear-button-color;

        &:hover {
          color: $input-clear-button-color-hover;
        }
      }
    }

    &:hover {
      background: $input-background-hover;
      border: 1px solid $input-border-color-hover;

      input {
        color: $input-color-hover;

        @include placeholder() {
          color: $input-placeholder-color-hover;
        }
      }

      .button-wrapper .input-button {
        color: $input-button-icon-color-hover;
      }
    }

    &.is-open {
      background: $input-background-open;
      border: 1px solid $input-border-color-open;

      input {
        color: $input-color-open;

        @include placeholder() {
          color: $input-color-open;
        }
      }

      .button-wrapper .input-button {
        color: $input-button-icon-color-open;
      }
    }

    &.has-value input {
      color: $input-color-has-value;
    }
  }
`

const onChange = (jsDate, dateString) => {}

/** Получение данных от пользователя.*/
class Datepicker extends Component {
  render() {
    return <MyDatepicker onChange={onChange} />
  }
}

/** @component */
export default Datepicker
