import React, { ReactElement, FC } from 'react'

import { Header } from '../Header'
import { LeftNav } from '../LeftNav'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <div>
      <Header />
      <div>
        <LeftNav />
        <div>{children}</div>
      </div>
    </div>
  )
}
