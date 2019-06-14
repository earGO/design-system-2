import theme from '../theme'
import Text from './Text'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = {
  color: 'text',
  regular: true,
  fontSize: 4,
  m: 0,
  theme: theme,
}

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = {
  color: 'text',
  bold: true,
  fontSize: 6,
  m: 0,
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  color: 'text',
  bold: true,
  fontSize: 5,
  m: 0,
}

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  color: 'text',
  regular: true,
  fontSize: 4,
  m: 0,
}

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  color: 'text',
  regular: true,
  fontSize: 3,
  m: 0,
}

Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = {
  color: 'text',
  bold: true,
  fontSize: 2,
  m: 0,
}

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  color: 'text',
  bold: true,
  caps: true,
  fontSize: 1,
  m: 0,
}

/** @component */
export default Heading
