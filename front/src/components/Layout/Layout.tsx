import React, { ReactElement, FC } from 'react'

import { Header } from '../Header'
import { LeftNav } from '../LeftNav'
import Grid from '@material-ui/core/Grid'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3}>
        <LeftNav />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  )
}
