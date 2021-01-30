import { createMuiTheme } from '@material-ui/core/styles'

import { palette, PaletteType } from './palette'
import { fonts, FontsType } from './fonts'

export type ThemeType = {
  palette: PaletteType
  fonts: FontsType
}

export const theme: ThemeType = {
  palette,
  fonts,
}

export const muiTheme = createMuiTheme(theme)
