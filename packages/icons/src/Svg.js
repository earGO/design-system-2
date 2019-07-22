import styled, {keyframes, css} from 'styled-components'
import {space, color} from 'styled-system'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const styles = css`
  animation: ${rotate};
  animation-duration: ${props => (props.spin ? '2s' : ' 0s')};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

const Svg = styled('svg')`
  flex: none;
  ${styles}
  ${space}
  ${color}
`

Svg.propTypes = {
  ...space.propTypes,
  ...color.propTypes
}

export default Svg
