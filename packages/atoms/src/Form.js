import React from 'react'
import FormItem from './FormItem'
import createDOMForm from 'rc-form/lib/createDOMForm'
import createFormField from 'rc-form/lib/createFormField'

export const FIELD_META_PROP = 'form-item-meta'
export const FIELD_DATA_PROP = 'form-item-data'

/** Форма на основе rc-form. */
export function Form(props) {
  return <form {...props} />
}

Form.create = options =>
  createDOMForm({
    fieldNameProp: 'id',
    ...options,
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP
  })

Form.createFormField = createFormField

Form.Item = FormItem

// FormWrapper.Item = FormItem

// export function Form(props){
//     return <FormWrapper{...props}/>
// }

/** @component */
export default Form
