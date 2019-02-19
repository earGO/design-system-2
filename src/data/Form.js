import React from 'react';
import FormItem from './FormItem'
import createDOMForm from 'rc-form/lib/createDOMForm';

export const FIELD_META_PROP = '__item-meta'
export const FIELD_DATA_PROP = '__item-data'

class Form extends React.Component {
  static createForm = () => createDOMForm({
    fieldNameProp: 'id',
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP,
  });

  render() {
    return (
      <form {...this.props} />
    );
  }
}

Form.Item = FormItem

/** @component */
export default Form
