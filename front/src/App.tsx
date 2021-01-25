import React from 'react'
import { ThemeProvider } from 'styled-components'

import AppRouter from './navigation'
import { GlobalStyles, theme } from './config'
import { ContextProvider } from './context'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App
