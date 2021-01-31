import { createMuiTheme } from '@material-ui/core/styles'
import {darken, lighten} from 'polished'
import {grey} from '@material-ui/core/colors'

//https://material-ui.com/customization/default-theme/#default-theme
const theme = createMuiTheme({
  palette: {
    type:'light', // https://material-ui.com/customization/palette/#dark-mode
    background: {
      paper: 'white',
      default: 'white',
    },
    primary:{
      light: lighten(0.25, '#fdcb6e'),
      main: '#fdcb6e',
      dark: darken(0.25, '#fdcb6e'),
      contrastText: grey[900]
    },
    secondary:{
      light: lighten(0.25, '#e84393'),
      main: '#e84393',
      dark: darken(0.25, '#e84393'),
      contrastText: grey[900]
    },
    error:{
      light: lighten(0.25, '#eb4d4b'),
      main: '#eb4d4b',
      dark: darken(0.25, '#eb4d4b'),
      contrastText: grey[900]
    },
    success:{
      light: lighten(0.25, '#eb4d4b'),
      main: '#eb4d4b',
      dark: darken(0.25, '#eb4d4b'),
      contrastText: grey[900]
    },
  },
})

export const lightTheme = createMuiTheme(theme)
