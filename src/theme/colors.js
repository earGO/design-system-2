import { makeShades, mix } from './utils'

const black = '#000'
const white = '#FFF'
const grey = '#888'
const blue = '#1890ff'
const red = '#f5222d'
const green = '#52c41a'
const orange = '#faad14'

export const palette = {
  black,
  white,
  grey,
  ...makeShades('Grey', grey),
  blue,
  ...makeShades('Blue', blue),
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
  text: palette.darkBlue,
  border: palette.lightGrey,

  // Disabled
  disabled: palette.lightGrey,
  // Highlight? placeholder for now.
  highlight: palette.semiLightBlue,
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
