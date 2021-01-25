import React, { ReactElement, FC } from 'react'

import { AuthProvider } from './AuthContext'

interface ContextProviderInterface {
  children: ReactElement
}
const ContextProvider: FC<ContextProviderInterface> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export { ContextProvider }
