import React from 'react';

import {Form} from '../src/Form';
import Checkbox from "../src/Checkbox";
import Button from "../src/Button";
import Input from "../src/Input";
import Heading from "../src/Heading";
import Box from "../src/Box";
import Text from "../src/Text";

export default {
    title: 'Design System|Form',
    parameters: {
        component: Form,
    },
};

const createForm = Form.create
const FormItem = Form.Item

class ExampleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const { validateFields } = this.props.form
        validateFields((err, values) => {
            if (!err) {
                this.setState({
                    data: JSON.stringify(values),
                })
            } else {
                this.setState({
                    data: JSON.stringify(err),
                })
            }
        })
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form
        return (
            <Box width={1/3}>
                <Form >
                    <Heading>Registration form:</Heading>
                    <FormItem  inline label="Name">
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Заполните поле name' }],
                        })(<Input />)}
                    </FormItem>
                    {/* Хоть мы и не дали prop required в этот FormItem, из-за rule required:true, * все равно будет. */}
                    <FormItem inline label="Surname">
                        {getFieldDecorator('surname', {
                            rules: [{ required: true, message: 'Заполните поле surname' }],
                        })(<Input />)}
                    </FormItem>
                    {getFieldDecorator('withPhone', {
                        initialValue: false,
                    })(<Checkbox label={<Text fontSize={12}>With phone number?</Text>} />)}

                    {/* Начальное значение поля: */}
                    {getFieldValue('withPhone') && (
                        <FormItem label="Phone number" required>
                            {getFieldDecorator('phone', {
                                rules: [{
                                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                                    required: true,
                                }],
                                initialValue: 88005553535
                            })(<Input />)}
                        </FormItem>
                    )}
                    <FormItem label="I agree with terms and conditions">
                        {getFieldDecorator('agreement', {
                            rules: [{
                                required: true,
                                message: 'Согласись!',
                                type: 'enum',
                                enum: ['true'],
                                transform: value => String(value),
                            }],
                        })(<Checkbox />)}
                    </FormItem>
                    <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                </Form>
                {this.state.data && <Text>Данные из сабмита: {this.state.data}</Text>}
            </Box>
        )
    }
}

const WrappedForm = createForm()(ExampleForm)

export const basic = () => (<WrappedForm />);

basic.story = {
    parameters: {
        info: {
            text: `
          Конструктор форм с функционалом проверки полей, декораторами полей и прочим функционалом. Полный код формы выше:
          
          ~~~js
          const createForm = Form.create
            const FormItem = Form.Item
            
            class ExampleForm extends React.Component {
              constructor(props) {
                super(props)
                this.state = {
                  data: '',
                }
              }
            
              handleSubmit(event) {
                event.preventDefault()
                const { validateFields } = this.props.form
                validateFields((err, values) => {
                  if (!err) {
                    this.setState({
                      data: JSON.stringify(values),
                    })
                  } else {
                    this.setState({
                      data: JSON.stringify(err),
                    })
                  }
                })
              }
            
              render() {
                const { getFieldDecorator, getFieldValue } = this.props.form
                return (
                  <Box width={1/3}>
                    <Form >
                      <Heading>Registration form:</Heading>
                      <FormItem  inline label="Name">
                        {getFieldDecorator('name', {
                          rules: [{ required: true, message: 'Заполните поле name' }],
                        })(<Input />)}
                      </FormItem>
                      {/* Хоть мы и не дали prop required в этот FormItem, из-за rule required:true, * все равно будет. */}
                      <FormItem inline label="Surname">
                        {getFieldDecorator('surname', {
                          rules: [{ required: true, message: 'Заполните поле surname' }],
                        })(<Input />)}
                      </FormItem>
                      {getFieldDecorator('withPhone', {
                          initialValue: false,
                        })(<Checkbox label={<Text fontSize={12}>With phone number?</Text>} />)}
            
                      {/* Начальное значение поля: */}
                      {getFieldValue('withPhone') && (
                        <FormItem label="Phone number" required>
                          {getFieldDecorator('phone', {
                            rules: [{
                              pattern: /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im,
                              required: true,
                            }],
                            initialValue: 88005553535
                          })(<Input />)}
                        </FormItem>
                      )}
                      <FormItem label="I agree with terms and conditions">
                        {getFieldDecorator('agreement', {
                          rules: [{
                              required: true,
                              message: 'Согласись!',
                              type: 'enum',
                              enum: ['true'],
                              transform: value => String(value),
                            }],
                        })(<Checkbox />)}
                      </FormItem>
                      <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
                    </Form>
                    {this.state.data && <Text>Данные из сабмита: {this.state.data}</Text>}
                  </Box>
                )
              }
            }
            
            const WrappedForm = createForm()(ExampleForm)
            ;<WrappedForm />
          ~~~
        `
        },
    },
};

