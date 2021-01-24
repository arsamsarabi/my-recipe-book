import React from 'react'

import { AppRouter, AuthRouter } from './navigation'
import { GlobalStyles, theme } from './config'

function App() {
  const isUserLoggedIn = true

  return (
    <>
      <GlobalStyles theme={theme} />
      {isUserLoggedIn ? <AppRouter /> : <AuthRouter />}
    </>
  )
}

export default App
