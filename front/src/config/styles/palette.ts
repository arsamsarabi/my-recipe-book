import {
  PaletteOptions,
  SimplePaletteColorOptions,
} from '@material-ui/core/styles/createPalette'
import grey from '@material-ui/core/colors/grey'

import { generateSimpleColorOptions } from './helpers'

export type PaletteType = PaletteOptions & {
  primary: SimplePaletteColorOptions
  secondary: SimplePaletteColorOptions
  danger: SimplePaletteColorOptions
  success: SimplePaletteColorOptions
  black: string
  white: string
  snow: string
}

export const palette: PaletteType = {
  primary: generateSimpleColorOptions('#fdcb6e'),
  secondary: generateSimpleColorOptions('#e84393'),
  danger: generateSimpleColorOptions('#eb4d4b'),
  success: generateSimpleColorOptions('#2ecc71'),
  grey,
  black: '#212121',
  white: '#f1f1f1',
  snow: '#fff',
}
