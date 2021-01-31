import { createMuiTheme } from '@material-ui/core/styles'
import { grey} from '@material-ui/core/colors'
import {darken, lighten} from 'polished'

//https://material-ui.com/customization/default-theme/#default-theme
const theme = createMuiTheme({
  palette: {
    type:'dark', // https://material-ui.com/customization/palette/#dark-mode
    background: {
      paper: grey[900],
      default: grey[900],
    },
    primary:{
      light: lighten(0.25, '#fdcb6e'),
      main: '#fdcb6e',
      dark: darken(0.25, '#fdcb6e'),
      contrastText: 'white'
    },
    secondary:{
      light: lighten(0.25, '#e84393'),
      main: '#e84393',
      dark: darken(0.25, '#e84393'),
      contrastText: 'white'
    },
    error:{
      light: lighten(0.25, '#eb4d4b'),
      main: '#eb4d4b',
      dark: darken(0.25, '#eb4d4b'),
      contrastText: 'white'
    },
    success:{
      light: lighten(0.25, '#eb4d4b'),
      main: '#eb4d4b',
      dark: darken(0.25, '#eb4d4b'),
      contrastText: 'white'
    }
  },
})

export const darkTheme = createMuiTheme(theme)
