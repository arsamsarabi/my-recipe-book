import {
  PaletteOptions,
  SimplePaletteColorOptions,
} from '@material-ui/core/styles/createPalette'
import grey from '@material-ui/core/colors/grey'

export type PaletteType = PaletteOptions & {
  primary: SimplePaletteColorOptions
  secondary: SimplePaletteColorOptions
  black: string
  white: string
  snow: string
  yellow: string
}

export const palette: PaletteType = {
  primary: {
    light: '#66b1e4',
    main: '#3498db',
    dark: '#1e73ac',
  },
  secondary: {
    light: '#ed72ad',
    main: '#e84393',
    dark: '#c7186d',
  },
  grey,
  black: '#212121',
  white: '#f1f1f1',
  snow: '#fff',
  yellow: '#ffe598',
}
