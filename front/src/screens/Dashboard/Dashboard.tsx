import React from 'react'

import { Button } from '../../components'

const Dashboard = () => {
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
