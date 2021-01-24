import React, { FC, ReactElement } from 'react'

import { HeaderWrapper } from './styles'

export const Header: FC = (): ReactElement => {
  return (
    <HeaderWrapper>
      <h1>My Recipe Book</h1>
    </HeaderWrapper>
  )
}
