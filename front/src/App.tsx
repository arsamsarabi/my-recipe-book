import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppRouter from './navigation'
import { GlobalStyles, theme } from './config'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
