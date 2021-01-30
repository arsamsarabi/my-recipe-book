import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import AppRouter from './navigation'
import { GlobalStyles, theme, muiTheme } from './config'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MuiThemeProvider theme={muiTheme}>
        <AppRouter />
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default App
