import React from 'react'
import FormItem from './FormItemOld'
import createDOMForm from 'rc-form/lib/createDOMForm'
import createFormField from 'rc-form/lib/createFormField'

export const FIELD_META_PROP = 'form-item-meta'
export const FIELD_DATA_PROP = 'form-item-data'

export class Form extends React.Component {
  static create = options =>
    createDOMForm({
      fieldNameProp: 'id',
      ...options,
      fieldMetaProp: FIELD_META_PROP,
      fieldDataProp: FIELD_DATA_PROP
    })

  static createFormField = createFormField
  static Item = FormItem

  render() {
    return <form {...this.props} />
  }
}

// FormWrapper.Item = FormItem

// export function Form(props){
//     return <FormWrapper{...props}/>
// }

/** @component */
export default Form
