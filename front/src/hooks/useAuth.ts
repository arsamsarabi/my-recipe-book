import { useState, useEffect } from 'react'
import jwt_decode, { JwtPayload } from 'jwt-decode'

import { loginCredentialsType, postLogin } from '../api'
import authStore, { tokenType } from '../store/authStore'

const { useTokenStore } = authStore

const checkBearerToken = (token: tokenType) => {
  if (!token) {
    return false
  }
  const current_time = new Date().getTime() / 1000
  const decoded: JwtPayload = jwt_decode(token)
  return decoded.exp ? current_time < decoded?.exp : false
}

export const useAuth = () => {
  const [{ token, inFlight = false, error }, setToken] = useTokenStore()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    checkBearerToken(token)
  )

  useEffect(() => {
    setIsAuthenticated(checkBearerToken(token))
  }, [token])

  const login = async ({ email, password }: loginCredentialsType) => {
    if (inFlight) {
      return
    }
    try {
      setToken({ inFlight: true })
      const response = await postLogin({ email, password })
      setToken({ token: response?.data?.data })
      if(response?.data?.data){
        sessionStorage.setItem('token', response?.data?.data)
      }
    } catch (err) {
      setToken({ error: err.message })
      sessionStorage.removeItem('token')
    }
  }

  const logout = () => {
    setToken({})
    sessionStorage.removeItem('token')
  }

  return {
    login,
    logout,
    isAuthenticated,
    inFlight,
    error,
  }
}
