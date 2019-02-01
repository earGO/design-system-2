Используется для сборки, обработки и отправления данных, полученных от пользователя.

`<Form />` используется совместо со своим дочерним компонентом `<Form.Item />`

Пример формы:

```js
const createForm = Form.createForm
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
      <React.Fragment>
        <Form>
          <Heading>Registration form:</Heading>
          <FormItem label="Name" labelProps={{ width: 0.175 }}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Заполните поле name' }],
            })(<Input />)}
          </FormItem>
          {/* Хоть мы и не дали prop required в этот FormItem, из-за rule required:true, * все равно будет. */}
          <FormItem label="Surname" labelProps={{ width: 0.175 }}>
            {getFieldDecorator('surname', {
              rules: [{ required: true, message: 'Заполните поле surname' }],
            })(<Input />)}
          </FormItem>
          {/* Без : в label */}
          <FormItem label="With phone number?" colon={false} labelProps={{ width: 0.175 }}>
            {getFieldDecorator('withPhone', {
              initialValue: false,
            })(<Checkbox />)}
          </FormItem>
          {/* Начальное значение поля: */}
          {getFieldValue('withPhone') && (
            <FormItem label="Phone number" labelProps={{ width: 0.175 }} required>
              {getFieldDecorator('phone', {
                rules: [{
                  pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  required: true,
                  initialValue: 88005553535
                }],
              })(<Input />)}
            </FormItem>
          )}
          <FormItem label="I agree with terms and conditions" colon={false} labelProps={{ width: 0.3 }}>
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
      </React.Fragment>
    )
  }
}

const WrappedForm = createForm()(ExampleForm)
;<WrappedForm />
```
