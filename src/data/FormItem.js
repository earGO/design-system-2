import React from 'react'
import Box from '../primitives/Box'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import pick from 'lodash/pick'
import { FIELD_META_PROP, FIELD_DATA_PROP } from './Form'
import { StyledCheckbox } from './Checkbox';

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
    & > ${Label}:before {
      display: inline-block;
      margin-right: 4px;
      content: '*';
      line-height: 1;
      font-size: 14px;
      color: #f5222d;
    }
  `

const withColon = props =>
  props.colon &&
  css`
    & > ${Label}:after {
      content: ':';
      margin: 0 8px 0 2px;
      position: relative;
      top: -0.5px;
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
    }
    ${StyledCheckbox} {
      border-color: ${props.theme.colors.error}
    }
  `

const FormItemWrapper = styled(Box)`
  margin-bottom: ${props => props.theme.space[3]}px;
`

const LabelWrapper = styled(Box)`
  display: inline-flex;
  ${withRequiredAsterisk}
  ${withColon}
`

const ControlWrapper = styled(Box)`
  display: inline-flex;
  flex-direction: column;
  ${hasError}
`

const Label = ({ label, labelProps, colon, id, required, onLabelClick }) => {
  let labelChildren = label
  // Keep label is original where there should have no colon
  const haveColon = colon
  // Remove duplicated user input colon
  if (haveColon && typeof label === 'string' && label.trim() !== '') {
    labelChildren = label.replace(/[：|:]\s*$/, '')
  }

  return label ? (
    <LabelWrapper key="label" required={required} colon={colon} {...labelProps}>
      <label htmlFor={id} title={typeof label === 'string' ? label : ''} onClick={onLabelClick}>
        {labelChildren}
      </label>
    </LabelWrapper>
  ) : null
}

const Help = ({ children }) => {
  return (
    <Box className="help" key="help" color="red">
      {children}
    </Box>
  )
}

// #TBD
// const Extra = ({ extra }) => <Box className="extra">{extra}</Box>

class FormItem extends React.Component {
  isRequired = () => {
    const { required } = this.props
    if (required !== undefined) {
      return required
    }
    if (this.getOnlyControl()) {
      const meta = this.getMeta() || {}
      const validate = meta.validate || []
      return validate
        .filter(item => !!item.rules)
        .some(item => {
          return item.rules.some(rule => rule.required)
        })
    }
    return false
  }

  getControls(children, recursively) {
    let controls = []
    const childrenArray = React.Children.toArray(children)
    for (let i = 0; i < childrenArray.length; i++) {
      if (!recursively && controls.length > 0) {
        break
      }

      const child = childrenArray[i]
      if (child.type && (child.type === FormItem || child.type.displayName === 'FormItem')) {
        continue
      }
      if (!child.props) {
        continue
      }
      if (FIELD_META_PROP in child.props) {
        // And means FIELD_DATA_PROP in child.props, too.
        controls.push(child)
      } else if (child.props.children) {
        controls = controls.concat(this.getControls(child.props.children, recursively))
      }
    }
    return controls
  }

  /** Возвращает ноду элемента, который собственно, вводит данные, например - <Input /> */
  getOnlyControl() {
    const child = this.getControls(this.props.children, false)[0]
    return child !== undefined ? child : null
  }

  getChildProp(prop) {
    const child = this.getOnlyControl()
    return child && child.props && child.props[prop]
  }

  getId() {
    return this.getChildProp('id')
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
  getMeta() {
    return this.getChildProp(FIELD_META_PROP)
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
  getField() {
    return this.getChildProp(FIELD_DATA_PROP)
  }

  getHelpMessage() {
    const { help } = this.props
    if (help === undefined && this.getOnlyControl()) {
      let field = this.getField()
      const errors = this.getField().errors
      if (errors) {
        return intersperseSpace(
          errors.map((e, index) => {
            let node = null
            if (React.isValidElement(e)) {
              node = e
            } else if (React.isValidElement(e.message)) {
              node = e.message
            }
            return node ? React.cloneElement(node, { key: index }) : e.message
          }),
        )
      }
      return ''
    }
    return help
  }

  render() {
    const { style, className, children } = this.props
    const help = this.getHelpMessage()
    return (
      <FormItemWrapper className={className} style={style} help={help}>
        <Label
          {...pick(this.props, ['label', 'labelProps', 'colon'])}
          id={this.props.id || this.getId()}
          required={this.isRequired()}
          onLabelClick={this.onLabelClick}
        />
        <ControlWrapper {...this.props.controlProps} help={help}>
          {children}
          {help && <Help>{help}</Help>}
          {/* {extra && <Extra {...pick(this.props, ['extra'])} />} */}
        </ControlWrapper>
      </FormItemWrapper>
    )
  }
}

FormItem.defaultProps = {
  colon: true,
}

FormItem.propTypes = {
  /** Стили обертки. */
  style: propTypes.object,
  /** css класс обертки, если необходимо. */
  className: propTypes.string,
  /** Содержимое лейбла */
  label: propTypes.oneOfType([propTypes.string, propTypes.element]),
  /** Пропсы для обертки лейбла */
  labelProps: propTypes.object,
  /** Пропсы для обертки элемента, в который вводят данные */
  controlProps: propTypes.object,
  /** Обязательность поля. */
  required: propTypes.bool,
  /** Автоматическое добавление : в лейбле. */
  colon: propTypes.bool,
}

/** @component */
export default FormItem
