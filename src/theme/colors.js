import { makeShades, mix } from './utils'

const black = '#3a3a3a'
const white = '#ffffff'
// greys
const lightGrey = '#f5f5f5'
const grey = '#b5b5b5'

const red = '#ef5350'
const green = '#66bb6a'
// blues
const lightBlue = '#0091ea'
const blue = '#1e88e5'
const darkBlue = '#1976d2'

const orange = '#ffff00'

export const palette = {
  ...makeShades('Blue', blue),
  ...makeShades('Grey', grey),
  black,
  white,
  lightGrey,
  grey,
  blue,
  darkBlue,
  lightBlue,
  red,
  green,
  orange,
}

export const system = {
  // Main color
  primary: palette.blue,

  // States
  info: palette.semiLightBlue,
  success: palette.green,
  warning: palette.orange,
  error: palette.red,

  // Misc
  text: palette.black,
  border: palette.lightGrey,
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

  // Disabled
  disabled: palette.grey,
  // Highlight? placeholder for now.
  highlight: palette.semiLightBlue,
  highlightHover: palette.lightBlue,
  // Scrollbar
  scrollbar: palette.semiLightGrey,
}

const mixes = {
  disabledPrimary: mix(system.primary, system.disabled, 0.7),
}

export default {
  ...palette,
  ...system,
  ...mixes,
}
