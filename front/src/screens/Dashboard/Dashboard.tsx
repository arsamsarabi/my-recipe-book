import React, { FC, ReactElement } from 'react'

import { Button } from '../../components'

interface Dashboard {}

const Dashboard: FC<Dashboard> = (): ReactElement => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="outline" onClick={() => console.log('d')}>
        Hi
      </Button>
    </div>
  )
}

export default Dashboard
