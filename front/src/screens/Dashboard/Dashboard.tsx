import React, { FC, ReactElement } from 'react'

interface Dashboard {}

const Dashboard: FC<Dashboard> = (): ReactElement => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
