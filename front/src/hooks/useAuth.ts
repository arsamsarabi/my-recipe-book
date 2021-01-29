import { useState, useEffect } from 'react'
import { loginCredentialsType, postLogin } from '../api'
import jwt_decode, { JwtPayload } from 'jwt-decode'
import authStore, {tokenInFlightType, tokenType} from '../store/authStore'
import { useGlobalState } from '../store/helper'

const { tokenStore, tokenInFlightStore } = authStore

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
  const [inFlight, setInFlight] = useGlobalState<tokenInFlightType>(tokenInFlightStore)

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
    setInFlight(true)
    const response = await  postLogin({ email, password })
    setInFlight(false)
    setToken(response?.data?.data)
  }

  const handleLogout = () => {
    setToken(undefined)
  }

  return {
    login,
    logout: handleLogout,
    inFlight,
    isAuthenticated,
  }
}
