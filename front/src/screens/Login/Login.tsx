import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'

import { useAuth } from '../../hooks/useAuth'

import { If } from '../../components/If'

const { REACT_APP_DEV_EMAIL, REACT_APP_DEV_PASSWORD } = process.env

const Login = () => {
  const [email, setEmail] = useState<string>(REACT_APP_DEV_EMAIL || '')
  const [password, setPassword] = useState<string>(REACT_APP_DEV_PASSWORD || '')
  const { login, inFlight, isAuthenticated } = useAuth()

  const handleLogin = () => {
    login({ email, password })
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
      <h1>Login</h1>
      <TextField
        required
        label="UserName"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <TextField
        required
        label="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={inFlight}
      >
        <If condition={inFlight}>
          <CircularProgress
            size={20}
            style={{
              color: 'white',
            }}
          />
        </If>
        <If condition={!inFlight}>LogIn</If>
      </Button>
    </div>
  )
}

export default Login
