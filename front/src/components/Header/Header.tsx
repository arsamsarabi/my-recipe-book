import React, { FC, ReactElement } from 'react'

import { HeaderWrapper } from './styles'
import Button from "@material-ui/core/Button";
import {If} from "../If";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useAuth} from "../../hooks/useAuth";

export const Header: FC = (): ReactElement => {
  const { isAuthenticated, logout } = useAuth()
  return (
    <HeaderWrapper>
      <h1>My Recipe Book</h1>
      <If condition={isAuthenticated}>
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </If>
    </HeaderWrapper>
  )
}
