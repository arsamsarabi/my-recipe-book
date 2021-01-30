import { lighten, darken } from 'polished'
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette'

export const generateSimpleColorOptions = (
  color: string
): SimplePaletteColorOptions => {
  return {
    light: lighten(0.25, color),
    main: color,
    dark: darken(0.25, color),
  }
}
