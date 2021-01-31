import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import AppRouter from './navigation'
import {  darkTheme } from './config'

const App = () => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <AppRouter />
    </MuiThemeProvider>
  )
}

export default App
