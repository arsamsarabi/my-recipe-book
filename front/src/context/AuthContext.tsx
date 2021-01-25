import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  FC,
  useEffect,
} from 'react'

import { useToken } from '../hooks'
import { sessionStorage } from '../utils'

interface AuthContext {
  user: null | object
  isAuthenticated: boolean
}

const initialContext: AuthContext = {
  user: null,
  isAuthenticated: false,
}

const AuthContext = createContext<AuthContext>(initialContext)

interface AuthProviderProps {
  children: ReactElement
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthContext>({
    user: null,
    isAuthenticated: false,
  })

  const { token, expired } = useToken(sessionStorage.get('token'))

  useEffect(() => {
    setState({
      user: token,
      isAuthenticated: Boolean(token) && !expired,
    })
  }, [token, expired])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
