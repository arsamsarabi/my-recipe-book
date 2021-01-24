import React, { ReactElement, FC } from 'react'

import { Header } from '../Header'
import { LayoutWrapper, Main } from './styles'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}
