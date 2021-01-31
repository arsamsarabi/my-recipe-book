import React, { ReactElement, FC } from 'react'

import { Header } from '../Header'
import { LeftNav } from '../LeftNav'
import { LayoutWrapper, Main, Content } from './styles'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <LeftNav />
        <Content>{children}</Content>
      </Main>
    </LayoutWrapper>
  )
}
