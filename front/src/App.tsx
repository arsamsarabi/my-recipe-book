import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import AppRouter from './navigation'
import themeStore, {themeEnum} from './store/themeStore'
import {darkTheme, lightTheme} from './config/styles/themes'

const {useTheme} = themeStore

const App = () => {
  const [theme]= useTheme()

  let themeToUse = darkTheme
  if(theme === themeEnum.LIGHT_THEME){
    themeToUse = lightTheme
  }
  return (
    <>
      <MuiThemeProvider theme={themeToUse}>
        <>
          <CssBaseline/>
          <AppRouter />
        </>
      </MuiThemeProvider>
    </>
  )
}

export default App
