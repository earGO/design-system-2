import csscolors from 'css-color-names'
import { lighten, darken } from './utils'

const black = '#3a3a3a'
const white = '#ffffff'

// greys
const lightGrey = '#f5f5f5'
const semiLightGrey = '#ecebeb'
const grey = '#b5b5b5'

const red = '#ef5350'
const green = '#66bb6a'
// blues
const lightBlue = '#0091ea'
const blue = '#1e88e5'
const darkBlue = darken(blue, 0.75)

const palette = {
  ...csscolors,
  black,
  white,
  lightGrey,
  semiLightGrey,
  grey,
  lightBlue,
  blue,
  darkBlue,
  red,
  green,
}

const components = {
  // Input element
  input: {
    hover: palette.black,
    disabled: palette.grey,
    error: palette.red,
    success: palette.green,
    focus: palette.lightBlue,
  },

  // Checkbox
  checkbox: {
    checked: palette.lightBlue,
    unchecked: palette.lightGrey,
    disabled: palette.grey,
  },

  //Tabs
  tabs: {
    active: palette.blue,
    hover: palette.lightBlue,
  },
  //Radio
  radio: {
    checked: palette.lightBlue,
    unchecked: palette.lightGrey,
    disabled: palette.grey,
  },
}

const system = {
  // Main color
  primary: palette.blue,

  // States
  info: palette.lightBlue,
  success: palette.green,
  warning: palette.orange,
  error: palette.red,

  // Misc
  text: palette.darkBlue,
  border: palette.semiLightGrey,

  // Disabled
  disabled: palette.grey,
  // Highlight? placeholder for now.
  highlight: palette.lightGrey,
  highlightHover: palette.lightBlue,
  // Scrollbar
  scrollbar: palette.grey,
  // border: palette.semiLightGrey,
}

export default {
  system,
  palette,
  ...palette,
  ...system,
  ...components,
}
