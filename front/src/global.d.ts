/* eslint-disable no-unused-vars */

/*
  THEME
*/

declare type Typography = {
  fontFamily: {
    primary: string
    secondary: string
  }
  fontWeight: {
    normal: number
    bold: number
  }
}

declare type Palette = {
  primary: string
}

declare type ThemeType = {
  palette: Palette
  typography: Typography
}

interface WithTheme {
  theme: ThemeType
}
