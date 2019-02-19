Используется для сборки, обработки и отправления данных, полученных от пользователя.

`<Form />` используется совместно со своим дочерним компонентом `<Form.Item />`

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
      <Box width={1/3}>
        <Form >
          <Heading>Registration form:</Heading>
          <FormItem label="Name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Заполните поле name' }],
            })(<Input />)}
          </FormItem>
          {/* Хоть мы и не дали prop required в этот FormItem, из-за rule required:true, * все равно будет. */}
          <FormItem label="Surname">
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
;<WrappedForm />
```
