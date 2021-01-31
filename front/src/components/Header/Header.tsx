import React from 'react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'

import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {useStyles} from './styles'
import {If} from '../If'
import {useAuth} from '../../hooks'

import Divider from '@material-ui/core/Divider'
import themeStore, {themeEnum} from '../../store/themeStore'

const {useTheme} = themeStore

export const Header = () => {
  const { isAuthenticated, logout } = useAuth()
  const [theme,setTheme]= useTheme()
  const classes = useStyles()

  const checked = theme === themeEnum.DARK_THEME
  const handleDarkModeOnChange = () =>{
    setTheme(checked ? themeEnum.LIGHT_THEME: themeEnum.DARK_THEME)
  }

  return (
    <>
      <div className={classes.header}>
        <h1 className={classes.title}>My Recipe Book</h1>
        <FormGroup row>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleDarkModeOnChange} />}
            label={checked ? 'Dark Mode': 'Light Mode'}
          />
        </FormGroup>

        <If condition={isAuthenticated}>
          <Button variant="contained" color="secondary" onClick={logout}>
            <LogoutIcon />
            Logout
          </Button>
        </If>

      </div>
      <Divider/>
    </>
  )
}
