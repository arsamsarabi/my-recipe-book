import React from 'react'
import { ThemeProvider } from 'styled-components'

import { AppRouter, AuthRouter } from './navigation'
import { GlobalStyles, theme } from './config'
import { login } from './api'
import { useApi } from './hooks'
import { Loading } from './components'

const App = () => {
  const isUserLoggedIn = true
  const { REACT_APP_DEV_EMAIL, REACT_APP_DEV_PASSWORD } = process.env
  const { loading, data, error } = useApi(() =>
    login(REACT_APP_DEV_EMAIL, REACT_APP_DEV_PASSWORD),
  )

  console.log('-------------------------------')
  console.log(loading)
  console.log(data)
  console.log(error)
  console.log('-------------------------------')

  return <Loading />
  if (loading) return <Loading />

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isUserLoggedIn ? <AppRouter /> : <AuthRouter />}
      </ThemeProvider>
    </>
  )
}

export default App
