import { useState, useEffect } from 'react'
import jwt_decode, { JwtPayload } from 'jwt-decode'

interface UseTokenState {
  token: object | null
  expired: boolean
}

const INITIAL_STATE = {
  token: null,
  expired: false,
}

export const useToken = (token: string | null) => {
  const [state, setState] = useState<UseTokenState>(INITIAL_STATE)

  const renewToken = (_token: string | null) => {
    if (_token === null) {
      return { expired: true, token: null }
    }

    const decoded: JwtPayload = jwt_decode(_token)
    const current_time = new Date().getTime() / 1000
    const isExpired = decoded.exp ? current_time > decoded.exp : true

    if (isExpired) {
      return {
        token: null,
        expired: true,
      }
    }

    return {
      token: decoded,
      expired: false,
    }
  }

  useEffect(() => {
    const result = renewToken(token)
    setState(result)
  }, [token])

  return { expired: state.expired, token: state.token }
}
