import grey from '@material-ui/core/colors/grey'

import { generateSimpleColorOptions } from '../../helpers'

import {PaletteType} from '../types'

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
