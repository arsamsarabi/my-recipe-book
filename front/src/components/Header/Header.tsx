import React, { FC, ReactElement } from 'react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'

import { useStyles} from './styles'
import { If } from '../If'
import { useAuth } from '../../hooks'

export const Header: FC = (): ReactElement => {
  const { isAuthenticated, logout } = useAuth()
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>My Recipe Book</h1>
      <If condition={isAuthenticated}>
        <Button variant="contained" color="secondary" onClick={logout}>
          <LogoutIcon />
          Logout
        </Button>
      </If>
    </div>
  )
}
