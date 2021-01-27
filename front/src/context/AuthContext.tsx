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

interface AuthState {
  user: null | object
  isAuthenticated: boolean
}

type AuthContext = AuthState & {
  // eslint-disable-next-line no-unused-vars
  handleLogin: (token: string) => void
  handleLogout: () => void
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const AuthContext = createContext<Partial<AuthContext>>({
  ...initialState,
  handleLogin: () => {},
  handleLogout: () => {},
})

interface AuthProviderProps {
  children: ReactElement
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>(initialState)

  const { token, expired } = useToken(sessionStorage.get('token'))

  useEffect(() => {
    setState({
      user: token,
      isAuthenticated: Boolean(token) && !expired,
    })
  }, [])

  const value: AuthContext = {
    ...state,
    handleLogin: (token: string) => {
      const { token: user } = useToken(token)
      setState({
        user,
        isAuthenticated: true,
      })
    },
    handleLogout: () =>
      setState({
        user: null,
        isAuthenticated: false,
      }),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
