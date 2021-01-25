import React, { FC, ReactElement, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { login } from '../../api'
import { sessionStorage } from '../../utils'

interface Login {}

const Login: FC<Login> = (): ReactElement => {
  const history = useHistory()
  const { REACT_APP_DEV_EMAIL, REACT_APP_DEV_PASSWORD } = process.env

  useEffect(() => {
    async function handleLogin() {
      const { data } = await login(REACT_APP_DEV_EMAIL, REACT_APP_DEV_PASSWORD)
      if (data.ok) {
        sessionStorage.set('token', data.data)
        history.push('/')
      }
    }

    handleLogin()
  }, [])

  console.log('login')

  return (
    <div>
      <h1>Login</h1>
      <p>User {REACT_APP_DEV_EMAIL} being logged in ...</p>
    </div>
  )
}

export default Login