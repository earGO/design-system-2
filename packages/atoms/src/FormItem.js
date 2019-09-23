import React from 'react'
import propTypes from 'prop-types'
import styled, {css} from 'styled-components'
import pick from 'lodash/pick'
import {FIELD_META_PROP, FIELD_DATA_PROP} from './Form'
import {StyledCheckbox} from './Checkbox'
import Flex from './Box'
import Box from './Box'

/*Общий комментарий:
  Большая часть кода взята из antd Form и Form.Item
  В основном все изменения:
  1) Замена родных дом элементов на styled компоненты + примитивы
  2) CSS => CSS-in-JS.

  Магия тут остается, но я постарался разобраться и откомментить непрозрачные моменты.
*/

function intersperseSpace(list) {
  return list.reduce((current, item) => [...current, ' ', item], []).slice(1)
}

const withRequiredAsterisk = props =>
  props.required &&
  css`
    & > ${Label}:after {
      content: ' *';
      display: inline-block;
      margin-right: ${props.theme.space[1]}px;
      margin-left: ${props.theme.space[1]}px;
      line-height: 1;
      color: ${props.theme.colors.error};
      font-size: ${props.theme.fontSizes[2]}px;
    }
  `

const hasError = props =>
  props.help &&
  css`
    margin-bottom: ${props.theme.space[2]}px;
    /* Подход если честно так себе, но я без понятия как сделать лучше
      #TODO: добавить border: error к остальным типам элементов? Как?
    */
    & input {
      border-color: ${props.theme.colors.error};
      /* Dunno, I just fly the drone™ */
      background: ${props.theme.colors.white};
    }
    ${StyledCheckbox} {
      border-color: ${props.theme.colors.error};
    }
  `

const LabelWrapper = styled(Box)`
  width: ${props => (props.inline ? '20%' : '100%')};
  & > label {
    font-size: ${props => props.theme.fontSizes[1]}px;
  }
  ${withRequiredAsterisk}
`

const ControlWrapper = styled(Box)`
  margin-top: ${props => props.theme.space[2]}px;
  ${hasError}
`

const HelpWrapper = styled(Box)`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes[1]};
`

const Label = ({label, labelProps, id, required, onLabelClick}) => {
  return (
    Boolean(label) && (
      <LabelWrapper key="label" required={required} {...labelProps}>
        <label
          htmlFor={id}
          title={typeof label === 'string' ? label : ''}
          onClick={onLabelClick}
        >
          {label}
        </label>
      </LabelWrapper>
    )
  )
}

const Help = ({children}) => {
  return (
    <HelpWrapper className="help" key="help" color="red">
      {children}
    </HelpWrapper>
  )
}

export function FormItem(props) {
  const isRequired = () => {
    const {required} = props
    if (required !== undefined) {
      return required
    }
    if (getOnlyControl()) {
      const meta = getMeta() || {}
      const validate = meta.validate || []
      return validate
        .filter(item => !!item.rules)
        .some(item => {
          return item.rules.some(rule => rule.required)
        })
    }
    return false
  }

  const getControls = (children, recursively) => {
    let controls = []
    const childrenArray = React.Children.toArray(children)
    for (let i = 0; i < childrenArray.length; i++) {
      if (!recursively && controls.length > 0) {
        break
      }

      const child = childrenArray[i]
      if (
        child.type &&
        (child.type === FormItem || child.type.displayName === 'FormItem')
      ) {
        continue
      }
      if (!child.props) {
        continue
      }
      if (FIELD_META_PROP in child.props) {
        // And means FIELD_DATA_PROP in child.props, too.
        controls.push(child)
      } else if (child.props.children) {
        controls = controls.concat(
          this.getControls(child.props.children, recursively)
        )
      }
    }
    return controls
  }

  /** Возвращает ноду элемента, который вводит данные, например - <Input /> */
  const getOnlyControl = () => {
    const child = getControls(props.children, false)[0]
    return child !== undefined ? child : null
  }

  const getChildProp = prop => {
    const child = getOnlyControl()
    return child && child.props && child.props[prop]
  }

  const getId = () => {
    return getChildProp('id')
  }

  /**
 * Забирает мета-данные из пропсов контрол элемента, заинженченных rc-form.
 * returns: {
 * initialValue,
    name,
    originalProps,
    ref,
    rules,
    trigger,
    validate,
    valuePropName,
 * }
 */
  const getMeta = () => {
    return getChildProp(FIELD_META_PROP)
  }

  /**
 * Забирает данные из пропсов контрол элемента, заинженченных rc-form.
 * returns {
 * dirty: Boolean,
    errors: Array.of(
      {
        message, field
      }
    ),
    name: String,
    validating: Boolean,
    value: String|Number|Boolean ?
 * }
 */
  const getField = () => {
    return getChildProp(FIELD_DATA_PROP)
  }

  const getHelpMessage = () => {
    const {help} = props
    if (help === undefined && getOnlyControl()) {
      const errors = getField().errors
      if (errors) {
        return intersperseSpace(
          errors.map((e, index) => {
            let node = null
            if (React.isValidElement(e)) {
              node = e
            } else if (React.isValidElement(e.message)) {
              node = e.message
            }
            return node ? React.cloneElement(node, {key: index}) : e.message
          })
        )
      }
      return ''
    }
    return help
  }

  const {style, children, ...restProps} = props
  const help = getHelpMessage()

  return (
    <Flex style={style} help={help} {...restProps}>
      <Label
        {...pick(props, ['label', 'labelProps'])}
        id={props.id || getId()}
        required={isRequired()}
        onLabelClick={props.onLabelClick}
      />
      <ControlWrapper {...restProps.controlProps} help={help}>
        {children}
        {help && <Help>{help}</Help>}
      </ControlWrapper>
    </Flex>
  )
}

FormItem.defaultProps = {}

FormItem.propTypes = {
  /** Стили обертки. */
  style: propTypes.object,
  /** Содержимое лейбла */
  label: propTypes.oneOfType([propTypes.string, propTypes.element]),
  /** Пропсы для обертки лейбла */
  labelProps: propTypes.object,
  /** Пропсы для обертки элемента, в который вводят данные */
  controlProps: propTypes.object,
  /** Обязательность поля. */
  required: propTypes.bool,
  /** Однострочное поле. */
  inline: propTypes.bool
}

/** @component */
export default FormItem
