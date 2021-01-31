import { createMuiTheme } from '@material-ui/core/styles'
import {yellow} from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: 'black',
      default: 'black'
    },
    primary:{
      light: yellow[500],
      main: yellow[700],
      dark: yellow[900],
      contrastText: 'white'
    }
  },
})


export const darkTheme = createMuiTheme(theme)
