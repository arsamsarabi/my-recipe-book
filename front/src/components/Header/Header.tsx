import React, { FC, ReactElement } from 'react'
import Button from '@material-ui/core/Button'
import LogoutIcon from '@material-ui/icons/ExitToApp'

import { HeaderWrapper } from './styles'
import { If } from '../If'
import { useAuth } from '../../hooks/useAuth'

export const Header: FC = (): ReactElement => {
  const { isAuthenticated, logout } = useAuth()
  return (
    <HeaderWrapper>
      <h1>My Recipe Book</h1>
      <If condition={isAuthenticated}>
        <Button variant="contained" color="secondary" onClick={logout}>
          <LogoutIcon />
          Logout
        </Button>
      </If>
    </HeaderWrapper>
  )
}
