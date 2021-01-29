import { useState, useEffect } from 'react'
import { loginCredentialsType, postLogin } from '../api'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import authStore, { tokenType } from '../store/authStore'
import { useGlobalState } from '../store/helper'

const { tokenStore } = authStore

const checkBearerToken = (token: tokenType) => {
  if (typeof token !== 'string') {
    return false
  }
  const current_time = new Date().getTime() / 1000
  const decoded: JwtPayload = jwt_decode(token)
  return decoded.exp ? current_time < decoded?.exp : false
}

export const useAuth = () => {
  const [token, setToken] = useGlobalState<tokenType>(tokenStore)

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    checkBearerToken(token)
  )

  useEffect(() => {
    setIsAuthenticated(checkBearerToken(token))
  }, [token])

  const login = async ({ email, password }: loginCredentialsType) => {
    if (token?.promised) {
      return
    }
    const response = await  postLogin({ email, password })
    setToken(response?.data?.data)
  }

  const handleLogout = () => {
    setToken(undefined)
  }

  return {
    login,
    logout: handleLogout,
    inFlight: token?.promised,
    isAuthenticated,
  }
}
